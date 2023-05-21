module.exports=(fn)=>{
   return function(req, res, next){
    fn(req,res).catch((err)=>{
        next(err);//continuar al manejador de errores de express que  es sincrono  estas funciones se llaman de orden superior por que mejoran otra y la hace reutilizable
    })
   }
}

