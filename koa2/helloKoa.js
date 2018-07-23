const Koa = require('koa');
const app = new Koa();   // 创建一个Koa对象表示web app本身

//参数ctx是由koa传入的封装了request和response的变量，
//我们可以通过它访问request和response，next是koa传入的将要处理的下一个异步函数。
app.use(async (ctx, next) => {
  // console.log(ctx);
  await next();
  ctx.type = 'text/html'; // 设置response的Content-Type
  ctx.body = '<h1>hello koa</h1>';  // 设置response的内容
});

app.listen(3001);
console.log('[demo] start-quick is starting at port 3001');

// {
//   request: {
//     method: 'GET',
//     url: '/',
//     header: {
//       host: 'localhost:3001',
//       connection: 'keep-alive',
//       'upgrade-insecure-requests': '1',
//       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.15 Safari/537.36',
//       accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//       'accept-encoding': 'gzip, deflate, br',
//       'accept-language': 'zh-CN,zh;q=0.9'
//     }
//   },
//   response: {
//     status: 404,
//     message: 'Not Found',
//     header: {}
//   },
//   app: {
//     subdomainOffset: 2,
//     proxy: false,
//     env: 'development'
//   },
//   originalUrl: '/',
//   req: '<original node req>',
//   res: '<original node res>',
//   socket: '<original node socket>'
// } {
//   request: {
//     method: 'GET',
//     url: '/favicon.ico',
//     header: {
//       host: 'localhost:3001',
//       connection: 'keep-alive',
//       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.15 Safari/537.36',
//       accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
//       referer: 'http://localhost:3001/',
//       'accept-encoding': 'gzip, deflate, br',
//       'accept-language': 'zh-CN,zh;q=0.9'
//     }
//   },
//   response: {
//     status: 404,
//     message: 'Not Found',
//     header: {}
//   },
//   app: {
//     subdomainOffset: 2,
//     proxy: false,
//     env: 'development'
//   },
//   originalUrl: '/favicon.ico',
//   req: '<original node req>',
//   res: '<original node res>',
//   socket: '<original node socket>'
// } {
//   request: {
//     method: 'GET',
//     url: '/',
//     header: {
//       host: 'localhost:3001',
//       connection: 'keep-alive',
//       'cache-control': 'max-age=0',
//       'upgrade-insecure-requests': '1',
//       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.15 Safari/537.36',
//       accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//       'accept-encoding': 'gzip, deflate, br',
//       'accept-language': 'zh-CN,zh;q=0.9'
//     }
//   },
//   response: {
//     status: 404,
//     message: 'Not Found',
//     header: {}
//   },
//   app: {
//     subdomainOffset: 2,
//     proxy: false,
//     env: 'development'
//   },
//   originalUrl: '/',
//   req: '<original node req>',
//   res: '<original node res>',
//   socket: '<original node socket>'
// } {
//   request: {
//     method: 'GET',
//     url: '/',
//     header: {
//       host: 'localhost:3001',
//       connection: 'keep-alive',
//       'cache-control': 'max-age=0',
//       'upgrade-insecure-requests': '1',
//       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.15 Safari/537.36',
//       accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//       'accept-encoding': 'gzip, deflate, br',
//       'accept-language': 'zh-CN,zh;q=0.9'
//     }
//   },
//   response: {
//     status: 404,
//     message: 'Not Found',
//     header: {}
//   },
//   app: {
//     subdomainOffset: 2,
//     proxy: false,
//     env: 'development'
//   },
//   originalUrl: '/',
//   req: '<original node req>',
//   res: '<original node res>',
//   socket: '<original node socket>'
// } {
//   request: {
//     method: 'GET',
//     url: '/',
//     header: {
//       host: 'localhost:3001',
//       connection: 'keep-alive',
//       'cache-control': 'max-age=0',
//       'upgrade-insecure-requests': '1',
//       'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.15 Safari/537.36',
//       accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
//       'accept-encoding': 'gzip, deflate, br',
//       'accept-language': 'zh-CN,zh;q=0.9'
//     }
//   },
//   response: {
//     status: 404,
//     message: 'Not Found',
//     header: {}
//   },
//   app: {
//     subdomainOffset: 2,
//     proxy: false,
//     env: 'development'
//   },
//   originalUrl: '/',
//   req: '<original node req>',
//   res: '<original node res>',
//   socket: '<original node socket>'
// }