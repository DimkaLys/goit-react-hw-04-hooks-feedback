(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(4),a=c.n(r),i=(c(9),c(10),c(2)),j=(c(11),c(15)),b=c(0);function o(e){var t=e.options,c=e.onLeaveFeedback;return Object(b.jsx)("div",{children:Object.keys(t).map((function(e){return Object(b.jsx)("button",{type:"button",name:e,onClick:c,children:e},Object(j.a)())}))})}function d(e){var t=e.message;return Object(b.jsx)("h2",{children:t})}function l(e){var t=e.title,c=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:t}),c]})}function u(e){var t=e.good,c=e.neutral,n=e.bad,s=e.total,r=e.positivePercentage;return Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Good:"}),Object(b.jsx)("span",{children:t})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Neutral:"}),Object(b.jsx)("span",{children:c})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Bad:"}),Object(b.jsx)("span",{children:n})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Total:"}),Object(b.jsx)("span",{children:s})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Positive feedback:"}),Object(b.jsx)("span",{children:0===s?Object(b.jsx)("span",{children:"0%"}):Object(b.jsx)("span",{children:r})})]})]})}function h(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(0),a=Object(i.a)(r,2),j=a[0],h=a[1],O=Object(n.useState)(0),x=Object(i.a)(O,2),p=x[0],f=x[1],k=function(){return c+j+p};return Object(b.jsxs)("div",{children:[Object(b.jsx)(l,{title:"Please leave feedback",children:Object(b.jsx)(o,{options:{good:c,neutral:j,bad:p},onLeaveFeedback:function(e){switch(e.target.name){case"good":s((function(e){return e+1}));break;case"neutral":h((function(e){return e+1}));break;case"bad":f((function(e){return e+1}));break;default:return}}})}),Object(b.jsx)(l,{title:"Statistics",children:0===k()?Object(b.jsx)(d,{message:"No feedback given"}):Object(b.jsx)(u,{good:c,neutral:j,bad:p,total:k(),positivePercentage:Math.round(c/k()*100)+"%"})})]})}a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.573baebb.chunk.js.map