(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(7),o=c.n(a),s=c(6),u=c(2),i=(c(12),c(1)),f=function(e){var t=e.type,c=e.children;return Object(i.jsxs)("div",{className:"cell cell--".concat(t),children:[c," "]})},j=(c(14),function(e){return Math.floor(Math.random()*Math.floor(e))}),l=localStorage.getItem("best"),b=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(Number(l)),o=Object(u.a)(a,2),b=o[0],O=o[1],d=Object(n.useState)({"0:0":!0,"0:1":!0,"0:2":!0}),h=Object(u.a)(d,2),p=h[0],m=h[1],g=Object(n.useState)("right"),v=Object(u.a)(g,2),y=v[0],w=v[1],x=Object(n.useState)(["0:0","0:1","0:2"]),S=Object(u.a)(x,2),k=S[0],N=S[1],E=Object(n.useState)("5:5"),A=Object(u.a)(E,2),I=A[0],M=A[1],B=Object(n.useState)(!1),J=Object(u.a)(B,2),C=J[0],D=J[1],L=[];Object(n.useEffect)((function(){setInterval((function(){r((function(e){return e+1}))}),200),document.onkeydown=function(e){"ArrowRight"===e.key?w((function(e){return"left"===e?"left":"right"})):"ArrowLeft"===e.key?w((function(e){return"right"===e?"right":"left"})):"ArrowUp"===e.key?w((function(e){return"down"===e?"down":"up"})):"ArrowDown"===e.key&&w((function(e){return"up"===e?"up":"down"}))}}),[]);Object(n.useEffect)((function(){if(!C){var e=k[k.length-1].split(":"),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Number(c),a=Number(n);if("up"===y?r--:"down"===y?r++:"right"===y?a++:"left"===y&&a--,r<0||r>=10||a<0||a>=10)D(!0);else{var o="".concat(r,":").concat(a);if(o===I){N([].concat(Object(s.a)(k),[o]));for(var i=null;!i;){var f=j(10),l=j(10);p["".concat(l,":").concat(f)]||(i="".concat(l,":").concat(f))}M(i)}else p[o]?D(!0):N([].concat(Object(s.a)(k.slice(1)),[o]))}}}),[c]),Object(n.useEffect)((function(){var e,t={};k.forEach((function(e){t[e]=!0})),m(t),k.length>b&&(e=k.length,localStorage.setItem("best",String(e)),O(e))}),[k]);for(var R=0;R<10;R++){for(var U=[],q=0;q<10;q++){var z="empty",F="".concat(R,":").concat(q);p[F]?z=C?"dead-snake":"snake":F===I&&(z="food"),"food"===z?U.push(Object(i.jsx)(f,{type:"empty",children:Object(i.jsx)(f,{type:"food"},F)},F)):U.push(Object(i.jsx)(f,{type:z},F))}L.push(Object(i.jsx)("div",{className:"row",children:U},R))}return Object(i.jsxs)("section",{className:"page",children:[Object(i.jsxs)("span",{className:"score",children:["Current score: ",k.length]}),Object(i.jsxs)("span",{className:"score",children:["Best score: ",b]}),Object(i.jsx)("div",{className:"field",children:L})]})};c(15);o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7e65b32d.chunk.js.map