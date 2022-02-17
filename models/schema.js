const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    degisnation:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    },
    adharnumber:{
        type:Number,
        require:true
    }
    
})
 

const CompanyRecord = new mongoose.model("CompanyRecord",companySchema)

module.exports=CompanyRecord;