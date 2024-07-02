const mongoose = require('mongoose')

let ShopSchema = new mongoose.Schema({
    username: String,
    name:Array
})
//创建模型对象 对文档进行操作
let ShopModel = mongoose.model('shop', ShopSchema);

module.exports=ShopModel;