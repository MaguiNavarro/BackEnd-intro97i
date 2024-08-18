
const {Schema,model}= require("mongoose");

//Model sirve para que cada ves que se registre un nuevo tome este esquema:
//debe coincidir con los datos del front
const UsuarioSchema= Schema({
    nombre:{
      type: String,
      required: [true, "Este dato es obligatorio!"],
    },
    correo:{
        type: String,
        required: [true, "Este dato es obligatorio!"],
        unique:true, //Que el dato es unico
      },
      password:{
        type: String,
        required: [true, "Este dato es obligatorio!"]
      },
      rol:{
        type: String,
        required: [true, "Este dato es obligatorio!"],
        enum: ["user", "admin"],
        default:"user",
      },
      estado:{
        type:Boolean,
        default:true,
      },
});
module.exports= model("Usuario", UsuarioSchema);