const express = require("express")
const cors = require("cors");
const customerRouter =require ("../routes/customerRoutes")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1" , customerRouter);

app.listen(3000)