const Usuario= require("../models/usuario");
const Rol= require("../models/rols");
const esMailValido= async (correo)=> {
    const existeCorreo= await Usuario.findOne({correo});
    if (existeCorreo) {
        throw new Error(` El correo ${correo} Ya Existe en la base de datos `)
    }
};
const esRolValido= async (rol)=> {
    const existeRol= await Rol.findOne({rol});
    if (!existeRol) {
        throw new Error(` El Rol ${rol} No Existe!  `)
    }
};

module.exports={esMailValido,esRolValido, };