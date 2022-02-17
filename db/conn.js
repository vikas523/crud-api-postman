const mongoose = require('mongoose')

mongoose.connect(("mongodb://localhost:27017/practise31"),{

}).then(()=>{
    console.log("connect succesful");
}).catch(()=>{
    console.log("not connected");
})