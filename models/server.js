const express= require ("express");

class Server{
    constructor(){
        this.app= express();
        //PATH
        this.usuariosPath= "/api/usuarios";//ES COMO voy a LLAMAR a las Rutas
        //Middlewares
        this.middlewares(); //Es todo lo que ocurre en medio de los pedidos del frontend y las respuesta del backEnd

        //rutas
        this.routes();

    }
    middlewares(){

        //Mostrar las carpetas Publicas
        this.app.use(express.static("public")) //Es una forma mas para comprobar que este funcionando el Back
    }
    routes(){
    //    this.app.get("/",(req, res)=>{  //Vienen los metodos de express
    //         res.send("Mensaje recibido");
    //     });
    this.app.use(this.usuariosPath, require("../routes/usuarios"));//COMO llegar a ese Archivo

    }
    listen(){
        this.app.listen(3000,()=>{
            console.log("Server Online");
            
        } ); //viene de express
    }
}
module.exports= Server;