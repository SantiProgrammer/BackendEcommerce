import cors from "cors";
import http from "http";
import path from "path";
import logger from "./utils/winston.js";
import express from "express";
import session from "express-session";
import passport from "passport";
import compression from "compression";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import { config } from "./config/config.js";
import { socket } from "./utils/socket.js";
import { passportInit } from "./middleware/passportAuth.js";
import { fileURLToPath } from "url";
import { client, redisConnect, RedisStoreSession } from "./utils/redis.js";
import {
  authRouter,
  chatRouter,
  defaultRouter,
  productRouter,
  userRouter
} from "./routers/router.js";

const app = express();
const server = http.createServer(app)
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class mainServer {
  constructor() {
    this.PORT = config.SERVER.PORT;
    this.app = app
    this.server = server
    this.middlewares();
    this.routes();
    this.templatingEngine();
    this.socket();;
    this.userAuth();
  }

  userAuth() {
    passportInit();
    redisConnect();
  };

  middlewares() {
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(
      session({
        store: new RedisStoreSession({
          host: 'redis-14483.c84.us-east-1-2.ec2.cloud.redislabs.com',
          port: 14483,
          client,
          ttl: 300,
        }),
        secret: "keyboard cat",
        cookie: {
          httpOnly: false,
          secure: false,
          maxAge: 86400000, // 1 dia
        },
        admin: true,
        rolling: true,
        resave: true,
        saveUninitialized: false,
      })
    );

    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  routes() {
    this.app.use("/", defaultRouter);
    this.app.use("/api/auth", authRouter);
    this.app.use("/api/user", userRouter);
    this.app.use("/api/product", productRouter);
    this.app.use("/api/chat", chatRouter);
  }

  socket() {
    socket.init(io);
  }

  templatingEngine() {
    this.app.use("/public", express.static(__dirname + "/public"));
    this.app.set("view engine", "hbs");
    this.app.set("views", "./views");
    this.app.engine(
      "hbs",
      engine({
        extname: ".hbs",
        defaultLayout: "index.hbs",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
      })
    );

  }

  listen() {
    server.listen(this.PORT, () =>
      logger.log("info", `✅ Success: Server ON at => http://localhost:${this.PORT}`)
    );
  }
}



