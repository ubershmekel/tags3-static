(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{186:function(e,t,r){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",function(){return c})},189:function(e,t,r){"use strict";r.d(t,"a",function(){return f});r(60);var n=r(8),c=r(76),o=r.n(c),l="https://us-east1-ubershmekel.cloudfunctions.net/tags3-api?q=";function f(e){return d.apply(this,arguments)}function d(){return(d=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={results:null,error:null},n={validateStatus:function(e){return!0}},performance.now(),e.prev=3,e.next=6,o.a.get(l+encodeURI(t),n);case 6:c=e.sent,console.log("query res",c),c.data.error?r.error=c.data.error:r.results=c.data,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error("Failed to fetch query",e.t0),e.t0&&e.t0.message?r.error=e.t0.message:r.error=""+e.t0;case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}},e,null,[[3,11]])}))).apply(this,arguments)}},199:function(e,t,r){var content=r(226);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("038f3ea7",content,!0,{sourceMap:!1})},200:function(e,t,r){var content=r(228);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("b47c593c",content,!0,{sourceMap:!1})},225:function(e,t,r){"use strict";var n=r(199);r.n(n).a},226:function(e,t,r){(e.exports=r(22)(!1)).push([e.i,".error[data-v-c417d7fc]{color:red}",""])},227:function(e,t,r){"use strict";var n=r(200);r.n(n).a},228:function(e,t,r){(e.exports=r(22)(!1)).push([e.i,"h3[data-v-dd6483c4]{border-top:2px solid #999}",""])},235:function(e,t,r){"use strict";r.r(t);r(60);var n=r(8),c=r(39),o=r(186),l=r(41),f=r(40),d=r(42),v=r(6),h=r(24),y=r(189),O=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(f.a)(t).apply(this,arguments))).results=null,e.error="",e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"created",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)(this.query);case 2:(t=e.sent).results?this.results=t.results||"":this.error=t.error||"";case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(h.Vue);O([Object(h.Prop)(String)],j.prototype,"query",void 0);var m=j=O([Object(h.Component)({methods:{},components:{}})],j),_=(r(225),r(11)),R=Object(_.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("pre",[e._v("    "+e._s(e.results)+"\n  ")]),e._v(" "),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()])},[],!1,null,"c417d7fc",null).exports,w=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(f.a)(t).apply(this,arguments))).url="",e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"asyncData",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route.query.url,console.log("AsyncData",r),e.abrupt("return",{url:r});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"refetchUrl",value:function(){}}]),t}(h.Vue),k=x=w([Object(h.Component)({components:{QueryFetchUrl:R}})],x),P=(r(227),Object(_.a)(k,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h2",[e._v("Url Page")]),e._v(" "),r("h3",[e._v("Data")]),e._v(" "),e.url?r("QueryFetchUrl",{attrs:{query:"SELECT * FROM url WHERE url = '"+e.url+"'"}}):e._e(),e._v(" "),e.url?e._e():r("div",[e._v("No url :/")]),e._v(" "),r("button",{on:{click:e.refetchUrl}},[e._v("Refetch (not yet ready)")])],1)},[],!1,null,"dd6483c4",null));t.default=P.exports}}]);