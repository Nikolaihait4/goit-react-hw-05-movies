"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{7753:function(e,a,r){r.r(a),r.d(a,{default:function(){return k}});var n=r(5861),i=r(9439),s=r(7757),t=r.n(s),c=r(4414),o=r(4863);var l=r(2791),d=r(2782),v=r(184),m=function(e){var a=e.score,r=360*a/100;return(0,v.jsx)("div",{style:{paddingTop:"20px"},children:(0,v.jsx)("span",{style:{background:"conic-gradient(rgb(0, 122, 255) ".concat(r,"deg, #c8c5c59e 0deg)")},children:(0,v.jsx)("span",{children:"".concat(a,"%")})})})},h={movieContainer2:"MovieCard_movieContainer2__Fdtl1",cardInfo:"MovieCard_cardInfo__M6fmj",contOther:"MovieCard_contOther__wC89b",contOwerview:"MovieCard_contOwerview__IpVpH"};var u=function(e){var a=e.movie,r=a.poster_path,n=a.backdrop_path,i=a.title,s=a.overview,t=a.genres,c=a.vote_average,l=a.release_date,u=a.runtime,p=void 0===u?0:u,f=a.tagline,g=a.homepage,j=n?"linear-gradient(rgba(47,48,58,0.8), rgba(47,48,58,0.8)), url(https://image.tmdb.org/t/p/original/".concat(n,")"):"linear-gradient(rgba(47,48,58,0.8), rgba(47,48,58,0.8))",x=t.length>0?t.map((function(e){return e.name})).join(", "):"No genres provided",_=l?"(".concat(l.split("-")[0],")"):"",N=(0,o.N)(l),w=s||"No overviews yet...",b=function(e){var a=Math.floor(e/60),r=Math.round(e%60);return"".concat(a,"h ").concat(r,"min")}(p),C=c?Math.round(c/10*100):0;return(0,v.jsx)("div",{className:h.movieContainer,style:{backgroundImage:j,backgroundSize:"cover"},children:(0,v.jsxs)("div",{className:h.movieContainer2,children:[(0,v.jsx)("div",{className:h.imgContainer,children:(0,v.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w300/".concat(r):"".concat(d),alt:i,width:"250",className:h.imgSetup})}),(0,v.jsxs)("div",{className:h.cardInfo,children:[(0,v.jsxs)("div",{className:h.cardInfo2,children:[(0,v.jsxs)("h2",{className:h.cardTitle,children:[i,"\xa0",_]}),g&&(0,v.jsx)("a",{className:h.cardLink,href:g,target:"_blank",rel:"noopener noreferrer",title:"Go to the official website",children:"Go to the official website"})]}),f&&(0,v.jsx)("i",{children:f}),(0,v.jsxs)("div",{className:h.contOther,children:[l&&(0,v.jsxs)("span",{className:h.formData,children:[N," \xb7 "]}),x&&(0,v.jsxs)("span",{className:h.genrlist,children:[" ",x]}),p>0&&(0,v.jsxs)("span",{className:h.filmDut,children:[" \xb7 ",b]})]}),(0,v.jsx)(m,{score:C}),(0,v.jsxs)("div",{className:h.contOwerview,children:[(0,v.jsx)("span",{className:h.overview,children:"Overview"}),(0,v.jsx)("p",{className:h.iOwerview,children:w})]})]})]})})},p=r(1686),f=r.n(p),g=r(7689),j=r(1087),x=r(8823),_="MovieDetails_goBack__C8OKE",N="MovieDetails_moveiDetailsCont__abN9J",w="MovieDetails_moveiDetailsTitle__ukAVg",b="MovieDetails_moveiDetailsItem__YB8-N",C="MovieDetails_moveiDetailsList__Spb+Z";function k(){var e,a,r=(0,g.UO)().movieId,s=(0,l.useState)(null),o=(0,i.Z)(s,2),d=o[0],m=o[1],h=(0,l.useState)(!1),p=(0,i.Z)(h,2),k=p[0],M=p[1],D=(0,l.useState)(!1),O=(0,i.Z)(D,2),y=O[0],I=O[1],S=(0,g.TH)(),T=(0,l.useRef)(null!==(e=null===S||void 0===S||null===(a=S.state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/");return(0,l.useEffect)((function(){var e=new AbortController,a=e.signal,i=function(){var e=(0,n.Z)(t().mark((function e(r){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,M(!0),e.next=4,(0,x.TP)(r,a);case 4:n=e.sent,m(n),f().Notify.success("Movie ist load....enjoy))"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),"ERR_CANCELED"!==e.t0.code&&I(!0);case 12:return e.prev=12,M(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(a){return e.apply(this,arguments)}}();return i(r),function(){e.abort()}}),[r]),(0,v.jsxs)(v.Fragment,{children:[k&&(0,v.jsx)(c.Z,{}),y&&f().Notify.failure("Oops, something went wrong...Try again later!"),(0,v.jsx)("div",{className:_,children:(0,v.jsx)(j.rU,{to:T.current,children:"Go back"})}),d&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u,{movie:d}),(0,v.jsxs)("div",{className:N,children:[(0,v.jsx)("h3",{className:w,children:"Additional Information"}),(0,v.jsxs)("ul",{className:b,children:[(0,v.jsx)("li",{className:C,children:(0,v.jsx)(j.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{className:C,children:(0,v.jsx)(j.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(g.j3,{})]})]})]})}}}]);
//# sourceMappingURL=753.0fc5db1a.chunk.js.map