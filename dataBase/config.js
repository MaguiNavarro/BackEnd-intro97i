const mongoose= require("mongoose");
//Realizar CONEXION CON MI BASE DE DATOS
const dbConnection= async ()=>{
  try{
    await  mongoose.connect(process.env.MONGODB_CNN);
    console.log("BASE de datos CONECTADA");
    
  }catch(error){
     console.log(error);
     throw new Error("Error en la conexion");
     
  }

}
module.exports= {dbConnection,}