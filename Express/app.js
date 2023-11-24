const express = require('express')
const app = express()
let { people } = require('./data')

// static assets
app.use(express.static(''))


app.get('/api/people',(req,res)=>{
    res.status(200).json({sucess:true,data:people})
})

app.listen(5000,()=>{
    console.log('SERVER IS LISTENING ')
})