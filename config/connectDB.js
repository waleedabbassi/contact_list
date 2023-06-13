const mongoose=require("mongoose")
const config=require('config')


const connectDB=()=>{




// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/ContactDataBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
}
  module.exports=connectDB