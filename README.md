# React isomorphic mpa starter kit

React isomorphic `mpa` starter kit with `ssr` using [koa](http://koajs.com/), [webpack](https://webpack.js.org/), [babel](https://babeljs.io/), [react](https://reactjs.org/), [redux](https://redux.js.org/), [react-redux](https://github.com/reactjs/react-redux), [redux-thunk](https://github.com/gaearon/redux-thunk).

## Features

- React v16 +
- Support HMR
- Use airbnb's eslint config
- One component one folder
- Structure directories based on function(page)
- Client: use `webpack` to build project
- Server: use `babel` to transform source code
- Use [`jest`](https://facebook.github.io/jest/) and [`enzyme`](http://airbnb.io/enzyme/) to test

<em>caution:</em>    \
On server side, just use `babel` to transform code, so you can not use (import) modules other than js modules, like css、sass、png、svg etc.

You can easily use `webpack` on server side to support all type modules if you need, but sacrifice readability transformed.

## Installation

Development
```bash
git clone https://github.com/xwcoder/react-isomorphic-mpa-starterkit.git
cd react-isomorphic-mpa-starterkit

npm i
npm run dev
```

Production/server
```bash
npm run build:server
```

Production/client
```bash
npm run build:client
```

Start/development
```bash
npm run start:dev
```

Start/production
```bash
npm run start:prod
```

Lint
```bash
npm run lint
```

Test
```bash
npm run test
```
