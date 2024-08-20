const {validationResult}= require("express-validator");
//HACE QUE MI servidor siga funcionando y no caiga
const validarCampos= (req, res,next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json(errors);
    }

    next();//Hace que el servidor no caiga por mas q haya error
};
module.exports= {validarCampos, };