const express= require ("express");
const cors= require("cors");
//IMPORTAR BD
const {dbConnection }= require("../dataBase/config")


class Server{
    constructor(){
        this.app= express();
        //PUERTO
        this.port= process.env.PORT; //CONECTA EL PUERTO DE FORMA AUTOMATICA


        //PATH
        this.usuariosPath= "/api/usuarios";//ES COMO voy a LLAMAR a las Rutas
        //Login
        this.authPath= "/api/auth"; //Para ir al login
        //DB
        this.conectarDB();
        
        //Middlewares
        this.middlewares(); //Es todo lo que ocurre en medio de los pedidos del frontend y las respuesta del backEnd

        //rutas
        this.routes();

    }
    //BASE DATOS
    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //CORS 
        this.app.use(cors());

        this.app.use(express.json());//NOS permite config la ruta POST (sino No manda lo del postman)

        //Mostrar las carpetas Publicas
        this.app.use(express.static("public")) //Es una forma mas para comprobar que este funcionando el Back
    }
    routes(){
    //    this.app.get("/",(req, res)=>{  //Vienen los metodos de express
    //         res.send("Mensaje recibido");
    //     });
    //FORMA MAS LIMPIA
    this.app.use(this.usuariosPath, require("../routes/usuarios"));//COMO llegar a ese Archivo
    this.app.use(this.authPath, require("../routes/auth")); //Ruta para LOGIN

    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Server Online", this.port);
            
        } ); //viene de express
    }
}
module.exports= Server;