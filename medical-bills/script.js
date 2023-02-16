const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
let bills = [];

app.use(bodyParser.json());

//Get Items
app.get('/items',(req, res)=> {
    res.json(bills);
})

//POst items
app.post('/items', (req, res) => {
    const{patientName, patientAddress, hospitalName, dateOfService, billAmount} = req.body;
    const newBill = {patientName, patientAddress, hospitalName, dateOfService, billAmount};
    bills.push(newBill);
    res.status(201).json(newBill);
})

//server start
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})

module.exports = app;