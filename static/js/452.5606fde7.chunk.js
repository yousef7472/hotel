"use strict";(self.webpackChunkhotel=self.webpackChunkhotel||[]).push([[452,471,404],{7217:function(){},8471:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(4165),r=a(5861),i=a(9439),o=a(390),s=a(3882),c=a(5545),l=a(5400),d=a(4854),u=a(4602),p=a(9917),m=a(6911),v=a(6946),f=a(2559);function h(){var e=(0,o.useState)(""),t=(0,i.Z)(e,2),a=t[0],h=t[1],x=(0,o.useState)(""),b=(0,i.Z)(x,2),g=b[0],Z=b[1],j=(0,s.a)(),y=j.currentUser,w=j.logout,C=(0,c.s0)(),I=(0,o.useState)(),k=(0,i.Z)(I,2),N=k[0],F=k[1],P=(0,o.useState)(),S=(0,i.Z)(P,2),O=S[0],R=S[1],L="https://api.unsplash.com/search/photos",M="OUaKiH8GygKA0TiBxNxE8Om2QxIL1YZZuiTJKn8nCXo",V=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,a,r,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(L,"?query=sea&page=5&per_page=1&client_id=").concat(M));case 3:return t=e.sent,e.next=6,fetch("".concat(L,"?query=home&page=1&per_page=3&client_id=").concat(M));case 6:if(a=e.sent,t.ok&&a.ok){e.next=9;break}throw new Error("Failed to fetch data");case 9:return e.next=11,t.json();case 11:return r=e.sent,e.next=14,a.json();case 14:i=e.sent,F(r.results),R(i.results),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),h(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();function T(){return(T=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(""),e.prev=1,e.next=4,w();case 4:C("/sign"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),h("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}console.log(V());return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("section",{className:"dash",children:(0,f.jsxs)("div",{children:[null===N||void 0===N?void 0:N.map((function(e,t){return(0,f.jsx)("div",{className:"bg-sea",children:(0,f.jsx)("img",{src:e.urls.regular,alt:e.alt_description},e.id)},t)})),(0,f.jsx)("div",{className:"flex",children:null===O||void 0===O?void 0:O.map((function(e,t){return(0,f.jsx)("div",{className:"card",children:(0,f.jsx)("img",{src:e.urls.small,alt:e.alt_description},e.id)},t)}))}),(0,f.jsx)("h2",{children:"Hotel Booking"}),(0,f.jsx)("p",{children:"Experience something new every moment"}),(0,f.jsxs)("form",{children:[(0,f.jsxs)("div",{className:"flex",children:[(0,f.jsx)("label",{htmlFor:"standard-basic",children:"Name:"}),(0,f.jsx)(d.Z,{id:"standard-basic",label:"First Name",variant:"standard"}),(0,f.jsx)(d.Z,{id:"standard-basic",label:"Last Name",variant:"standard"})]}),(0,f.jsxs)("div",{className:"flex email",children:[(0,f.jsx)("strong",{children:"E-mail:"}),(0,f.jsx)(d.Z,{disabled:!0,id:"outlined-disabled",defaultValue:y.email})]}),(0,f.jsxs)("div",{className:"flex roomt",children:[(0,f.jsx)(u.Z,{id:"demo-simple-select-label",children:"Room Type"}),(0,f.jsxs)(p.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:g,label:"Room Type",onChange:function(e){Z(e.target.value)},children:[(0,f.jsx)(m.Z,{value:"",children:(0,f.jsx)("em",{children:"None"})}),(0,f.jsx)(m.Z,{value:"standard",children:"Standard Room (1 to 2 People)"}),(0,f.jsx)(m.Z,{value:"family",children:"Family Room (1 to 4 People)"}),(0,f.jsx)(m.Z,{value:"private",children:"Private Room (1 to 3 People)"}),(0,f.jsx)(m.Z,{value:"mix",children:"Mix Dorm Room (6 People)"}),(0,f.jsx)(m.Z,{value:"female",children:"Female Dorm Room (6 People)"}),(0,f.jsx)(m.Z,{value:"male",children:"Male Dorm Room (6 People)"})]})]}),(0,f.jsx)("div",{className:"date"})]}),a&&(0,f.jsx)("p",{children:a}),(0,f.jsx)(l.rU,{to:"/dashboard/update-profile",className:"",children:"Update Profile"})]})}),(0,f.jsx)("div",{className:"",children:(0,f.jsx)(v.Z,{onClick:function(){return T.apply(this,arguments)},children:"Log Out"})})]})}},452:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(5545),r=a(8471),i=a(7513),o=a(4404),s=a(2559);function c(){var e=(0,n.TH)();return i.I.currentUser?(0,s.jsxs)(s.Fragment,{children:["/dashboard"===e.pathname&&(0,s.jsx)(r.default,{}),"/dashboard/update-profile"===e.pathname&&(0,s.jsx)(o.default,{})]}):(0,s.jsx)(n.Fg,{to:"/sign",state:{from:e},replace:!0})}},4404:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(9439),r=a(390),i=a(3882),o=a(5545),s=a(5400),c=(a(7217),a(2559));function l(){var e=(0,r.useRef)(),t=(0,r.useRef)(),a=(0,r.useRef)(),l=(0,i.a)(),d=l.currentUser,u=l.updatePassword,p=l.updateEmail,m=(0,r.useState)(""),v=(0,n.Z)(m,2),f=v[0],h=v[1],x=(0,r.useState)(!1),b=(0,n.Z)(x,2),g=b[0],Z=b[1],j=(0,o.s0)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("section",{children:[(0,c.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),f&&(0,c.jsx)("p",{children:f}),(0,c.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),t.current.value!==a.current.value)return h("Passwords do not match");var r=[];Z(!0),h(""),e.current.value!==d.email&&r.push(p(e.current.value)),t.current.value&&r.push(u(t.current.value)),Promise.all(r).then((function(){j("/")})).catch((function(){h("Failed to update account")})).finally((function(){Z(!1)}))},children:[(0,c.jsxs)("div",{id:"email",children:[(0,c.jsx)("label",{children:"Email"}),(0,c.jsx)("input",{type:"email",ref:e,required:!0,defaultValue:d.email})]}),(0,c.jsxs)("div",{id:"password",children:[(0,c.jsx)("label",{children:"Password"}),(0,c.jsx)("input",{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),(0,c.jsxs)("div",{id:"password-confirm",children:[(0,c.jsx)("label",{children:"Password Confirmation"}),(0,c.jsx)("input",{type:"password",ref:a,placeholder:"Leave blank to keep the same"})]}),(0,c.jsx)("button",{disabled:g,className:"w-100",type:"submit",children:"Update"})]})]}),(0,c.jsx)("div",{children:(0,c.jsx)(s.rU,{to:"/",children:"Cancel"})})]})}},3882:function(e,t,a){a.d(t,{H:function(){return d},a:function(){return l}});var n=a(9439),r=a(390),i=a(7513),o=a(4658),s=a(2559),c=(0,r.createContext)();function l(){return(0,r.useContext)(c)}function d(e){var t=e.children,a=(0,r.useState)(),l=(0,n.Z)(a,2),d=l[0],u=l[1],p=(0,r.useState)(!0),m=(0,n.Z)(p,2),v=m[0],f=m[1];(0,r.useEffect)((function(){return i.I.onAuthStateChanged((function(e){u(e),f(!1)}))}),[]);var h={currentUser:d,login:function(e,t){return(0,o.e5)(i.I,e,t)},signup:function(e,t){return(0,o.Xb)(i.I,e,t)},logout:function(){return(0,o.w7)(i.I)},resetPassword:function(e){return(0,o.LS)(i.I,e)},updateEmail:function(e){return d.updateEmail(e)},updatePassword:function(e){return d.updatePassword(e)}};return(0,s.jsx)(c.Provider,{value:h,children:!v&&t})}},7513:function(e,t,a){a.d(t,{I:function(){return o}});var n=a(1355),r=a(4658),i=(0,n.ZF)({apiKey:"AIzaSyDK7dLT2jqVVjquVaFtsv80tuofPpTVwWw",authDomain:"auth-development-85879.firebaseapp.com",projectId:"auth-development-85879",storageBucket:"auth-development-85879.appspot.com",messagingSenderId:"649818716749",appId:"1:649818716749:web:667419298f5065669d3a04"}),o=(0,r.v0)(i)},2198:function(e,t,a){a.d(t,{f:function(){return i}});var n=a(1293),r=a(2254);function i(e){return(0,r.Z)("MuiListItemIcon",e)}var o=(0,n.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=o},3586:function(e,t,a){a.d(t,{L:function(){return i}});var n=a(1293),r=a(2254);function i(e){return(0,r.Z)("MuiListItemText",e)}var o=(0,n.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=o},6911:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(4942),r=a(3366),i=a(7462),o=a(390),s=a(3370),c=a(147),l=a(6128),d=a(4729),u=a(6869),p=a(7308),m=a(7457),v=a(839),f=a(3299),h=a(1293);var x=(0,h.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),b=a(2198),g=a(3586),Z=a(2254);function j(e){return(0,Z.Z)("MuiMenuItem",e)}var y=(0,h.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),w=a(2559),C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],I=(0,d.ZP)(m.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,r=e.ownerState;return(0,i.Z)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!r.disableGutters&&{paddingLeft:16,paddingRight:16},r.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,n.Z)(t,"&.".concat(y.selected),(0,n.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,n.Z)(t,"&.".concat(y.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,n.Z)(t,"&.".concat(y.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,n.Z)(t,"&.".concat(y.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),(0,n.Z)(t,"& + .".concat(x.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),(0,n.Z)(t,"& + .".concat(x.inset),{marginLeft:52}),(0,n.Z)(t,"& .".concat(g.Z.root),{marginTop:0,marginBottom:0}),(0,n.Z)(t,"& .".concat(g.Z.inset),{paddingLeft:36}),(0,n.Z)(t,"& .".concat(b.Z.root),{minWidth:36}),t),!r.dense&&(0,n.Z)({},a.breakpoints.up("sm"),{minHeight:"auto"}),r.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,(0,n.Z)({},"& .".concat(b.Z.root," svg"),{fontSize:"1.25rem"})))})),k=o.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiMenuItem"}),n=a.autoFocus,l=void 0!==n&&n,d=a.component,m=void 0===d?"li":d,h=a.dense,x=void 0!==h&&h,b=a.divider,g=void 0!==b&&b,Z=a.disableGutters,y=void 0!==Z&&Z,k=a.focusVisibleClassName,N=a.role,F=void 0===N?"menuitem":N,P=a.tabIndex,S=a.className,O=(0,r.Z)(a,C),R=o.useContext(p.Z),L=o.useMemo((function(){return{dense:x||R.dense||!1,disableGutters:y}}),[R.dense,x,y]),M=o.useRef(null);(0,v.Z)((function(){l&&M.current&&M.current.focus()}),[l]);var V,T=(0,i.Z)({},a,{dense:L.dense,divider:g,disableGutters:y}),U=function(e){var t=e.disabled,a=e.dense,n=e.divider,r=e.disableGutters,o=e.selected,s=e.classes,l={root:["root",a&&"dense",t&&"disabled",!r&&"gutters",n&&"divider",o&&"selected"]},d=(0,c.Z)(l,j,s);return(0,i.Z)({},s,d)}(a),q=(0,f.Z)(M,t);return a.disabled||(V=void 0!==P?P:-1),(0,w.jsx)(p.Z.Provider,{value:L,children:(0,w.jsx)(I,(0,i.Z)({ref:q,role:F,tabIndex:V,component:m,focusVisibleClassName:(0,s.Z)(U.focusVisible,k),className:(0,s.Z)(U.root,S)},O,{ownerState:T,classes:U}))})}))}}]);
//# sourceMappingURL=452.5606fde7.chunk.js.map