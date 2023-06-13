const express=require("express")
const app=express()
const connectDB=require("./config/connectDB")
//middleware
app.use(express.json())
//connecte to database
connectDB()

// routes
app.use("/contacts",require("./routes/contact"))



//run server
const port =process.env.PORT||5000
app.listen(port,err=>
    err? console.log("erreur"):console.log(`Server is running on port ${port}`)
    )

