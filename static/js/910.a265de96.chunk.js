"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{910:function(t,e,r){r.r(e);var a=r(861),n=r(152),c=r(757),s=r.n(c),i=r(791),o=r(980),u=r(22),p=r(184);e.default=function(t){var e=t.match,r=(0,i.useState)([]),c=(0,n.Z)(r,2),f=c[0],l=c[1];(0,i.useEffect)((function(){m(e.params.movieId)}),[e.params.movieId]);var m=function(){var t=(0,a.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(u.$));case 3:r=t.sent,l(r.data.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching cast:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Cast"}),(0,p.jsx)("ul",{className:"list-group",children:f.map((function(t){return(0,p.jsxs)("li",{className:"list-group-item",children:[t.name,(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(t.profile_path),alt:"".concat(t.name," profile"),style:{marginLeft:"10px"}})]},t.id)}))})]})}},22:function(t,e,r){r.d(e,{$:function(){return a}});var a="3c0b3815c968015248ff246dfcd85c29"}}]);
//# sourceMappingURL=910.a265de96.chunk.js.map