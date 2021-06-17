const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  const { query, querystring, request } = ctx;  //从上下问直接获取或者从request对象获取

  ctx.body = {
    query,
    querystring,
    desc: '从上下文获取',
    _query: request.query,
    _querystring: request.querystring,
    _desc: '从上下文的request对象获取'
  };
});

app.listen(3002);