webpackJsonp([1],{"1CXc":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.data,r=e.url,i=e.pubTime,u=e.title;return n.default.createElement("li",{className:"list-item"},n.default.createElement("a",{href:r},u),n.default.createElement("span",{className:"tag-time"},(0,o.default)(i,"yyyy-MM-dd hh:mm:ss")))};var n=i(r("GiK3")),o=i(r("tIc7"));function i(t){return t&&t.__esModule?t:{default:t}}},"3IRH":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"6z8Z":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FETCH_STATUS=e.PAGE_INCREAMENT=e.ADD_LIST=void 0;var n=i(r("Xxa5"));e.addList=f,e.increasePage=l,e.fetching=s,e.fetchSuccess=d,e.fetchFail=h,e.fetchEmpty=p,e.fetchNextPage=function(){var t=this;return e=n.default.mark(function e(r,i){var u,a,c,y,v,g,m,_,b,w;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u=i(),a=u.fetchStatus,c=u.page,1!==a&&3!==a&&4!==a){t.next=3;break}return t.abrupt("return");case 3:return r(s()),y=c+1,t.prev=5,t.next=8,o.default.get("/api/list/"+y);case 8:v=t.sent,g=v.data,_=(m=void 0===g?{}:g).code,b=void 0===_?0:_,w=m.list,1===b?w.length?(r(l()),r(d()),r(f(w)),w.length<10&&r(p())):r(p()):r(h()),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(5),r(h());case 17:case"end":return t.stop()}},e,t,[[5,14]])}),r=function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function n(o,i){try{var u=t[o](i),a=u.value}catch(t){return void r(t)}if(!u.done)return Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)});e(a)}("next")})},function(t,e){return r.apply(this,arguments)};var e,r};var o=i(r("mtWM"));function i(t){return t&&t.__esModule?t:{default:t}}var u=e.ADD_LIST="ADD_LIST",a=e.PAGE_INCREAMENT="PAGE_INCREAMENT",c=e.FETCH_STATUS="FETCH_STATUS";function f(t){return{type:u,list:t}}function l(){return{type:a}}function s(){return{type:c,fetchStatus:1}}function d(){return{type:c,fetchStatus:2}}function h(){return{type:c,fetchStatus:3}}function p(){return{type:c,fetchStatus:4}}},"7Vvq":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r("RH2O"),i=r("oqYb"),u=(n=i)&&n.__esModule?n:{default:n};var a=(0,o.connect)(function(t){return{fetchStatus:t.fetchStatus}},null)(u.default);e.default=a},BTlh:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=(n=r("GiK3"))&&"object"==typeof n&&"default"in n?n.default:n,i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},a=function(t){function e(){return i(this,e),u(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){return o.Children.only(this.props.children)},e}(o.Component);e.AppContainer=a,e.hot=function(){return function(t){return t}},e.areComponentsEqual=function(t,e){return t===e},e.setConfig=function(){}},CbOf:function(t,e,r){"use strict";var n=l(r("GiK3")),o=l(r("O27J")),i=r("RH2O"),u=r("Ol7m"),a=l(r("4ufr"));r("EKk+");var c=l(r("Ovno")),f=l(r("V71v"));function l(t){return t&&t.__esModule?t:{default:t}}var s=(0,u.createStore)(c.default,__INIT_STATE__,(0,u.applyMiddleware)(a.default));window.store=s,o.default.hydrate(n.default.createElement(i.Provider,{store:s},n.default.createElement(f.default,null)),document.getElementById("root"))},"EKk+":function(t,e){},ENtH:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r("GiK3"),i=l(o),u=l(r("O27J")),a=l(r("Ntlq")),c=l(r("MomH")),f=l(r("7Vvq"));function l(t){return t&&t.__esModule?t:{default:t}}var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.Component),n(e,[{key:"componentDidMount",value:function(){var t=this;this.props.didMount&&this.props.didMount();var e=document.documentElement,r=function(){(function(){var r=!1;if(t.footer){var n=u.default.findDOMNode(t.footer);n&&(r=n.getBoundingClientRect().top<Math.max(e.clientHeight,window.screen.height))}return r})()&&t.props.onScrollEnd()};window.addEventListener("scroll",r,!1),r()}},{key:"render",value:function(){var t=this;return i.default.createElement("div",null,i.default.createElement(a.default,{title:"今日要闻"}),i.default.createElement(c.default,null),i.default.createElement(f.default,{ref:function(e){t.footer=e}}))}}]),e}();e.default=s},F5m6:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.list.map(function(t){return n.default.createElement(o.default,{key:t.docId,data:t})});return n.default.createElement("ul",{className:"list"},e)};var n=i(r("GiK3")),o=i(r("yjCD"));function i(t){return t&&t.__esModule?t:{default:t}}},MomH:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r("RH2O"),i=r("F5m6"),u=(n=i)&&n.__esModule?n:{default:n};var a=(0,o.connect)(function(t){return{list:t.list}})(u.default);e.default=a},Ntlq:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r("zzd/"),i=(n=o)&&n.__esModule?n:{default:n};e.default=i.default},Ovno:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Ol7m"),o=r("6z8Z");function i(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}e.default=(0,n.combineReducers)({list:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];return e.type===o.ADD_LIST?[].concat(i(t),i(e.list)):t},page:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return arguments[1].type===o.PAGE_INCREAMENT?t+1:t},fetchStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1];return e.type===o.FETCH_STATUS?e.fetchStatus:t}})},SldL:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",f="object"==typeof t,l=e.regeneratorRuntime;if(l)f&&(t.exports=l);else{(l=e.regeneratorRuntime=f?t.exports:{}).wrap=b;var s="suspendedStart",d="suspendedYield",h="executing",p="completed",y={},v={};v[u]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==n&&o.call(m,u)&&(v=m);var _=x.prototype=E.prototype=Object.create(v);O.prototype=_.constructor=x,x.constructor=O,x[c]=O.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},l.awrap=function(t){return{__await:t}},j(M.prototype),M.prototype[a]=function(){return this},l.AsyncIterator=M,l.async=function(t,e,r,n){var o=new M(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},j(_),_[c]="Generator",_[u]=function(){return this},_.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return a.type="throw",a.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var c=o.call(u,"catchLoc"),f=o.call(u,"finallyLoc");if(c&&f){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function b(t,e,r,n){var o=e&&e.prototype instanceof E?e:E,i=Object.create(o.prototype),u=new T(n||[]);return i._invoke=function(t,e,r){var n=s;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=P(u,r);if(a){if(a===y)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=w(t,e,r);if("normal"===c.type){if(n=r.done?p:d,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,u),i}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function E(){}function O(){}function x(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function M(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,u){var a=w(t[r],t,n);if("throw"!==a.type){var c=a.arg,f=c.value;return f&&"object"==typeof f&&o.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,u)},function(t){e("throw",t,i,u)}):Promise.resolve(f).then(function(t){c.value=t,i(c)},u)}u(a.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=w(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},V71v:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r("RH2O"),u=r("rGbO"),a=r("ENtH"),c=(n=a)&&n.__esModule?n:{default:n},f=r("6z8Z");var l=(0,i.connect)(function(t){return{page:t.page}},function(t){return{fetchNextPage:function(){t((0,f.fetchNextPage)())},onScrollEnd:function(){t((0,f.fetchNextPage)())}}},function(t,e,r){return o({},r,t,e,{didMount:function(){0===t.page&&e.fetchNextPage()}})})(c.default);e.default=(0,u.hot)(t)(l)}).call(e,r("3IRH")(t))},Xxa5:function(t,e,r){t.exports=r("jyFz")},jyFz:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r("SldL"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},oqYb:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.fetchStatus,r=null;1===e||0===e||2===e?r=i.default.createElement("div",{className:"app-footer"},"loading..."):3===e&&(r=i.default.createElement("div",{className:"app-footer"},"加载失败，请刷新重试"));return r};var n,o=r("GiK3"),i=(n=o)&&n.__esModule?n:{default:n}},rGbO:function(t,e,r){"use strict";t.exports=r("BTlh")},tIc7:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){"[object Date]"!=={}.toString.call(t)&&(t=new Date(parseInt(t,10)));var r={"y+":t.getFullYear(),"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"S+":t.getMilliseconds()};for(var n in r)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,("00"+r[n]).substr(-RegExp.$1.length)));return e}},yjCD:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=r("1CXc"),i=(n=o)&&n.__esModule?n:{default:n};e.default=i.default},"zzd/":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.title;return i.default.createElement("h1",{className:"app-header"},e)};var n,o=r("GiK3"),i=(n=o)&&n.__esModule?n:{default:n}}},["CbOf"]);