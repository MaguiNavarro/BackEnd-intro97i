const {response, request}= require("express");
const Usuario=  require("../models/usuario");
const bcrypt = require('bcryptjs');
const {generarJWT } = require("../helpers/generarJwt");

const login =  async(req= request, res= response)=>{
  const {correo, password}= req.body;
  //VALIDACIONES
  try {
    //Validar correo
    const usuarios= await Usuario.findOne({correo});
    if (!usuarios) {
        return res.status(400).json({
            msg: "Correo o contraseña Incorrectos!",
        });
    }

    //VALIDAR Estado
    if(!usuarios.estado){
        return res.status(400).json({
            msg: "Usuario Inactivo!",
        });
    }
    //VALIDAR Password
      //TENER en cuenta la ENCRIPTACION
      const validarPassword= bcrypt.compareSync(password, usuarios.password)
      if (!validarPassword) {
        return res.status(400).json({
            msg: "Correo o contraseña Incorrectos!",
        });
      }
     //GENERAR TOKEN 
     const token= await generarJWT(usuarios.id)

     //RESPUESTA DEL BACKEND
      res.json({msg:"Login OK!",usuarios,token, });

  } catch (error) {
     console.log(error);
     return res.status(500).json({msg:"Problemas internos del SERVIDOR!"});

  }


}

module.exports= {login,};