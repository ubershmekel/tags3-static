(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(e,t,n){var content=n(217);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("2e39ac3e",content,!0,{sourceMap:!1})},214:function(e,t,n){e.exports=n.p+"img/5198f77.svg"},215:function(e,t,n){e.exports=n.p+"img/f74e4a1.png"},216:function(e,t,n){"use strict";var o=n(194);n.n(o).a},217:function(e,t,n){(e.exports=n(22)(!1)).push([e.i,"h2[data-v-1d62a6ac]{margin:0 0 1em}p[data-v-1d62a6ac]{margin:0 0 .5em}.links a[data-v-1d62a6ac]{display:block;margin:1em}.table-image[data-v-1d62a6ac]{width:100%}.query-input[data-v-1d62a6ac]::-webkit-input-placeholder{color:#888}.query-input[data-v-1d62a6ac]::-moz-placeholder{color:#888}.query-input[data-v-1d62a6ac]:-ms-input-placeholder{color:#888}.query-input[data-v-1d62a6ac]::-ms-input-placeholder{color:#888}.query-input[data-v-1d62a6ac]::placeholder{color:#888}.query-input[data-v-1d62a6ac]{width:100%;box-shadow:0 2px 6px 0 #3bf2ea;box-sizing:border-box;margin-bottom:2em}.query-label[data-v-1d62a6ac]{display:inline-block;margin-bottom:.8em}.links img[data-v-1d62a6ac]{height:2em;float:left}",""])},223:function(e,t,n){"use strict";n.r(t);var o=n(39),r=n(41),l=n(40),c=n(42),d=n(6),E=n(24),m=function(e,t,n,desc){var o,r=arguments.length,l=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(r<3?o(l):r>3?o(t,n,l):o(t,n))||l);return r>3&&l&&Object.defineProperty(t,n,l),l},R=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(r.a)(this,Object(l.a)(t).apply(this,arguments))).queries=[{name:"Most liked up to 6 hours ago",sql:"SELECT * FROM url WHERE timestamp > NOW() - INTERVAL '6 hours' ORDER BY likes DESC LIMIT 50"},{name:"Most liked this week",sql:"SELECT * FROM url WHERE timestamp > NOW() - INTERVAL '7 days' ORDER BY likes DESC LIMIT 50"},{name:"Most liked during September 2018",sql:"SELECT * FROM url WHERE '2018-09-01' < timestamp AND timestamp < '2018-10-01' ORDER BY likes DESC LIMIT 50"},{name:"Most likes of all time",sql:"SELECT * FROM url ORDER BY likes DESC LIMIT 50"},{name:"Most liked comedians this week on twitter",sql:"SELECT * FROM url WHERE timestamp > NOW() - INTERVAL '7 days' AND \"user\" IN ('anthonyjesselnik', 'azizansari', 'mindykaling', 'conanobrien', 'SarahKSilverman', 'StephenAtHome') ORDER BY likes DESC LIMIT 50"},{name:"Most liked that was tagged 'music'",sql:"SELECT * FROM url WHERE tags @> ARRAY['music']::text[] ORDER BY likes DESC LIMIT 50"},{name:"Most liked urban dictionary words",sql:"SELECT * FROM url WHERE domain = 'urbandictionary.com' ORDER BY likes DESC LIMIT 50 !nothumbs"},{name:"Most liked urban dictionary words from last two years",sql:"SELECT * FROM url WHERE domain = 'urbandictionary.com' AND timestamp > NOW() - INTERVAL '2 years' ORDER BY likes DESC LIMIT 50 !nothumbs"},{name:"Most viewed youtube videos in past 72 hours",sql:"SELECT * FROM url WHERE timestamp > NOW() - INTERVAL '72 hours' AND domain = 'youtube.com' ORDER BY views DESC LIMIT 50"},{name:"Most views per second",sql:"SELECT *, views / EXTRACT(epoch FROM(updated_at - timestamp)) AS vps FROM url WHERE views IS NOT NULL ORDER BY vps DESC LIMIT 50"},{name:"Earth images slideshow",sql:"SELECT * FROM url WHERE \"channel\" = 'EarthPorn' ORDER BY likes DESC LIMIT 50 !slideshow",new:!0},{name:"Top 'porn in 15 seconds' video slideshow",sql:"SELECT * FROM url WHERE video_url IS NOT NULL AND channel = 'porninfifteenseconds' ORDER BY likes DESC LIMIT 50 !slideshow",new:!0}],e}return Object(c.a)(t,e),t}(E.Vue),h=R=m([Object(E.Component)({components:{},watchQuery:!0})],R),v=(n(216),n(11)),component=Object(v.a)(h,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("h2",[e._v("Never miss out. Query what's trending on youtube, twitter, urbandictionary, and reddit to find exactly your content.")]),e._v(" "),o("div",{staticClass:"links"},[e._l(e.queries,function(t){return o("nuxt-link",{key:t.name,attrs:{to:"/q?q="+t.sql}},[e._v(e._s(t.name)),t.new?o("img",{attrs:{src:n(214)}}):e._e()])}),e._v(" "),o("nuxt-link",{attrs:{to:"/subreddits"}},[e._v("Subreddits map")])],2),e._v(" "),e._m(0),e._v(" "),o("h2",[e._v("What the table looks like")]),e._v(" "),o("img",{staticClass:"table-image",attrs:{src:n(215)}})])},[function(){var e=this.$createElement,t=this._self._c||e;return t("form",{attrs:{action:"/q"}},[t("label",{staticClass:"query-label",attrs:{for:"query-box"}},[this._v("Create your own query:")]),this._v(" "),t("input",{staticClass:"query-input",attrs:{value:"SELECT * FROM url WHERE timestamp > '2019-05-01' AND title ILIKE '%trump%' ORDER BY LIKES DESC",name:"q"}})])}],!1,null,"1d62a6ac",null);t.default=component.exports}}]);