const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    username: String,
    password: Number,
    email:String
})
//创建模型对象 对文档进行操作
let UserModel = mongoose.model('User', UserSchema);

module.exports=UserModel;