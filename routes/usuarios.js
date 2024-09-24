//ALOJAR TODAS LAS RUTAS 
const { Router } = require ("express");
const {check}= require ("express-validator");
const {validarCampos}= require("../middlewares/validar_campos");
const router= Router();
const {esMailValido, esRolValido, esIdValido}= require("../helpers/db_validators");
const {validarJWT}= require("../middlewares/validar_Jwt")

const {usuariosGet, usuariosDelete,usuariosPost,usuariosPut}= require("../controllers/usuariosCtrl");//hace mas limpio el codigo
const { esAdmin } = require("../middlewares/validar_roles");

//RUTA GET //PARA PEDIDOS y devuelve
router.get("/",usuariosGet);

//RUTA POST-Register  //recibe datos NUEVOS
   //AGREGO LAS VALIDACIONES DENTRO DEL CORCHETE
router.post("/",
  [check("nombre", "EL nombre Es obligatorio").notEmpty(),
  check("password", "Debe tener 6 caracteres como min").isLength({ min:6 }), check("correo", "No es un correo Valido!").isEmail(), check("correo").custom(esMailValido), //CUSTOM me permite agregar o usar los metodos que hago
  check("rol").custom(esRolValido),
  validarCampos, ],
  usuariosPost);
 
 //RUTA PUT este MODIFICA DATOS
 router.put("/:id",[check("id", "No es un Id valido!").isMongoId(), check("id").custom(esIdValido), validarCampos,],
   usuariosPut);

//RUTA DELETE este ELIMINA DATOS
  router.delete("/:id",[validarJWT,esAdmin, check("id", "No es un Id valido!").isMongoId(), check("id").custom(esIdValido), validarCampos,], usuariosDelete);

 module.exports= router; 