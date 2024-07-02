var express = require('express');
var router = express.Router();
const Tea = require("../db/model/tea");
const User=require("../db/model/user")
const Comment=require("../db/model/comment")
const Shop=require("../db/model/shop")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({flag:0})
});

//登录
router.get('/login', function (req, res) {
  let user = {
    username: req.query.username,
    password: req.query.password
  };
console.log(user)
  User.findOne(user).then(data => {
    if (data != null)
    {
      console.log('登陆成功');
      
      res.send({flag:0})
    }
    else {
      console.log('登陆失败');
      res.send({ flag: -1 });
    }
  })
});
//注册
router.post('/reg', function (req, res) {
  let reg = {
    username: req.body.username
  };
  let user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  console.log(user);
  User.find(reg).then(data => {
    if (data.length > 0)
    //已经注册
    {
      console.log('用户创建失败');
      res.send({ flag: -1 });
    }
    else {
      User.create(user);
      Shop.create({username:req.body.username});
      console.log('用户创建成功');
      res.send({ flag: 0 });
    }
  })
});
//查询
router.get("/search", (req, res) => {
  let search = {
    name: {$regex:req.query.search}
  };
  console.log(search)
  Tea.find(search).then((data) => {
    console.log(data);
      res.send({ item: data });
  });
  //res.send({ item: [11, 12, 13, 14, 15, 46, 78] })
});
module.exports = router;
