//ALOJAR TODAS LAS RUTAS 
const { Router } = require ("express");
const {check}= require ("express-validator");
const {validarCampos}= require("../middlewares/validar_campos");
const router= Router();

const {usuariosGet, usuariosDelete,usuariosPost,usuariosPut}= require("../controllers/usuariosCtrl");//hace mas limpio el codigo

//RUTA GET //PARA PEDIDOS y devuelve
router.get("/",usuariosGet);

//RUTA POST-Register  //recibe datos NUEVOS
   //AGREGO LAS VALIDACIONES DENTRO DEL CORCHETE
router.post("/",
  [check("nombre", "EL nombre Es obligatorio").notEmpty(),
  check("password", "Debe tener 6 caracteres como min").isLength({min:6 }),check("correo", "No es un correo Valido!").isEmail(),
  validarCampos, ],
  usuariosPost);
 
 //RUTA PUT este MODIFICA DATOS
 router.put("/:id",usuariosPut);

//RUTA DELETE este ELIMINA DATOS
  router.delete("/:id",usuariosDelete);

 module.exports= router; 