const express= require ("express");
const cors= require("cors");


class Server{
    constructor(){
        this.app= express();
        //PUERTO
        this.port= process.env.PORT; //CONECTA EL PUERTO DE FORMA AUTOMATICA


        //PATH
        this.usuariosPath= "/api/usuarios";//ES COMO voy a LLAMAR a las Rutas
        //Middlewares
        this.middlewares(); //Es todo lo que ocurre en medio de los pedidos del frontend y las respuesta del backEnd

        //rutas
        this.routes();

    }
    middlewares(){
        //CORS 
        this.app.use(cors());

        //Mostrar las carpetas Publicas
        this.app.use(express.static("public")) //Es una forma mas para comprobar que este funcionando el Back
    }
    routes(){
    //    this.app.get("/",(req, res)=>{  //Vienen los metodos de express
    //         res.send("Mensaje recibido");
    //     });
    //FORMA MAS LIMPIA
    this.app.use(this.usuariosPath, require("../routes/usuarios"));//COMO llegar a ese Archivo

    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Server Online", this.port);
            
        } ); //viene de express
    }
}
module.exports= Server;