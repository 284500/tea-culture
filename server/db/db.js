
module.exports=function(success,error){
if(typeof error !== 'function'){
    error=()=>{
        console.log('连接失败')
    }
}

const mongoose = require('mongoose')
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/demo');

const db = mongoose.connection;

db.once('open',()=>{
    success();
    console.log('连接成功')
})
db.on('close', () => {
    console.log("关闭成功")
})
}

