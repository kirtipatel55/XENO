const express = require('express');
const { Customer, customerValidationSchema } = require('../models/Customer');
const router = express.Router();
const amqp = require('amqplib');
const amqp = require('amqplib');


consumeMessages().catch(console.error);

router.use("/customer" , customerRouter)
// Inside your route handler
router.post('/', async (req, res) => {
  try {
    const validationResult = customerValidationSchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({ error: validationResult.error.errors });
    }
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue('customerQueue');
    await channel.sendToQueue('customerQueue', Buffer.from(JSON.stringify(req.body)));
    res.status(201).json({ status: 'Message sent to queue' });
    } catch (error) {
      res.status(500).json({ error: error.message });
      }
      });
        async function consumeMessages() {
          const connection = await amqp.connect('amqp://localhost');
          const channel = await connection.createChannel();
          await channel.assertQueue('customerQueue');
          
          channel.consume('customerQueue', async (msg) => {
            const customerData = JSON.parse(msg.content.toString());
            const customer = new Customer(customerData);
            await customer.save();
            channel.ack(msg);
          });
        }

module.exports = router;
