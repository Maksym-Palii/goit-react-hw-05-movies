"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[929],{929:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),u=n(87),o=n(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var l=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/trending/movie/day?api_key=".concat("abbc06680f95aa51ddd683d2c46a812f"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=l,f="Home_container__w+u63",p="Home_title__L087v",_="Home_list__aopnc",h="Home_link__2zIq5",v=n(184),m=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],o=(0,i.useState)(null),l=(0,a.Z)(o,2),m=l[0],x=l[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:return t=e.sent,e.next=6,t.map((function(e){return{title:e.title,id:e.id}}));case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),x(e.t0.mesage);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("h1",{className:p,children:"Trending today"}),m&&(0,v.jsx)("h1",{children:m}),(0,v.jsx)("ul",{children:n.map((function(e){return(0,v.jsx)("li",{className:_,children:(0,v.jsx)(u.rU,{className:h,to:"movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=929.a7cf3a20.chunk.js.map