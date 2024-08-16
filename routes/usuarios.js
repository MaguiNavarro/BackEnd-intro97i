//ALOJAR TODAS LAS RUTAS 
const { Router } = require ("express");

const router= Router();

//RUTA GET //PARA PEDIDOS y devuelve
router.get("/",(req,res)=> {
   const {limit,key}= req.query;
   res.json({mensaje:"Mensaje recibido de usuarios",limit,key  })
});

//RUTA POST //recibe datos NUEVOS
router.post("/",(req,res)=>{
    res.json({mensaje:" ENVIO el Mensaje ", 

     });
 });
 
 //RUTA PUT este MODIFICA DATOS
 router.put("/:id",(req,res)=>{
    res.json({mensaje:" MODIFICO Datos ",  })
 });

//RUTA DELETE este ELIMINA DATOS
  router.delete("/:id",(req,res)=>{
    res.json({mensaje:" ELIMINO Datos ",  })
 });

 module.exports= router; 