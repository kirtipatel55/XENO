const mongoose = require('mongoose');
const { z } = require('zod');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String },
});

const Customer = mongoose.model('Customer', customerSchema);

const customerValidationSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().optional(),
});

module.exports = { Customer, customerValidationSchema };
