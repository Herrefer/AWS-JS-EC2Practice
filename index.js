import express from "express";
import "dotenv/config";
import cors from "cors";
import nodemon from "nodemon";

const app = express();

app.set('port', 3000);
app.listen(app.get('port'), () =>{
    console.log("Funciona! estas en el puerto 3000")
})

app.get('/',(req, res) => res.send("Mi primer EC2!!!"));


