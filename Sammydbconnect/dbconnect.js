const mongoose =require('mongoose');

const connectSammy = asyn ()=>{

    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
}catch(err){
    console.log
}