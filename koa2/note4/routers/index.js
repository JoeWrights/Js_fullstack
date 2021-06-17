// server
const koaBody = require('koa-body');
const router = require('koa-router')();
const User = require('../model/user');

//api 接口
router.get('/users', async (ctx, next) => {
  const user = await User.findAll({
    where: { isdelete: 0 },
  });
  ctx.body = user;
});