"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const React = require("react");
const server_1 = require("react-dom/server");
const render = require("koa-ejs");
const path = require("path");
const Router = require("koa-router");
const App_1 = require("./component/App");
const app = new Koa();
render(app, {
    root: path.join(__dirname, '../src/server/view'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: true
});
const router = new Router();
router.get('/', async (ctx, next) => {
    let html = server_1.renderToString(React.createElement(App_1.default, { title: '\u5F00\u5FC3' }));
    await ctx.render('index', {
        html,
        layout: false
    });
    await next();
});
router.get('/api/24h/:page', async (ctx, next) => {
    await next();
    console.log(ctx.params);
});
app.use(router.routes());
app.listen(8000);
//# sourceMappingURL=server.js.map