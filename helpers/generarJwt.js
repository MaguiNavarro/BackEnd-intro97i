const jwt= require("jsonwebtoken");

//CONFIGURA EL TOKEN
const generarJWT= (uid)=>{  //UID RECIBE EL ID DEL USUARIO en authCtrl
    return new Promise((resolve,reject)=>{
        const payload= {uid};  //PAYLOAD donde vienen los datos del usuario

        jwt.sign(payload, process.env.secretOrPrivateKey /*donde viene la clave secreta*/,{expiresIn: "2h"}, (error, token)=>{
            if(error){
                console.log(error);
                reject("NO se puede geneerar Token!")
                
            }else{
                resolve(token);
            }
        } );
    } )
}

module.exports= {generarJWT,}