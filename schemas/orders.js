import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    cart: { type: String, required: true, max: 100 }
});

export const Order = mongoose.model("orders", orderSchema);