(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{187:function(e,t,r){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",function(){return o})},189:function(e,t,r){"use strict";r.d(t,"a",function(){return y}),r.d(t,"c",function(){return O}),r.d(t,"b",function(){return w});r(61);var n=r(7),o=r(77),c=r.n(o),l="https://us-east1-ubershmekel.cloudfunctions.net/tags3-api";var f=l+"?q=",d=l+"?notifyquery=1",v=l+"?unsubscribe=",h={validateStatus:function(e){return!0}};function y(e){return j.apply(this,arguments)}function j(){return(j=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={results:null,error:null},performance.now(),e.prev=2,e.next=5,c.a.get(f+encodeURI(t),h);case 5:n=e.sent,console.log("query res",n),n.data.error?r.error=n.data.error:r.results=n.data,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("Failed to fetch query",e.t0),e.t0&&e.t0.message?r.error=e.t0.message:r.error=""+e.t0;case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}},e,null,[[2,10]])}))).apply(this,arguments)}function O(e){return m.apply(this,arguments)}function m(){return(m=Object(n.a)(regeneratorRuntime.mark(function e(data){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={error:"Failed to send subscribe request",success:""},e.prev=1,e.next=4,c.a.post(d,data,h);case 4:r=e.sent,console.log("subscribe res",r),t=r.data,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Failed to fetch query",e.t0),e.t0&&e.t0.message?t.error=e.t0.message:t.error=""+e.t0;case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}},e,null,[[1,9]])}))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=Object(n.a)(regeneratorRuntime.mark(function e(t){var r,n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={error:"Failed to send unsubscribe request",success:""},e.prev=1,n=v+t,e.next=5,c.a.get(n,h);case 5:o=e.sent,console.log("unsubscribe res",o),r=o.data,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.error("Failed to fetch query",e.t0),e.t0&&e.t0.message?r.error=e.t0.message:r.error=""+e.t0;case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}},e,null,[[1,10]])}))).apply(this,arguments)}},191:function(e,t,r){var content=r(207);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("273d8cb1",content,!0,{sourceMap:!1})},206:function(e,t,r){"use strict";var n=r(191);r.n(n).a},207:function(e,t,r){(e.exports=r(23)(!1)).push([e.i,".error[data-v-84cde9d0]{color:red}",""])},208:function(e,t,r){var content=r(249);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("e8d183f6",content,!0,{sourceMap:!1})},211:function(e,t,r){"use strict";r(61);var n=r(7),o=r(40),c=r(187),l=r(42),f=r(41),d=r(43),v=r(6),h=r(17),y=r(189),j=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(f.a)(t).apply(this,arguments))).results=null,e.error="",e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"created",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)(this.query);case 2:(t=e.sent).results?this.results=t.results||"":this.error=t.error||"";case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(h.Vue);j([Object(h.Prop)(String)],O.prototype,"query",void 0);var m=O=j([Object(h.Component)({methods:{},components:{}})],O),w=(r(206),r(11)),component=Object(w.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("pre",[e._v("    "+e._s(e.results)+"\n  ")]),e._v(" "),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()])},[],!1,null,"84cde9d0",null);t.a=component.exports},213:function(e,t,r){"use strict";var n=r(40),o=r(187),c=r(42),l=r(41),f=r(43),d=r(6),v=r(17),h=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},y=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(l.a)(t).apply(this,arguments))).show=!1,e}return Object(f.a)(t,e),Object(o.a)(t,[{key:"create",value:function(){this.buttonText||(this.buttonText="")}}]),t}(v.Vue);h([Object(v.Prop)(Boolean)],y.prototype,"defaultShow",void 0),h([Object(v.Prop)(String)],y.prototype,"buttonText",void 0);var j=y=h([Object(v.Component)({methods:{}})],y),O=r(11),component=Object(O.a)(j,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"collapser"},[r("button",{on:{click:function(t){e.show=!e.show}}},[e._v(e._s((e.show?"Hide ":"Show ")+e.buttonText))]),e._v(" "),e.show?e._t("default"):e._e()],2)},[],!1,null,"a8c7d266",null);t.a=component.exports},248:function(e,t,r){"use strict";var n=r(208);r.n(n).a},249:function(e,t,r){(e.exports=r(23)(!1)).push([e.i,"h3[data-v-4b19a547]{border-top:2px solid #999}.error[data-v-4b19a547]{color:red;font-size:1.5em}",""])},259:function(e,t,r){"use strict";r.r(t);r(61);var n=r(7),o=r(40),c=r(187),l=r(42),f=r(41),d=r(43),v=r(6),h=r(17),y=r(189),j=r(211),O=r(213),m=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(f.a)(t).apply(this,arguments))).unsubId="",e.error="",e.successMessage="",e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"mounted",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.$route.query.unsubId,console.log("Mounted",t),"string"==typeof t){e.next=5;break}return this.error="Invalid unsubscribe id",e.abrupt("return");case 5:return e.next=7,Object(y.b)(t);case 7:(r=e.sent).success?this.successMessage=r.success||"":this.error=r.error||"";case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"head",value:function(){return{title:"Unsubscribe"}}}]),t}(h.Vue),x=w=m([Object(h.Component)({components:{QueryFetchUrl:j.a,Collapser:O.a}})],w),_=(r(248),r(11)),component=Object(_.a)(x,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h2",[e._v("Unsubscribing")]),e._v(" "),e.successMessage?r("div",[e._v(e._s(e.successMessage))]):e._e(),e._v(" "),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()])},[],!1,null,"4b19a547",null);t.default=component.exports}}]);