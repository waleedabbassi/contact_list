const express=require("express")
const router=express.Router()
const Contact=require("../models/Contact")

// test 
// localhost:5000/contacts/test
// @ path
// description : test route 
// public ou private

router.get('/test',(req,res)=>{
    res.send("tested")
})

// add contact

router.post('/addContact',(req,res)=>{

const {name,email,phone}=req.body
const newContact=new Contact({
name,email,phone

})
newContact.save()
.then(contacts=>res.send(contacts))
.catch(err=>console.log(err))

})

// get all contact
router.get('/all',(req,res)=>{
    Contact.find()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

// delete contact

router.delete("/deleteContact/:_id",(req,res)=>{

const {_id}=req.params
Contact.findByIdAndDelete({_id})

.then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))

})

// get contact by id

router.get("/:_id",(req,res)=>{

    const {_id}=req.params
    Contact.findOne({_id})
    
    .then(contacts=>res.send(contacts))
        .catch(err=>console.log(err))
    
    })

// edite  contact

router.put("/editContact/:_id",(req,res)=>{

    const {_id}=req.params
    const {name,email,phone}=req.body
    Contact.findOneAndUpdate({_id},{$set:{name,email,phone}})
    
    .then(contacts=>res.send(contacts))
        .catch(err=>console.log(err))
    
    })




module.exports=router