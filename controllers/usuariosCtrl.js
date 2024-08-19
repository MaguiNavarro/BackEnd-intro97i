const {response, request}= require("express");
const Usuario=  require("../models/usuario");
const bcrypt = require('bcryptjs');


//Controlador GET
const usuariosGet=(  req= request, res= response)=>{
    const {limit,key }= req.query;
    res.json({mensaje:"Mensaje recibido de usuarios",limit, //key 

     });
};


//CONTROLADOR POST
const usuariosPost = async  (req=request,res=response)=>{
  //LO que recibo del FRONT
  const datos= req.body;
  const {nombre,correo,password,rol}= datos;
  //NUEVA INSTANCIA para unir con el BACK
  const usuario= new Usuario({nombre,correo,password,rol }); //PARA Unir front y esquema de back

  //ENcriptar contraseña
 const salt = bcrypt.genSaltSync(10);//encripta la contraseña, 10 veces encripta
 const hash = bcrypt.hashSync(password, salt);
 usuario.password= hash;

 //GUARDAR EN BD
 await usuario.save();

    res.json({usuario, mensaje:"Usuario REGISTRADO ", 
     });
 };
 
 //RUTA PUT este MODIFICA DATOS
 const usuariosPut=((req=request,res=response)=>{

    res.json({mensaje:" MODIFICO Datos ",  })
 });

//RUTA DELETE este ELIMINA DATOS
  const usuariosDelete=((req=request,res=response)=>{
    res.json({mensaje:" ELIMINO Datos ",  })
 });
module.exports= {usuariosGet, usuariosDelete,usuariosPost,usuariosPut};
