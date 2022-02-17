const express = require('express')

const router = new express.Router()

const CompanyRecord = require('../models/schema')

//adding post request

router.post('/company',async (req,res)=>{
    try {
        const addRecord = new CompanyRecord(req.body)
        const insertdata = await addRecord.save()
        res.status(200).send(insertdata)
    } catch (error) {
        res.status(400).send(error)
    }
})

//handling post request 

router.get('/company',async (req,res)=>{
    try {
        
        const findData = await CompanyRecord.find({})
        res.status(200).send(findData)
        console.log(findData);
    } catch (error) {
        res.status(400).send(error)
    }
})

// find record by name

router.get('/company/:id',async (req,res)=>{
    try {
         const _id = req.params.id
        const findindividual = await CompanyRecord.findById({_id:_id})
        res.status(200).send(findindividual)
        console.log(findindividual );
    } catch (error) {
        res.status(400).send(error)
    }
})


//update record

router.patch('/company/:id', async (req,res)=>{

    try {
        const _id = req.params.id;
        const updaterecord = await CompanyRecord.findByIdAndUpdate({_id:_id},req.body,{new:true})
        res.status(200).send(updaterecord)
        console.log(updaterecord);
        
    } catch (error) {
        res.status(400).send(error)   
    }

})


//delete a record

router.delete('/company/:id', async (req,res)=>{

    try {
        
        const deleterecord = await CompanyRecord.findByIdAndDelete( req.params.id)
        res.status(200).send(deleterecord)
        console.log(deleterecord);
        
    } catch (error) {
        res.status(500).send(error)   
    }

})

module.exports=router;