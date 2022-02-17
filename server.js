const express = require('express')
 require('./db/conn')
 const CompanyRecord = require('./models/schema');
const router = require('./routers/routes');

const app = express();

const port =3000;
 
app.use(express.json())

app.use(router)




app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
