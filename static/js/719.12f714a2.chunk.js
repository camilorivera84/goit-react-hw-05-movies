"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[719],{719:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),s=n(439),c=n(757),i=n.n(c),a=n(791),o=n(243),l=n(22),u=n(689),h=n(184),d=function(){var e=(0,u.UO)().movieId,t=(0,u.s0)(),n=(0,a.useState)({}),c=(0,s.Z)(n,2),d=c[0],p=c[1];(0,a.useEffect)((function(){v(e)}),[e]);var v=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(l.$));case 3:n=e.sent,p(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(n){t("/movies/".concat(e,"/").concat(n))};return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Movie Details"}),(0,h.jsxs)("h3",{children:["Title: ",d.title]}),d.poster_path&&(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(d.poster_path),alt:"".concat(d.title," poster")})]}),(0,h.jsxs)("div",{style:{marginLeft:"20px"},children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Overview:"})," ",d.overview]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Score:"})," ",d.vote_average]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Genres:"})," ",d.genres&&d.genres.map((function(e){return e.name})).join(", ")]})]})]}),(0,h.jsxs)("div",{style:{marginTop:"20px"},children:[(0,h.jsx)("button",{className:"btn btn-primary ml-4",onClick:function(){return f("cast")},children:"Show Cast"}),(0,h.jsx)("button",{className:"btn btn-primary",onClick:function(){return f("reviews")},children:"Show Reviews"})]}),(0,h.jsx)(u.j3,{})]})}},22:function(e,t,n){n.d(t,{$:function(){return r}});var r="3c0b3815c968015248ff246dfcd85c29"}}]);
//# sourceMappingURL=719.12f714a2.chunk.js.map