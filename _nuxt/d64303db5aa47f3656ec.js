(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{180:function(e,t,r){"use strict";r.d(t,"a",function(){return o}),r.d(t,"c",function(){return c}),r.d(t,"b",function(){return d});r(110);var n=r(10);r(73);function o(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e}function c(e){"object"!==Object(n.a)(e)&&(e=new Date(e));var t,r=Math.floor((+new Date-+e)/1e3),o=Math.floor(r/31536e3);return o>=1?t="year":(o=Math.floor(r/2592e3))>=1?t="month":(o=Math.floor(r/86400))>=1?t="day":(o=Math.floor(r/3600))>=1?t="hour":(o=Math.floor(r/60))>=1?t="minute":(o=r,t="second"),(o>1||0===o)&&(t+="s"),o+" "+t}function d(e,t,r){return e.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),r)}},181:function(e,t,r){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",function(){return o})},185:function(e,t,r){var content=r(194);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("360375bb",content,!0,{sourceMap:!1})},193:function(e,t,r){"use strict";var n=r(185);r.n(n).a},194:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".header[data-v-72f6c623]{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}.sub-card[data-v-72f6c623]{display:block;margin:1em;padding:0;overflow:hidden;border-radius:10px;opacity:.8}.sub-card[data-v-72f6c623]:hover{opacity:1}.sub-name[data-v-72f6c623]{font-size:2em}.sub-stats[data-v-72f6c623]{opacity:.6}.sub-meta[data-v-72f6c623]{padding:.2em}.sub-previews-container[data-v-72f6c623]{max-height:200px}.sub-preview[data-v-72f6c623]{display:inline-block;height:100px;vertical-align:top;overflow:hidden;padding:4px;box-sizing:border-box;border-radius:4px}.sub-preview img[data-v-72f6c623]{height:100%;width:100%;-o-object-fit:contain;object-fit:contain}.text-preview[data-v-72f6c623]{padding:4px;max-width:200px;box-shadow:2px 2px 12px #000;height:100%}@media (max-width:600px){.sub-preview[data-v-72f6c623]{width:100px}}.tag-button[data-v-72f6c623]{display:inline-block;margin:.5em;padding:.2em;border-radius:4px;border:1px solid #666;background-color:#252525}.nuxt-link-exact-active[data-v-72f6c623]{background-color:#666}",""])},199:function(e,t,r){"use strict";r.r(t);r(54);var n=r(7),o=r(69),c=r(181),d=r(71),l=r(70),f=r(72),v=r(10),h=r(53),m=r(180),w=r(75),y=r.n(w),x=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},_=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(d.a)(this,Object(l.a)(t).apply(this,arguments))).subreddits=[],e.subsTag="sfw",e}return Object(f.a)(t,e),Object(c.a)(t,[{key:"fetch",value:function(e){console.log("fetch",e)}},{key:"asyncData",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=j(t.route.query),console.log("AsyncData",r),e.abrupt("return",{subsTag:r});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"validate",value:function(e){return console.log("validate subsTag",e.route.query,this.subsTag),!0}},{key:"refresh",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,data,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.subsTag=j(this.$route.query),this.subreddits=[],t="./data/top-subs-".concat(this.subsTag,".json"),data=k[t]){e.next=10;break}return e.next=7,y.a.get(t);case 7:r=e.sent,data=r.data,k[t]=data;case 10:this.subreddits=data;case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"beforeUpdate",value:function(){console.log("beforeUpdate"),this.refresh()}},{key:"created",value:function(){console.log("created"),this.refresh()}}]),t}(h.Vue);_=x([Object(h.Component)({components:{},watchQuery:!0,methods:{compactNumber:m.a}})],_);var k={};function j(e){return"nsfw"===e.tag?"nsfw":"sfw"}var O=_,C=(r(193),r(16)),component=Object(C.a)(O,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("header",[r("h1",{staticClass:"header"},[e._v("Subreddits")]),e._v(" "),e._l(["sfw","nsfw"],function(t){return r("nuxt-link",{key:t,staticClass:"tag-button",attrs:{to:"?tag="+t}},[e._v(e._s(t))])}),e._v("\n\n    "+e._s(e.subsTag)+"\n    ")],2),e._v(" "),r("div",{staticClass:"cards"},e._l(e.subreddits.slice(0,40),function(sub){return r("a",{key:sub.name,staticClass:"sub-card card-back",attrs:{href:"https://www.reddit.com/r/"+sub.name+"/top?t=all"}},[r("div",{staticClass:"sub-meta"},[r("div",{staticClass:"sub-name"},[e._v("/r/"+e._s(sub.name))]),e._v(" "),r("div",{staticClass:"sub-stats"},[e._v(e._s(e.compactNumber(sub.subscribers))+" subscribers. "+e._s(sub.title))])]),e._v(" "),r("div",{staticClass:"sub-previews-container"},e._l(sub.top,function(t,n){return r("div",{key:n,staticClass:"sub-preview"},[t.thumb?r("img",{attrs:{src:t.thumb,title:t.title,onerror:"this.parentElement.style.display='none'"}}):e._e(),e._v(" "),t.thumb?e._e():r("div",{staticClass:"text-preview"},[e._v(e._s(t.title))])])}),0)])}),0)])},[],!1,null,"72f6c623",null);t.default=component.exports}}]);