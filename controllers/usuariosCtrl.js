const {response, request}= require("express");

//Controlador GET
const usuariosGet=(  req= request, res= response)=>{
    const {limit,key }= req.query;
    res.json({mensaje:"Mensaje recibido de usuarios",limit, //key 

     });
};

const usuariosPost= ((req=request,res=response)=>{
  const datos= req.body;
 // const {nombre,correo,password,rol,edad}= datos;

    res.json({datos, mensaje:" ENVIO el Mensaje ", 
     });
 });
 
 //RUTA PUT este MODIFICA DATOS
 const usuariosPut=((req=request,res=response)=>{
    res.json({mensaje:" MODIFICO Datos ",  })
 });

//RUTA DELETE este ELIMINA DATOS
  const usuariosDelete=((req=request,res=response)=>{
    res.json({mensaje:" ELIMINO Datos ",  })
 });
module.exports= {usuariosGet, usuariosDelete,usuariosPost,usuariosPut};
