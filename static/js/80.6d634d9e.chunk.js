"use strict";(self.webpackChunkhotel=self.webpackChunkhotel||[]).push([[80],{2080:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(9439),a=t(4946),s=t(7905),i=t(390),c=t(1753),o=t(2559),l=function(){var e=(0,i.useState)(0),n=(0,r.Z)(e,2),t=n[0],l=n[1],u=(0,c.Z)("hotel-sea-view",5,3,"landscape"),h=u.imagesApi,d=u.error;if(d)return(0,o.jsxs)("div",{children:["Error: ",d.message]});var p=h.length;return!Array.isArray(h)||h.length<=0?null:(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{className:"container parent flex",children:[(0,o.jsxs)("div",{className:"control-btn",children:[(0,o.jsx)("button",{className:"prev",onClick:function(){l(0===t?p-1:t-1)},"aria-label":"prev slide",children:(0,o.jsx)(a.G,{icon:s.acZ})}),(0,o.jsx)("button",{className:"next",onClick:function(){l(t===p-1?0:t+1)},"aria-label":"next slide",children:(0,o.jsx)(a.G,{icon:s.eFW})})]}),h.slice(t,t+5).map((function(e,n){return(0,o.jsxs)("div",{className:n===t?"slide active":"slide",children:[(0,o.jsx)("div",{className:"image-container",children:(0,o.jsx)("img",{src:e.urls.regular,alt:e.alt_description,loading:"lazy"})}),(0,o.jsxs)("div",{className:"slide-title",children:[(0,o.jsx)("h2",{children:"The Hotel Booking & Resort"}),(0,o.jsx)("p",{children:"Make Your Life Better and Bright! You must trip with Us!"}),(0,o.jsx)("button",{children:"Book A Room"})]})]},e.id)}))]})})}},1753:function(e,n,t){var r=t(4165),a=t(5861),s=t(9439),i=t(390);n.Z=function(e,n,t,c){var o=(0,i.useState)([]),l=(0,s.Z)(o,2),u=l[0],h=l[1],d=(0,i.useState)(null),p=(0,s.Z)(d,2),x=p[0],f=p[1];return(0,i.useEffect)((function(){var s=function(){var s=(0,a.Z)((0,r.Z)().mark((function a(){var s,i;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("".concat("https://api.unsplash.com/search/photos","?query=").concat(e,"&page=").concat(t,"&per_page=").concat(n,"&orientation=").concat(c,"&client_id=").concat("OUaKiH8GygKA0TiBxNxE8Om2QxIL1YZZuiTJKn8nCXo"));case 3:if((s=r.sent).ok){r.next=6;break}throw new Error("Failed to fetch data");case 6:return r.next=8,s.json();case 8:i=r.sent,h(i.results),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),f(r.t0);case 15:case"end":return r.stop()}}),a,null,[[0,12]])})));return function(){return s.apply(this,arguments)}}();s()}),[e,n,t,c]),{imagesApi:u,error:x}}}}]);
//# sourceMappingURL=80.6d634d9e.chunk.js.map