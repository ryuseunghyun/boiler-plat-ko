const e = require('express')
const express = require('express')
const app = express()
const port = 5000
const config =require('./config/key');
//서버내리고 수정하고 다시켤필요없이 수정하면 바로 수정이 적용됨. 노드몬으로

const mongoose = require('mongoose');

//const bodyParser = require('body-parser');  //bodyparser 기능이 express에 내장되어 더 이상 필요없음.
const {User} = require('./models/User');

// application/x-www-from-urlencded <-형식을 분석해서 가져옴
app.use(express.urlencoded({extended: true}))
//application/json 형식을 분석해서 가져옴
//app.use(bodyParser.json()) 
app.use(express.json())


//mongoose.connect(config.mongoURI)   

mongoose.connect('mongodb+srv://rbit2:select*from2@rbit2.o3cnu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 .then(() => console.log('MongoDB Connected..'))
 .catch(e=>console.log('몽고 안붙었습니다.....'))


app.get('/', (req,res) => res.send('이해가 안된다..3번은 봐야할듯......뭔 설치할게 이리많아'))

app.post('/register',(req,res) =>{
        //회원가입 할 때 필요한 정보들을 client에서 가져오면 
        //데이터베이스에 넣어준다.
        
    const user =new User(req.body)
    user.save((err,userInfo)=>{
        if(err) return res.json({ success : false, err})
        return res.status(200).json({success:true})  //status 200은 성공을의미
    })
 
}
)





app.listen(port, () => console.log(`Example app listening on port ${port}!`))

