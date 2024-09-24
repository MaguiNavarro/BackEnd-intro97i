const {request,response}= require('express');

const esAdmin= async(req= request, res= response, next) => {
   if (!req.usuario) {                    //PARA CONTROLAR QUE EL TOKEN NO HAYA EXPIRADO
     return res.status(500).json({
        msg: "Necesita Validar TOKEN"
     });
   }
  const {rol, nombre}= req.usuario;
   if (rol !== "admin") {            //VALIDAR EL ROL 
    return res.status(401).json({
        msg: `${nombre} No es Administrador`,
    });
   }
 next();   
}

module.exports= {esAdmin}