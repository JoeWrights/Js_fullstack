const Koa = require('koa');
const cors = require('koa-cors');
const app = new Koa();
const router = require('./routers/index');
const port = 3002;

app.use(cors());
app.use(router.routes());

app.use(async (ctx, next) => {
  console.log(`${ctx.request.path}:${ctx.request.method}`);
  await next();
});

app.listen(port);
console.log(`app is started at ${port}`);


