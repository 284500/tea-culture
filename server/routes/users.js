var express = require('express');
var router = express.Router();
const Tea = require("../db/model/tea");
const User=require("../db/model/user")
const Comment=require("../db/model/comment")
const Shop=require("../db/model/shop")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//添加购物车
router.post('/addshop', (req, res) => {
  let data= {username:req.body.username,
    name:req.body.name}

      Shop.updateOne({ username: data.username }, { $push: { name: req.body.name } }).then(value => {
        console.log('添加成功')
      })
      res.send({ flag: 0 });
    }
)
//加载购物车
router.post('/shop', (req, res) => {
  let user= {username:req.body.username};
  console.log("加载购物车")
  console.log(user)
      Shop.findOne(user).then(value => {
        Tea.find({ name: value.name}).then(data => {
          console.log(data)
          res.send({ item: data });
        })
  })    
})
//移除购物车
router.post('/remove', (req, res) => {
  let data= {username:req.body.username,
    name:req.body.name}

      Shop.updateOne({ username: data.username }, { $pull: { name: req.body.name } }).then(value => {
        console.log('添加成功')
      })
      res.send({ flag: 0 });
})
module.exports = router;
