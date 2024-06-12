const mongoose = require('mongoose');
const { z } = require('zod');

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

const orderValidationSchema = z.object({
  customer: z.string().refine(val => mongoose.Types.ObjectId.isValid(val)),
  product: z.string().min(1),
  quantity: z.number().min(1),
  price: z.number().min(0),
});

module.exports = { Order, orderValidationSchema };
