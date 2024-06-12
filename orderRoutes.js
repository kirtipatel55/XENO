const express = require('express');
const { Order, orderValidationSchema } = require('../models/Order');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const validationResult = orderValidationSchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error.errors });
    }
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
