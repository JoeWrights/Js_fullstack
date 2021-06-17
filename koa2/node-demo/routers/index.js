const router = require('koa-router')();
const koaBody = require('koa-body');
const User = require('../model/user');
//配置路由数组
//函数中间件提供一个句柄
router.get('/', async (ctx) => {
  //get方式访问
  ctx.body = '首页';
});
router.get('/users', async ctx => {
  // ctx.body = '用户';
  const { query } = ctx;
  console.log(query);
  let params = {
    isdelete: 0,
  };
  if (query.name) params.username = query.name;
  if (query.age) params.age = query.age;
  
  const users = await User.findAll({
    where: params,
  });
  ctx.body = users;
});

router.post('/user', koaBody(), async ctx => {
  //后端需要拿到前端传来的数据
  // console.log(ctx.request.body);
  const user = await User.build(ctx.request.body).save();
  // ctx.body = {
  //   status: 'ok'
  // }
  console.log(user);
  ctx.body = user;
});

// router.del('/user/:id', async ctx => {
//   const user = await User.destroy({
//     where: {
//       id: ctx.params.id,
//     },
//   });
//   ctx.body = user;
// });

router.del('/user/:id', async ctx => {
  const user = await User.findById(ctx.params.id).then(user => user);
  user.isdelete = 1;
  await user.save();
  ctx.body = {
    success: true,
  };
});

router.put('/user/:id', koaBody(), async ctx => {
  const body = ctx.request.body;
  const user = await User.findById(ctx.params.id);
  await user.update({ ...body });
  ctx.body = user;
});

module.exports = router;