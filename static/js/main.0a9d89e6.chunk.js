(this.webpackJsonpprojekt2=this.webpackJsonpprojekt2||[]).push([[0],{14:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(9),i=c.n(a),j=c(3),l=(c(14),c(0)),r=function(e){var t=e.setModalVisible,c=function(e){t(e)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tile first",onClick:function(){return c(1)},children:Object(l.jsx)("span",{className:"capsules",children:"Capsules"})}),Object(l.jsx)("div",{className:"tile second",onClick:function(){return c(2)},children:Object(l.jsx)("span",{className:"crew",children:"Crew"})}),Object(l.jsx)("div",{className:"tile third",onClick:function(){return c(3)},children:Object(l.jsx)("span",{className:"rockets",children:"Rockets"})}),Object(l.jsx)("div",{className:"tile fourth",onClick:function(){return c(4)},children:Object(l.jsx)("span",{className:"starlink",children:"Starlink"})})]})},o=c(4),b=c(5),O=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(j.a)(a,2),r=i[0],O=i[1],d=Object(s.useState)([]),u=Object(j.a)(d,2),m=u[0],x=u[1],h=Object(s.useState)(0),p=Object(j.a)(h,2),f=p[0],N=p[1];Object(s.useEffect)((function(){n(!0),fetch("https://api.spacexdata.com/v4/capsules").then((function(e){return e.json()})).then((function(e){x(e.map((function(e){return{type:e.type,status:e.status}}))),n(!1)})).catch((function(e){n(!1),O("Failed to API connection")}))}),[]);return Object(l.jsxs)("div",{className:"modalView",children:[Object(l.jsx)("span",{className:"modalTitle",children:"Capsules"}),c&&Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)(o.a,{icon:b.c,spin:!0})}),r&&Object(l.jsx)("div",{className:"error",children:r}),!c&&!r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{className:"nav",children:[Object(l.jsxs)("span",{className:"dataTitle",onClick:function(){0===f||1===f?(m.sort((function(e,t){return e.type>t.type?1:-1})),N(-1)):(m.sort((function(e,t){return e.type>t.type?-1:1})),N(1))},children:[Object(l.jsx)("span",{children:"Type"}),0===f&&Object(l.jsxs)("span",{className:"sortStatus arrowsHide",children:[Object(l.jsx)(o.a,{icon:b.b}),Object(l.jsx)(o.a,{icon:b.a})]}),1===f&&Object(l.jsx)("span",{className:"sortStatus",children:Object(l.jsx)(o.a,{icon:b.b})}),-1===f&&Object(l.jsx)("span",{className:"sortStatus",children:Object(l.jsx)(o.a,{icon:b.a})})]}),Object(l.jsx)("span",{children:"Status"})]})}),Object(l.jsx)("ul",{className:"scroll",children:m.map((function(e,t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:e.type}),Object(l.jsx)("span",{children:e.status})]},t)}))}),Object(l.jsx)("div",{className:"liBlur"})]})]})},d=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(j.a)(a,2),r=i[0],O=i[1],d=Object(s.useState)([]),u=Object(j.a)(d,2),m=u[0],x=u[1],h=Object(s.useState)(0),p=Object(j.a)(h,2),f=p[0],N=p[1];Object(s.useEffect)((function(){n(!0),fetch("https://api.spacexdata.com/v4/crew").then((function(e){return e.json()})).then((function(e){x(e.map((function(e){return{name:e.name,status:e.status}}))),n(!1)})).catch((function(e){n(!1),O("Failed to API connection")}))}),[]);return Object(l.jsxs)("div",{className:"modalView",children:[Object(l.jsx)("span",{className:"modalTitle",children:"Crew"}),c&&Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)(o.a,{icon:b.c,spin:!0})}),r&&Object(l.jsx)("div",{children:r}),!c&&!r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{className:"nav",children:[Object(l.jsxs)("span",{className:"dataTitle",onClick:function(){0===f||1===f?(m.sort((function(e,t){return e.name>t.name?1:-1})),N(-1)):(m.sort((function(e,t){return e.name>t.name?-1:1})),N(1))},children:[Object(l.jsx)("span",{children:"Name"}),0===f&&Object(l.jsxs)("span",{className:"sortStatus arrowsHide",children:[Object(l.jsx)(o.a,{icon:b.b}),Object(l.jsx)(o.a,{icon:b.a})]}),1===f&&Object(l.jsx)("span",{className:"sortStatus",children:Object(l.jsx)(o.a,{icon:b.b})}),-1===f&&Object(l.jsx)("span",{className:"sortStatus",children:Object(l.jsx)(o.a,{icon:b.a})})]}),Object(l.jsx)("span",{children:"Status"})]})}),Object(l.jsx)("ul",{className:"scroll",children:m.map((function(e,t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:e.name}),Object(l.jsx)("span",{children:e.status})]},t)}))}),Object(l.jsx)("div",{className:"liBlur"})]})]})},u=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(j.a)(a,2),r=i[0],O=i[1],d=Object(s.useState)([]),u=Object(j.a)(d,2),m=u[0],x=u[1],h=Object(s.useState)(0),p=Object(j.a)(h,2),f=p[0],N=p[1];Object(s.useEffect)((function(){n(!0),fetch("https://api.spacexdata.com/v4/rockets").then((function(e){return e.json()})).then((function(e){x(e.map((function(e){return{name:e.name,company:e.company}}))),n(!1)})).catch((function(e){n(!1),O("Failed to API connection")}))}),[]);return Object(l.jsxs)("div",{className:"modalView",children:[Object(l.jsx)("span",{className:"modalTitle",children:"Rockets"}),c&&Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)(o.a,{icon:b.c,spin:!0})}),r&&Object(l.jsx)("div",{children:r}),!c&&!r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{className:"nav",children:[Object(l.jsxs)("span",{className:"dataTitle",onClick:function(){0===f||1===f?(m.sort((function(e,t){return e.name>t.name?1:-1})),N(-1)):(m.sort((function(e,t){return e.name>t.name?-1:1})),N(1))},children:[Object(l.jsx)("span",{children:"Name"}),0===f&&Object(l.jsxs)("span",{className:"sortStatus arrowsHide",children:[Object(l.jsx)(o.a,{icon:b.b}),Object(l.jsx)(o.a,{icon:b.a})]}),1===f&&Object(l.jsx)("span",{className:"sortStatus",children:Object(l.jsx)(o.a,{icon:b.b})}),-1===f&&Object(l.jsx)("span",{className:"sortStatus",children:Object(l.jsx)(o.a,{icon:b.a})})]}),Object(l.jsx)("span",{children:"Company"})]})}),Object(l.jsx)("ul",{className:"scroll",children:m.map((function(e,t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:e.name}),Object(l.jsx)("span",{children:e.company})]},t)}))}),Object(l.jsx)("div",{className:"liBlur"})]})]})},m=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),i=Object(j.a)(a,2),r=i[0],O=i[1],d=Object(s.useState)([]),u=Object(j.a)(d,2),m=u[0],x=u[1],h=Object(s.useState)(0),p=Object(j.a)(h,2),f=p[0],N=p[1];Object(s.useEffect)((function(){n(!0),fetch("https://api.spacexdata.com/v4/starlink").then((function(e){return e.json()})).then((function(e){x(e.map((function(e){return{name:e.spaceTrack.OBJECT_NAME,version:e.version}}))),n(!1)})).catch((function(e){n(!1),O("Failed to API connection")}))}),[]);return Object(l.jsxs)("div",{className:"modalView",children:[Object(l.jsx)("span",{className:"modalTitle",children:"Starlink"}),c&&Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)(o.a,{icon:b.c,spin:!0})}),r&&Object(l.jsx)("div",{children:r}),!c&&!r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{className:"nav",children:[Object(l.jsxs)("span",{className:"dataTitle",onClick:function(){0===f||1===f?(m.sort((function(e,t){return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:"base"})})),N(-1)):(m.sort((function(e,t){return t.name.localeCompare(e.name,void 0,{numeric:!0,sensitivity:"base"})})),N(1))},children:[Object(l.jsx)("span",{children:"Name"}),0===f&&Object(l.jsxs)("span",{className:"sortStatus arrowsHide",children:[Object(l.jsx)(o.a,{icon:b.b}),Object(l.jsx)(o.a,{icon:b.a})]}),1===f&&Object(l.jsx)("span",{className:"sortStatus",children:Object(l.jsx)(o.a,{icon:b.b})}),-1===f&&Object(l.jsx)("span",{className:"sortStatus",children:Object(l.jsx)(o.a,{icon:b.a})})]}),Object(l.jsx)("span",{children:"Version"})]})}),Object(l.jsx)("ul",{className:"scroll",children:m.map((function(e,t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{children:e.name}),Object(l.jsx)("span",{children:e.version})]},t)}))}),Object(l.jsx)("div",{className:"liBlur"})]})]})},x=function(e){var t=e.modalVisible,c=e.setModalVisible;return Object(l.jsxs)("div",{className:"modal",children:[Object(l.jsx)("button",{className:"closeModal",onClick:function(){return c(!1)}}),1===t&&Object(l.jsx)(O,{}),2===t&&Object(l.jsx)(d,{}),3===t&&Object(l.jsx)(u,{}),4===t&&Object(l.jsx)(m,{})]})};var h=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(0),i=Object(j.a)(a,2),o=i[0],b=i[1],O=Object(s.useState)(0),d=Object(j.a)(O,2),u=d[0],m=d[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"title",children:[" ",Object(l.jsx)("span",{className:"titleVector1"})," ",Object(l.jsx)("span",{className:"titleVector2"})]}),Object(l.jsxs)("div",{className:"leftPage",children:[Object(l.jsx)(r,{setModalVisible:n}),!1!==c&&Object(l.jsx)(x,{modalVisible:c,setModalVisible:n})]}),Object(l.jsxs)("div",{className:"rightPage",children:[Object(l.jsx)("div",{className:u?"cloudLeft anim2":"cloudLeft",onAnimationEnd:function(){return m(0)}}),Object(l.jsx)("div",{className:o?"rocket anim":"rocket",onAnimationEnd:function(){return b(0)}}),Object(l.jsx)("div",{className:"landing"}),Object(l.jsx)("div",{className:u?"cloudRight anim2":"cloudRight",onAnimationEnd:function(){return m(0)}}),Object(l.jsx)("div",{className:"planet"}),Object(l.jsx)("button",{className:"startRocket",onClick:function(){b(1),m(1)},children:"Lunch rocket"})]}),Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("span",{className:"leftFooter",children:"Copyright \xa9 Usertive & SpaceX API"}),Object(l.jsx)("span",{className:"rightFooter",children:"Summer 2021 "})]})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0a9d89e6.chunk.js.map