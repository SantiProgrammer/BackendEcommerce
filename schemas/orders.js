import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    username: { type: Object },
    order: { type: Object }
});

export const Order = mongoose.model("orders", orderSchema);