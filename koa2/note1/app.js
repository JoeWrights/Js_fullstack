const Koa = require('koa');
const logAsync = require('./middleware/log-async.js');
const app = new Koa();
const port = 3002;

app.use(logAsync());

app.use(ctx => {
  ctx.body = 'koa';
  console.log('ctx:', JSON.stringify(ctx));
})

app.listen(port);
console.log(`app is listening at port ${port}`);