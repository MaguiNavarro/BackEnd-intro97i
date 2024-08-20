const Usuario= require("../models/usuario");
const Rol= require("../models/rols");
const usuario = require("../models/usuario");
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
const esIdValido= async (id)=> {
    const existeUsuario= await usuario.findById({id});
    if (existeUsuario) {
        throw new Error(` El correo ${id} ya existe en la base de datos!`);
    }
};

module.exports={esMailValido,esRolValido,esIdValido, };