(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{188:function(e,t,n){"use strict";function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",function(){return o})},189:function(e,t,n){"use strict";n.d(t,"c",function(){return d}),n.d(t,"i",function(){return l}),n.d(t,"g",function(){return f}),n.d(t,"h",function(){return h}),n.d(t,"j",function(){return v}),n.d(t,"d",function(){return m}),n.d(t,"b",function(){return w}),n.d(t,"a",function(){return y}),n.d(t,"f",function(){return x}),n.d(t,"e",function(){return k});n(45);var r=n(40),o=n(188),c=(n(114),n(115),n(6));n(76);function d(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"B":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e}function l(e){"object"!==Object(c.a)(e)&&(e=new Date(e));var t,n=Math.floor((+new Date-+e)/1e3),r=Math.floor(n/31536e3);return r>=1?t="year":(r=Math.floor(n/2592e3))>=1?t="month":(r=Math.floor(n/86400))>=1?t="day":(r=Math.floor(n/3600))>=1?t="hour":(r=Math.floor(n/60))>=1?t="minute":(r=n,t="second"),(r>1||0===r)&&(t+="s"),r+" "+t}function f(e,t,n){return e.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),n)}function h(e){return Math.round(100*e)/100}function v(e){return"https://www.youtube.com/embed/"+m(e)+"?autoplay=1"}function m(e){var t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return t&&11===t[2].length?t[2]:"error"}var w=function(){function e(t){var n=t.endCallback,o=t.durationMs;Object(r.a)(this,e),this.start=new Date,this.durationMs=o,this.endCallback=n,this.timerId=window.setTimeout(n,o)}return Object(o.a)(e,[{key:"isActive",value:function(){return!!(this.timerId&&this.percentProgress()<100)}},{key:"cancel",value:function(){if(null===this.timerId)throw new Error("Double cancel of timer");window.clearTimeout(this.timerId),this.timerId=null}},{key:"percentProgress",value:function(){var e=(Date.now()-this.start.getTime())/this.durationMs*100;return e>100?100:e}}]),e}(),y=function(){function e(t){var n=t.durationMs,o=t.progressCallback;Object(r.a)(this,e),this.start=new Date,this.durationMs=n,this.progressCallback=o,this.intervalId=window.setInterval(o,n)}return Object(o.a)(e,[{key:"cancel",value:function(){if(null===this.intervalId)throw new Error("Double cancel of timer");window.clearInterval(this.intervalId),this.intervalId=null}}]),e}();function x(desc){return"/q?t=".concat(desc.name,"&q=").concat(encodeURIComponent(desc.sql))}function k(e){return e.channel&&e.channel!==e.user?e.channel+" - "+e.user:e.channel}},209:function(e,t,n){var content=n(269);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(24).default)("2f5a59a8",content,!0,{sourceMap:!1})},268:function(e,t,n){"use strict";var r=n(209);n.n(r).a},269:function(e,t,n){(e.exports=n(23)(!1)).push([e.i,".header[data-v-458dd4b3]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.sub-card[data-v-458dd4b3]{display:block;margin:1em;padding:0;overflow:hidden;border-radius:10px;opacity:.8}.sub-card[data-v-458dd4b3]:hover{opacity:1}.sub-name[data-v-458dd4b3]{font-size:2em}.sub-stats[data-v-458dd4b3]{opacity:.6}.sub-meta[data-v-458dd4b3]{padding:.2em}.sub-previews-container[data-v-458dd4b3]{max-height:200px}.sub-preview[data-v-458dd4b3]{display:inline-block;height:100px;vertical-align:top;overflow:hidden;padding:4px;box-sizing:border-box;border-radius:4px}.sub-preview img[data-v-458dd4b3]{height:100%;width:100%;-o-object-fit:contain;object-fit:contain}.text-preview[data-v-458dd4b3]{padding:4px;max-width:200px;box-shadow:2px 2px 12px #000;height:100%}@media (max-width:600px){.sub-preview[data-v-458dd4b3]{width:100px}}.tag-button[data-v-458dd4b3]{display:inline-block;margin:.5em;padding:.2em;border-radius:4px;border:1px solid #666;background-color:#252525}.nuxt-link-exact-active[data-v-458dd4b3]{background-color:#666}",""])},286:function(e,t,n){"use strict";n.r(t);n(61);var r=n(7),o=n(40),c=n(188),d=n(42),l=n(41),f=n(43),h=n(6),v=n(17),m=n(189),w=n(78),y=n.n(w),x=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(d.a)(this,Object(l.a)(t).apply(this,arguments))).subreddits=[],e.subsTag="sfw",e}return Object(f.a)(t,e),Object(c.a)(t,[{key:"fetch",value:function(e){console.log("fetch",e)}},{key:"asyncData",value:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=_(t.route.query),console.log("AsyncData",n),e.abrupt("return",{subsTag:n});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"validate",value:function(e){return console.log("validate subsTag",e.route.query,this.subsTag),!0}},{key:"refresh",value:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t,data,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.subsTag=_(this.$route.query),this.subreddits=[],t="/data/top-subs-".concat(this.subsTag,".json"),data=j[t]){e.next=10;break}return e.next=7,y.a.get(t);case 7:n=e.sent,data=n.data,j[t]=data;case 10:this.subreddits=data;case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"beforeUpdate",value:function(){console.log("beforeUpdate"),this.refresh()}},{key:"created",value:function(){console.log("created"),this.refresh()}}]),t}(v.Vue);k=x([Object(v.Component)({components:{},watchQuery:!0,methods:{compactNumber:m.c}})],k);var j={};function _(e){return"nsfw"===e.tag?"nsfw":"sfw"}var O=k,C=(n(268),n(11)),component=Object(C.a)(O,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("header",[n("h1",{staticClass:"header"},[e._v("Subreddits")]),e._v(" "),e._l(["sfw","nsfw"],function(t){return n("nuxt-link",{key:t,staticClass:"tag-button",attrs:{to:"?tag="+t}},[e._v(e._s(t))])})],2),e._v(" "),n("div",{staticClass:"cards"},e._l(e.subreddits.slice(0,40),function(sub){return n("a",{key:sub.name,staticClass:"sub-card card-back",attrs:{href:"https://www.reddit.com/r/"+sub.name+"/top?t=all",target:"_blank",rel:"noopener noreferrer"}},[n("div",{staticClass:"sub-meta"},[n("div",{staticClass:"sub-name"},[e._v("/r/"+e._s(sub.name))]),e._v(" "),n("div",{staticClass:"sub-stats"},[e._v(e._s(e.compactNumber(sub.subscribers))+" subscribers. "+e._s(sub.title))])]),e._v(" "),n("div",{staticClass:"sub-previews-container"},e._l(sub.top,function(t,r){return n("div",{key:r,staticClass:"sub-preview"},[t.thumb?n("img",{attrs:{src:t.thumb,title:t.title,onerror:"this.parentElement.style.display='none'"}}):e._e(),e._v(" "),t.thumb?e._e():n("div",{staticClass:"text-preview"},[e._v(e._s(t.title))])])}),0)])}),0)])},[],!1,null,"458dd4b3",null);t.default=component.exports}}]);