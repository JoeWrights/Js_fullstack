const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
  await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
  const start = new Date().getTime(); // 当前时间
  await next(); // 调用下一个middleware
  const ms = new Date().getTime() - start; // 耗费时间
  console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
  await next();
  ctx.type = 'text/html';
  ctx.body = '<h1>Hello, middleware!</h1>';
});

app.listen(3002);

//middleware的顺序很重要，也就是调用app.use()的顺序决定了middleware的顺序。
//此外，如果一个middleware没有调用await next()，会怎么办？
//答案是后续的middleware将不再执行了。