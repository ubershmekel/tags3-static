(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{180:function(e,t,r){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",function(){return o})},181:function(e,t,r){var content=r(186);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("3125290c",content,!0,{sourceMap:!1})},185:function(e,t,r){"use strict";var n=r(181);r.n(n).a},186:function(e,t,r){(e.exports=r(36)(!1)).push([e.i,".query-input[data-v-08fe613e]{width:100%}.error[data-v-08fe613e]{color:red}.item[data-v-08fe613e]{border-radius:4px;padding:4px;background-color:#333;margin:1em;border-left:1px solid #ddd;display:flex;flex-direction:row;align-items:flex-start}.domain[data-v-08fe613e]{opacity:.6}.item-title[data-v-08fe613e]{display:block}.item-meta[data-v-08fe613e]{color:#999}.item-info[data-v-08fe613e]{vertical-align:top;margin-left:.5em}.item-thumb-container[data-v-08fe613e]{height:80px;width:80px;min-width:80px;background-color:hsla(0,0%,48.2%,.2)}.item-thumb[data-v-08fe613e]{width:80px;height:80px;-o-object-fit:cover;object-fit:cover}.stats[data-v-08fe613e]{opacity:.6}hr[data-v-08fe613e]{border:none;border-top:1px solid #333}",""])},194:function(e,t,r){"use strict";r.r(t);r(73),r(53);var n=r(7),o=r(69),c=r(180),l=r(71),h=r(70),d=r(72),f=r(14),m=r(54),v=r(74),y=r.n(v),w=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c};var _="!nothumbs",k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).apply(this,arguments))).query="",e.results=null,e.error="",e.queryDuration=null,e.showThumbnails=!0,e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"fetch",value:function(e){console.log("fetch",e)}},{key:"asyncData",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route.query.q,console.log("AsyncData",r),e.abrupt("return",{query:r});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"validate",value:function(e){return!0}},{key:"beforeUpdate",value:function(){console.log("beforeUpdate")}},{key:"created",value:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("created"),t=this.$route.query.q,this.query=t,t.indexOf(_)>=0&&(this.showThumbnails=!1,t=t.replace(_,"")),r={validateStatus:function(e){return!0}},n=performance.now(),e.next=8,y.a.get("https://us-east1-ubershmekel.cloudfunctions.net/tags3-api?q="+encodeURI(t),r);case 8:o=e.sent,this.queryDuration=performance.now()-n,console.log("query res",o),o.data.error?this.error=o.data.error:this.results=o.data;case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onPropertyChanged",value:function(e,t){console.log("show",e),this.query=e?this.query.replace(" "+_,""):this.query+" "+_}},{key:"compactNumber",value:function(e){return e>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":e>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":e>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e}},{key:"timeSince",value:function(e){"object"!==Object(f.a)(e)&&(e=new Date(e));var t,r=Math.floor((+new Date-+e)/1e3),n=Math.floor(r/31536e3);return n>=1?t="year":(n=Math.floor(r/2592e3))>=1?t="month":(n=Math.floor(r/86400))>=1?t="day":(n=Math.floor(r/3600))>=1?t="hour":(n=Math.floor(r/60))>=1?t="minute":(n=r,t="second"),(n>1||0===n)&&(t+="s"),n+" "+t}}]),t}(m.Vue);w([Object(m.Watch)("showThumbnails")],k.prototype,"onPropertyChanged",null);var x=k=w([Object(m.Component)({components:{},watchQuery:!0})],k),j=(r(185),r(18)),component=Object(j.a)(x,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("form",[r("input",{staticClass:"query-input",attrs:{name:"q"},domProps:{value:e.query}})]),e._v(" "),e.queryDuration?r("div",{staticClass:"stats"},[e._v("(took "+e._s(Math.round(e.queryDuration)/1e3)+" s)")]):e._e(),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.showThumbnails,expression:"showThumbnails"}],attrs:{type:"checkbox",id:"showThumbnails"},domProps:{checked:Array.isArray(e.showThumbnails)?e._i(e.showThumbnails,null)>-1:e.showThumbnails},on:{change:function(t){var r=e.showThumbnails,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&(e.showThumbnails=r.concat([null])):c>-1&&(e.showThumbnails=r.slice(0,c).concat(r.slice(c+1)))}else e.showThumbnails=o}}}),e._v(" "),r("label",{attrs:{for:"showThumbnails"}},[e._v("Show thumbnails")]),e._v(" "),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"data-container"},[e.results&&0===e.results.length?r("div",[e._v("\n      No results. Tweak that query...\n    ")]):e._e(),e._v(" "),e._l(e.results,function(t,n){return r("div",{key:n,staticClass:"item"},[e.showThumbnails?r("div",{staticClass:"item-thumb-container"},[t.thumbnail_url?r("img",{staticClass:"item-thumb",attrs:{src:t.thumbnail_url,onerror:"this.style.display='none'"}}):e._e()]):e._e(),e._v(" "),r("div",{staticClass:"item-info"},[r("a",{staticClass:"item-title",attrs:{href:t.url}},[e._v(e._s(t.title))]),e._v(" "),r("div",{staticClass:"item-meta"},[e._v("\n          "+e._s(t.likes)+"\n          "),r("span",{staticClass:"domain",attrs:{title:t.timestamp}},[e._v("/ "+e._s(t.domain)+" / "+e._s(t.user)+" / "+e._s(e.timeSince(t.timestamp))+" ago")])])])])})],2)])},[],!1,null,"08fe613e",null);t.default=component.exports}}]);