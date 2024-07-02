const mongoose = require('mongoose')

let TeaSchema = new mongoose.Schema({
    name: String,
    //物品价格
    price:Number,
    //物品描述
    //图片名称
    imgname:String,
})
//创建模型对象 对文档进行操作
let TeaModel = mongoose.model('Tea', TeaSchema);

module.exports=TeaModel;