var koa = require('koa');
var router = require('koa-router')();

const app = koa();

router.get('/', function* () {
    this.body = "Hello world";
});

router.get('/home', function* () {
    this.body = "this is my home page";
});

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000, function () {
    console.log('server is started!')
});
