const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000

app.use(express.json());
mongoose.connect('mongodb+srv://mjoaopaulonamorim:W88j7tnxdzcUnM9i@projeto-crud.tkvlw.mongodb.net/?retryWrites=true&w=majority&appName=projeto-crud')
    .then(()=>{
        console.log("MongoDB conectado!")
    })
    .catch((err)=>{
        console.error("Erro ao conectar ao MongoDB")
    });


const User = mongoose.model('User', { 
    name: String,
    email: String,
    password: String

    });

app.get('/', async(req, res) => {
    const user= await user.find()
    return res.send(user)
    })
app.post('/', async (req, res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    await user.save()
    res.send(user)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

