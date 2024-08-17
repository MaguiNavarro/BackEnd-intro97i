//ALOJAR TODAS LAS RUTAS 
const { Router } = require ("express");

const router= Router();

const {usuariosGet, usuariosDelete,usuariosPost,usuariosPut}= require("../controllers/usuariosCtrl");//hace mas limpio el codigo

//RUTA GET //PARA PEDIDOS y devuelve
router.get("/",usuariosGet);

//RUTA POST //recibe datos NUEVOS
router.post("/",usuariosPost);
 
 //RUTA PUT este MODIFICA DATOS
 router.put("/:id",usuariosPut);

//RUTA DELETE este ELIMINA DATOS
  router.delete("/:id",usuariosDelete);

 module.exports= router; 