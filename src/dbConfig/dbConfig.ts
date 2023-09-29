import mongoose from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection
    connection.on('connected',()=>{
        console.log('Connected')
    });
    connection.on('error',(error)=>{
        console.log(error)
        process.exit();
    })
    }catch(error){ 
        console.log("Something is wrong")
      console.log(error)
    }}