//console.log("Hola mundo");
//const express= require ("express");//llamando a express
//const app = express();//Aloja todos los metodos que trae express
//app.listen(3000); //me dice en que puerto vamos a trabajar

//EL INDEX rederiza todo del server
const Server = require ("./models/server");
const server= new Server();

server.listen();