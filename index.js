const e = require('express')
const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://rbit2:select*from2@rbit2.o3cnu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 .then(() => console.log('MongoDB Connected..'))
 .catch(e=>console.log(e))


app.get('/', (req,res) => res.send('멍멍아 이제 잘 시간이야 ~'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

