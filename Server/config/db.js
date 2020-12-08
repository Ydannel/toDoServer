const mongoose = require ('mongoose');
//a la hora de conectar

require ('dotenv').config({path: 'variables.env'});

//hacer la conexion a la db
const conectar_db = async () =>{

    try{
        //toma la url y el otro un objeto de configuracion
        await mongoose.connect( process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('conectada');
    }
    catch(error){
        console.log(error);
        console.log('no conectada');
        process.exit(1);// detiene la app
    }

}
module.exports = conectar_db;