const mongoose = require('mongoose')

let CommentSchema = new mongoose.Schema({
    uploader:String,
    //商品名称
    name: String,
    //物品图片
    imgdata:Array,
    //物品价格
    price:Number,
    //物品描述
    description:String,
    //图片名称
    imgname:Array,
})
//创建模型对象 对文档进行操作
let CommentModel = mongoose.model('Comment', CommentSchema);

module.exports=CommentModel;