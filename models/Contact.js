const mongoose=require("mongoose")

const schema=mongoose.schema

const ContactSchema= new mongoose.Schema({

name:{type:String},
email:{type:String},
phone:{type:Number}

})

module.exports=Contact=mongoose.model('contact',ContactSchema)