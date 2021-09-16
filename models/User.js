const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
{
    name : {                //컬럼이라고 봐도 될듯??? 타입과 맥스 랭쓰.
        type : String,
        maxlength : 50
    },
    email: {
        type : String,
        trim : true,
        unique : 1          //pk라고 보자
    },
    password : {
        type : String,
        maxlength : 50
    },
    lastname : {
        type : String,
        maxlength: 50
    },
    role : {
        type: Number,
        default : 0         //기본값
    },
    image : String,
    token: {
        type : String
    },
    tokenExp : {
        type : number
    }
})

const User= mongoose.model('User', userSchema)      //스키마를 user라는 명의 모델로 감싸줌

module.exports={User}       //다른 파일에서도 쓸 수 있게 유저를 익스폴트
