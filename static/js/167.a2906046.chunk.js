"use strict";(self.webpackChunkhotel=self.webpackChunkhotel||[]).push([[167],{7217:function(){},820:function(e,r,n){n.d(r,{Z:function(){return l}});var t=n(5545),a=n(5400),o="HeadTitle_heading__7lGKQ",s="HeadTitle_container__eEMN1",i="HeadTitle_background__bWeZn",c=n(1753),u=n(2559),l=function(){var e=(0,t.TH)(),r=(0,c.Z)("sea",1,45,"landscape"),n=r.imagesApi,l=r.error;return l?(0,u.jsxs)("div",{children:["Error: ",l.message]}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("section",{className:o,children:[null===n||void 0===n?void 0:n.map((function(e,r){return(0,u.jsx)("div",{className:i,children:(0,u.jsx)("img",{src:e.urls.regular,alt:e.alt_description},e.id)},r)})),(0,u.jsxs)("div",{className:s,children:[(0,u.jsx)("h1",{children:e.pathname.split("/")[1]}),(0,u.jsxs)("button",{type:"button","aria-label":"back to home",children:[(0,u.jsx)(a.rU,{to:"/",children:"Home  / "}),(0,u.jsx)("span",{children:e.pathname.split("/")[1]})]})]})]})})}},6167:function(e,r,n){n.r(r);var t=n(1413),a=n(4165),o=n(5861),s=n(9439),i=n(8369),c=n(3882),u=n(4417),l=n(4854),d=n(6946),p=n(5545),f=n(5400),m=n(390),v=n(820),h=(n(7217),n(2559));r.default=function(){var e,r,n=(0,m.useState)(),x=(0,s.Z)(n,2),g=x[0],Z=x[1],j=(0,c.a)().login,b=(0,p.s0)(),w=(0,i.cI)({defaultValues:{email:"",password:""}}),k=w.handleSubmit,y=w.register,S=w.formState.errors,N=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(r,n){var t,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t=n.target.email.value,o=n.target.password.value,e.prev=3,e.next=6,j(t,o);case 6:b("/dashboard"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),Z("Incorrect username or password.");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(r,n){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v.Z,{}),(0,h.jsx)("section",{className:"forms top",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"sign-box",children:[(0,h.jsx)("p",{children:"Enter your e-mail and password below to log in to your account and use the benefits of our website."}),(0,h.jsxs)("form",{onSubmit:k(N),noValidate:!0,children:[(0,h.jsxs)(u.Z,{spacing:2,width:400,children:[g&&(0,h.jsx)("div",{className:"error",children:g}),(0,h.jsx)(l.Z,(0,t.Z)((0,t.Z)({label:"Email",type:"email"},y("email",{required:"Email is required"})),{},{error:!!S.email})),(0,h.jsx)("p",{className:"error",children:null===(e=S.email)||void 0===e?void 0:e.message}),(0,h.jsx)(l.Z,(0,t.Z)((0,t.Z)({type:"password",label:"Password",id:"password"},y("password",{required:"password is required"})),{},{error:!!S.password})),(0,h.jsxs)("p",{className:"error",children:[null===(r=S.password)||void 0===r?void 0:r.message," "]}),(0,h.jsx)(d.Z,{type:"submit",variant:"contained",color:"success",children:"Login"}),(0,h.jsxs)("p",{children:[" Forgot Password? ",(0,h.jsx)(f.rU,{to:"/forgot",children:"Reset it"})]})]}),(0,h.jsxs)("p",{children:[" Don't have account? ",(0,h.jsx)(f.rU,{to:"/register",children:"Signup!"})]})]})]})})})]})}},1753:function(e,r,n){var t=n(4165),a=n(5861),o=n(9439),s=n(390);r.Z=function(e,r,n,i){var c=(0,s.useState)([]),u=(0,o.Z)(c,2),l=u[0],d=u[1],p=(0,s.useState)(null),f=(0,o.Z)(p,2),m=f[0],v=f[1];return(0,s.useEffect)((function(){var o=function(){var o=(0,a.Z)((0,t.Z)().mark((function a(){var o,s;return(0,t.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://api.unsplash.com/search/photos","?query=").concat(e,"&page=").concat(n,"&per_page=").concat(r,"&orientation=").concat(i,"&client_id=").concat("OUaKiH8GygKA0TiBxNxE8Om2QxIL1YZZuiTJKn8nCXo"));case 3:if((o=t.sent).ok){t.next=6;break}throw new Error("Failed to fetch data");case 6:return t.next=8,o.json();case 8:s=t.sent,d(s.results),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),v(t.t0);case 15:case"end":return t.stop()}}),a,null,[[0,12]])})));return function(){return o.apply(this,arguments)}}();o()}),[e,r,n,i]),{imagesApi:l,error:m}}},3882:function(e,r,n){n.d(r,{H:function(){return l},a:function(){return u}});var t=n(9439),a=n(390),o=n(7513),s=n(4658),i=n(2559),c=(0,a.createContext)();function u(){return(0,a.useContext)(c)}function l(e){var r=e.children,n=(0,a.useState)(),u=(0,t.Z)(n,2),l=u[0],d=u[1],p=(0,a.useState)(!0),f=(0,t.Z)(p,2),m=f[0],v=f[1];(0,a.useEffect)((function(){return o.I.onAuthStateChanged((function(e){d(e),v(!1)}))}),[]);var h={currentUser:l,login:function(e,r){return(0,s.e5)(o.I,e,r)},signup:function(e,r){return(0,s.Xb)(o.I,e,r)},logout:function(){return(0,s.w7)(o.I)},resetPassword:function(e){return(0,s.LS)(o.I,e)},updateEmail:function(e){return l.updateEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return(0,i.jsx)(c.Provider,{value:h,children:!m&&r})}},7513:function(e,r,n){n.d(r,{I:function(){return s}});var t=n(1355),a=n(4658),o=(0,t.ZF)({apiKey:"AIzaSyDK7dLT2jqVVjquVaFtsv80tuofPpTVwWw",authDomain:"auth-development-85879.firebaseapp.com",projectId:"auth-development-85879",storageBucket:"auth-development-85879.appspot.com",messagingSenderId:"649818716749",appId:"1:649818716749:web:667419298f5065669d3a04"}),s=(0,a.v0)(o)},4417:function(e,r,n){n.d(r,{Z:function(){return P}});var t=n(4942),a=n(3366),o=n(7462),s=n(390),i=n(3370),c=n(4487),u=n(147),l=n(2254),d=(0,n(6410).ZP)(),p=n(9987),f=n(9301),m=n(9605),v=n(1188),h=n(8646),x=n(2559),g=["component","direction","spacing","divider","children","className","useFlexGap"],Z=(0,m.Z)(),j=d("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return r.root}});function b(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:Z})}function w(e,r){var n=s.Children.toArray(e).filter(Boolean);return n.reduce((function(e,t,a){return e.push(t),a<n.length-1&&e.push(s.cloneElement(r,{key:"separator-".concat(a)})),e}),[])}var k=function(e){var r=e.ownerState,n=e.theme,a=(0,o.Z)({display:"flex",flexDirection:"column"},(0,v.k9)({theme:n},(0,v.P$)({values:r.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(r.spacing){var s=(0,h.hB)(n),i=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof r.spacing&&null!=r.spacing[n]||"object"===typeof r.direction&&null!=r.direction[n])&&(e[n]=!0),e}),{}),u=(0,v.P$)({values:r.direction,base:i}),l=(0,v.P$)({values:r.spacing,base:i});"object"===typeof u&&Object.keys(u).forEach((function(e,r,n){if(!u[e]){var t=r>0?u[n[r-1]]:"column";u[e]=t}}));a=(0,c.Z)(a,(0,v.k9)({theme:n},l,(function(e,n){return r.useFlexGap?{gap:(0,h.NA)(s,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,t.Z)({},"margin".concat((a=n?u[n]:r.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,h.NA)(s,e))};var a})))}return a=(0,v.dt)(n.breakpoints,a)};var y=n(4729),S=n(6869),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.createStyledComponent,n=void 0===r?j:r,t=e.useThemeProps,c=void 0===t?b:t,d=e.componentName,p=void 0===d?"MuiStack":d,m=n(k),v=s.forwardRef((function(e,r){var n=c(e),t=(0,f.Z)(n),s=t.component,d=void 0===s?"div":s,v=t.direction,h=void 0===v?"column":v,Z=t.spacing,j=void 0===Z?0:Z,b=t.divider,k=t.children,y=t.className,S=t.useFlexGap,N=void 0!==S&&S,P=(0,a.Z)(t,g),E={direction:h,spacing:j,useFlexGap:N},I=(0,u.Z)({root:["root"]},(function(e){return(0,l.Z)(p,e)}),{});return(0,x.jsx)(m,(0,o.Z)({as:d,ownerState:E,ref:r,className:(0,i.Z)(I.root,y)},P,{children:b?w(k,b):k}))}));return v}({createStyledComponent:(0,y.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,r){return r.root}}),useThemeProps:function(e){return(0,S.Z)({props:e,name:"MuiStack"})}}),P=N}}]);
//# sourceMappingURL=167.a2906046.chunk.js.map