(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{180:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return l});r(110);var n=r(10);r(73);function o(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e}function c(e){"object"!==Object(n.a)(e)&&(e=new Date(e));var t,r=Math.floor((+new Date-+e)/1e3),o=Math.floor(r/31536e3);return o>=1?t="year":(o=Math.floor(r/2592e3))>=1?t="month":(o=Math.floor(r/86400))>=1?t="day":(o=Math.floor(r/3600))>=1?t="hour":(o=Math.floor(r/60))>=1?t="minute":(o=r,t="second"),(o>1||0===o)&&(t+="s"),o+" "+t}function l(e,t,r){return e.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),r)}},181:function(e,t,r){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",function(){return o})},183:function(e,t,r){var content=r(192);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("d20fb378",content,!0,{sourceMap:!1})},184:function(e,t,r){var content=r(194);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("5c98055f",content,!0,{sourceMap:!1})},185:function(e,t,r){var content=r(196);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("633fa3eb",content,!0,{sourceMap:!1})},190:function(e,t,r){e.exports=r.p+"img/0db5626.svg"},191:function(e,t,r){"use strict";var n=r(183);r.n(n).a},192:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".item[data-v-64dcefbd]{border-radius:4px;padding:4px;background-color:#333;margin:1em;border-left:1px solid #ddd;display:flex;flex-direction:row;align-items:flex-start}.domain[data-v-64dcefbd]{opacity:.6}.item-title[data-v-64dcefbd]{display:block}.item-meta[data-v-64dcefbd]{color:#999}.item-info[data-v-64dcefbd]{vertical-align:top;margin-left:.5em}.item-thumb-container[data-v-64dcefbd]{height:80px;width:80px;min-width:80px;background-color:hsla(0,0%,48.2%,.2)}.item-thumb[data-v-64dcefbd]{width:80px;height:80px;-o-object-fit:cover;object-fit:cover}.stats[data-v-64dcefbd]{opacity:.6}",""])},193:function(e,t,r){"use strict";var n=r(184);r.n(n).a},194:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".item[data-v-0caa82d2]{border-radius:4px;padding:4px;background-color:#333;margin:1em;border-left:1px solid #ddd;display:flex;flex-direction:row;align-items:flex-start}.domain[data-v-0caa82d2]{opacity:.6}.item-title[data-v-0caa82d2]{display:block}.item-meta[data-v-0caa82d2]{color:#999}.item-info[data-v-0caa82d2]{vertical-align:top;margin-left:.5em}.item-thumb-container[data-v-0caa82d2]{height:80px;width:80px;min-width:80px;background-color:hsla(0,0%,48.2%,.2)}.item-thumb[data-v-0caa82d2]{width:80px;height:80px;-o-object-fit:cover;object-fit:cover}.stats[data-v-0caa82d2]{opacity:.6}table[data-v-0caa82d2]{border-collapse:collapse;margin-bottom:10px;width:100%}td[data-v-0caa82d2],th[data-v-0caa82d2]{padding:6px;text-align:left}th[data-v-0caa82d2]{border-bottom:1px solid #333}tbody tr[data-v-0caa82d2]:nth-child(odd){background-color:#1a1a1a}",""])},195:function(e,t,r){"use strict";var n=r(185);r.n(n).a},196:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".query-input[data-v-2466a002]{width:100%}.error[data-v-2466a002]{color:red}hr[data-v-2466a002]{border:none;border-top:1px solid #333}",""])},202:function(e,t,r){"use strict";r.r(t);r(54);var n=r(7),o=r(69),c=r(181),l=r(71),d=r(70),h=r(72),f=r(10),m=r(53),v=r(180),y=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},_=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),t}(m.Vue),w=_=y([Object(m.Component)({props:{results:Array,options:Object},methods:{compactNumber:v.a,timeSince:v.c}})],_),x=(r(191),r(16)),j=Object(x.a)(w,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.results,function(t,o){return n("div",{key:o,staticClass:"item"},[e.options.noThumbnails?e._e():n("a",{staticClass:"item-thumb-container",attrs:{href:t.url}},[t.thumbnail_url?n("img",{staticClass:"item-thumb",attrs:{src:t.thumbnail_url,onerror:"this.style.display='none'"}}):e._e(),e._v(" "),t.thumbnail_url?e._e():n("img",{staticClass:"item-thumb",attrs:{src:r(190)}})]),e._v(" "),n("div",{staticClass:"item-info"},[n("a",{staticClass:"item-title",attrs:{href:t.url}},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"item-meta"},[t.likes?n("span",{staticClass:"like-count"},[e._v(e._s(e.compactNumber(t.likes))+"⬆")]):e._e(),e._v(" "),t.views?n("span",{staticClass:"view-count"},[e._v(e._s(e.compactNumber(t.views))+"👁")]):e._e(),e._v(" "),n("span",{staticClass:"domain",attrs:{title:t.timestamp}},[e._v("\n          / "+e._s(t.domain)+"\n          "),t.channel&&t.channel!==t.user?[e._v("\n            / "+e._s(t.channel)+"\n            / "+e._s(t.user)+"\n          ")]:[e._v("/ "+e._s(t.user))],e._v("\n          / "+e._s(e.timeSince(t.timestamp))+" ago\n        ")],2)])])])}),0)},[],!1,null,"64dcefbd",null).exports,O=(r(38),r(19),r(74),function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c}),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"truncate",value:function(e){var text=String(e);return text.length>100&&(text=text.slice(0,100)+" [...]"),text}},{key:"sortedKeys",value:function(){var e=Object.keys(this.$props.results[0]);return e.sort(),e=e.filter(function(e){return"audio_url"!==e&&"is_collection"!==e})}}]),t}(m.Vue),T=k=O([Object(m.Component)({props:{results:Array,options:Object},methods:{compactNumber:v.a,timeSince:v.c}})],k),C=(r(193),Object(x.a)(T,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",{staticClass:"query-results-table"},[r("thead",{staticClass:"table-header"},[r("tr",e._l(e.sortedKeys(),function(t){return r("th",{key:t},[e._v(e._s(t))])}),0)]),e._v(" "),r("tbody",e._l(e.results,function(t,n){return r("tr",{key:n,staticClass:"item-row"},e._l(e.sortedKeys(),function(o){return r("td",{key:n+"-"+o,staticClass:"item-cell",attrs:{title:t[o]}},[e._v("\n        "+e._s(e.truncate(t[o]))+"\n      ")])}),0)}),0)])},[],!1,null,"0caa82d2",null).exports),R=r(75),$=r.n(R),P=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c};var D={noThumbnails:"!nothumbs",showTable:"!table"},A=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).apply(this,arguments))).query="",e.results=null,e.error="",e.queryDuration=null,e.options={noThumbnails:!1,showTable:!1},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"fetch",value:function(e){console.log("fetch",e)}},{key:"asyncData",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route.query.q,console.log("AsyncData",r),e.abrupt("return",{query:r});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"validate",value:function(e){return!0}},{key:"beforeUpdate",value:function(){console.log("beforeUpdate")}},{key:"setOptionsFromQuery",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t in console.log("Setting options from query"),D)r=D[t],this.query.indexOf(r)>=0?(console.log("cmdKey",t,!0),this.options[t]=!0):(console.log("cmdKey",t,!1),this.options[t]=!1);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchQueryData",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,n,o,c,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(r in t=this.query,D)n=D[r],t.indexOf(n)>=0&&(t=Object(v.b)(t,n,""));return o={validateStatus:function(e){return!0}},c=performance.now(),e.prev=4,e.next=7,$.a.get("https://us-east1-ubershmekel.cloudfunctions.net/tags3-api?q="+encodeURI(t),o);case 7:l=e.sent,this.queryDuration=performance.now()-c,console.log("query res",l),l.data.error?this.error=l.data.error:this.results=l.data,e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),console.error("Failed to fetch query",e.t0),e.t0&&e.t0.message?this.error=e.t0.message:this.error=""+e.t0,e.abrupt("return");case 18:case"end":return e.stop()}},e,this,[[4,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"created",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("created"),this.query=this.$route.query.q,console.log("This query created",this.query),this.setOptionsFromQuery(),this.fetchQueryData();case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"watchCommandProp",value:function(e,t){console.log("watchCommandProp",e,t);var r=this.query.indexOf(t)>=0;e&&!r&&(this.query=this.query+" "+t),!e&&r&&(this.query=Object(v.b)(this.query," "+t,""))}},{key:"onNoThumbnailsChanged",value:function(e,t){this.watchCommandProp(e,D.noThumbnails)}},{key:"onShowTableChanged",value:function(e,t){this.watchCommandProp(e,D.showTable)}}]),t}(m.Vue);P([Object(m.Watch)("options.noThumbnails")],A.prototype,"onNoThumbnailsChanged",null),P([Object(m.Watch)("options.showTable")],A.prototype,"onShowTableChanged",null);var M=A=P([Object(m.Component)({components:{QueryCards:j,QueryTable:C},watchQuery:!0,methods:{compactNumber:v.a,timeSince:v.c}})],A),N=(r(195),Object(x.a)(M,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("form",[r("input",{staticClass:"query-input",attrs:{name:"q",action:"/q"},domProps:{value:e.query}})]),e._v(" "),e.queryDuration?r("div",{staticClass:"stats"},[e._v("(took "+e._s(Math.round(e.queryDuration)/1e3)+" s)")]):e._e(),e._v(" "),r("div",{staticClass:"query-controls teal"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.options.noThumbnails,expression:"options.noThumbnails"}],attrs:{type:"checkbox",id:"noThumbnails"},domProps:{checked:Array.isArray(e.options.noThumbnails)?e._i(e.options.noThumbnails,null)>-1:e.options.noThumbnails},on:{change:function(t){var r=e.options.noThumbnails,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&e.$set(e.options,"noThumbnails",r.concat([null])):c>-1&&e.$set(e.options,"noThumbnails",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(e.options,"noThumbnails",o)}}}),e._v(" "),r("label",{attrs:{for:"noThumbnails"}},[e._v("No thumbnails")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.options.showTable,expression:"options.showTable"}],attrs:{type:"checkbox",id:"showTable"},domProps:{checked:Array.isArray(e.options.showTable)?e._i(e.options.showTable,null)>-1:e.options.showTable},on:{change:function(t){var r=e.options.showTable,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&e.$set(e.options,"showTable",r.concat([null])):c>-1&&e.$set(e.options,"showTable",r.slice(0,c).concat(r.slice(c+1)))}else e.$set(e.options,"showTable",o)}}}),e._v(" "),r("label",{attrs:{for:"showTable"}},[e._v("Table view")])]),e._v(" "),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"data-container"},[e.results&&0===e.results.length?r("div",[e._v("No results. Tweak that query...")]):e._e(),e._v(" "),e.options.showTable?e._e():r("QueryCards",{attrs:{results:e.results,options:e.options}}),e._v(" "),e.options.showTable&&e.results?r("QueryTable",{attrs:{results:e.results,options:e.options}}):e._e()],1)])},[],!1,null,"2466a002",null));t.default=N.exports}}]);