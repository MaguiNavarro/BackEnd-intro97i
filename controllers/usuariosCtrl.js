const {response, request}= require("express");
const Usuario=  require("../models/usuario");
const bcrypt = require('bcryptjs');
//


//Controlador GET
const usuariosGet= async( req= request, res= response)=>{
   //Pedido de lista completa
   //const usuarios= await Usuario.find();
  
   //Pedidos de forma particular
    const {desde=0, limite= 0}= req.query;
    const estadoTrue= {estado: true}; //GUARDA todos los que tengan la propiedad estado en true

    //NO OPTIMIZADA
   // const usuarios= await Usuario.find().skip(desde).limit(limit);//arreglo con los objetos
   // const total=await Usuario.countDocuments();//me da EL total

    //OPTIMIZAR respuesta ms
    const [total, usuarios] = await Promise.all([
      Usuario.countDocuments(estadoTrue),
      Usuario.find(estadoTrue).skip(desde).limit(limite)
  ]);
   
    res.json({mensaje:"Lista de usuarios",usuarios,total, });
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
 const usuariosPut=async(req=request,res=response)=>{
    const {id}= req.params;
    //PARA MODIFICAR CONTRASEÑA
    const {password, ...updUsuario}= req.body; //guarda lo modificado y demas en otra variable updUsuario
    if (password) {
        //ENcriptar contraseña NUEVAMENTE
       const salt = bcrypt.genSaltSync(10);//encripta la contraseña, 10 veces encripta
       const hash = bcrypt.hashSync(password, salt);
       updUsuario.password= hash;
    }
    //encuentra por id y modifica los datos del obj
    const usuario= await Usuario.findByIdAndUpdate(id, updUsuario, 
      {new:true} )//Aplica-Guarda los datos a usuario;
    res.json({usuario,mensaje:"Se MODIFICO los Datos ",  })
 };

//RUTA DELETE este ELIMINA DATOS

  const usuariosDelete= async (req=request,res=response)=>{
   const {id}= req.params;
   //PARA CAMBIAR ESTADO DEL OBJETO
    const usuario= await Usuario.findById(id);
    //Verificar estado
    if (!usuario.estado) {
      return res.json({
        msg: "El Usuario ya esta inactivo!",
      });
    }

    //Cambiar el valor del estado
    const usuarioInactivo= await Usuario.findByIdAndUpdate(id,{estado: false}, {new:true} );

    //!ELIMINAR USUARIO De lA BD 
    // const usuarioEliminado= await Usuario.findByIdAndDelete(id);

    res.json({mensaje:"Se ELIMINO Datos ", usuarioEliminado, })
  };
module.exports= {usuariosGet, usuariosDelete,usuariosPost,usuariosPut};
