const express = require('express'); //requerir express
const app = express(); //ejecutar express
const port = 3000; //crear un puerto
app.use(express.json()); //Utilizar JSON
const mongoose = require("mongoose") //Requerir mongoose
const cors = require('cors')

async function main() {
    //Conectando con la base de datos
    await mongoose.connect("mongodb://localhost:27017/test"); //se indica que se esta esperando la conexion
}

//Ejecutamos la conexion a la base de datos y probamos que todo este bien
main().catch((err) => console.log(err));

//mi primera ruta
const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    identificationNumber: Number,
    dateOfBirth: String
});

const Customers = mongoose.model("Customers", customerSchema);

app.get("/customers", async (req, res) => {
    const customer = await Customers.find();
    res.json(customer);
});

app.post("/customers", async (req,res) => {
    const customer = new Customers(req.body);
    await customer.save();
    res.status(201).send("Saved");
});

app.patch("/customers/:customerID", (req,res) => {
    Customers.updateOne(
        { _id: req.params.customerID },
        req.body,
        function (err, docs) {
            if (err) {
                res.send(err);
            } else {
                res.send("Updated");
            }
        }
    );
});

//escucho al puerto que cree
app.listen(port, () => {
    console.log('My port ' + port);
});
