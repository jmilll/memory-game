(this["webpackJsonpmy-first-react-app"]=this["webpackJsonpmy-first-react-app"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),r=a(7),s=a.n(r),n=a(5),l=a(2),o=(a(12),a.p+"static/media/Ajani-Valiant-Protector.3bc3c1b3.jpg"),d=a.p+"static/media/Ajani-Mentor-of-Heroes.5411c40f.jpg",j=a.p+"static/media/Ajani-Goldmane.a4adb2be.jpg",u=a.p+"static/media/Ashiok-Nightmare-Muse.93ed0ac5.jpg",b=a.p+"static/media/Ashiok-Nightmare-Weaver.97cbf5a3.jpg",h=a.p+"static/media/Ashiok-Dream-Render.d539a604.jpg",m=a.p+"static/media/Chandra-Ablaze.3b76aeab.jpg",p=a.p+"static/media/Chandra-Torch-of-Defiance.c747a3cc.jpg",f=a.p+"static/media/Chandra-Pyromaster.82a1cfde.jpg",O=a.p+"static/media/Garruk-Apex-Predator.837ec51b.jpg",g=a.p+"static/media/Garruk-the-Veil-Cursed.94ac16e3.jpg",k=a.p+"static/media/Garruk-Relentless.8288cd69.jpg",x=a.p+"static/media/Jace-Wielder-of-Mysteries.6316f896.jpg",v=a.p+"static/media/Jace-the-Living-Guildpact.31479484.jpg",A=a.p+"static/media/Jace-Beleren.791dedc4.jpg",S=a.p+"static/media/Liliana-Death-Mage.66669396.jpg",N=a.p+"static/media/Liliana-the-Necromancer.503d2584.jpg",y=a.p+"static/media/Liliana-Dreadhorde-General.bf30253f.jpg",C=a(0),M=function(e){var t=e.score,a=e.checkMemory,c=e.difficulty,r=[{id:1,src:u,title:"Ashiok, Nightmare Muse",artist:"Raymond Swanland"},{id:2,src:m,title:"Chandra Ablaze",artist:"Steve Argyle"},{id:3,src:O,title:"Garruk, Apex Predator",artist:"Tyler Jacobson"},{id:4,src:x,title:"Jace, Wielder of Mysteries",artist:"Anna Steinbauer"},{id:5,src:S,title:"Liliana, Death Mage",artist:"Kieran Yanner"},{id:6,src:o,title:"Ajani, Valiant Protector",artist:"Anna Steinbauer"}],s=[{id:7,src:b,title:"Ashiok, Nightmare Weaver",artist:"Karla Ortiz"},{id:8,src:p,title:"Chandra, Torch of Defiance",artist:"Magali Villeneuve"},{id:9,src:g,title:"Garruk, the Veil-Cursed",artist:"Grzegorz Rutkowski"},{id:10,src:v,title:"Jace, the Living Guildpact ",artist:"Chase Stone"},{id:11,src:N,title:"Liliana, the Necromancer",artist:"Livia Prima"},{id:12,src:d,title:"Ajani, Mentor of Heroes",artist:"Aaron Miller"}],M=[{id:13,src:h,title:"Ashiok, Dream Render",artist:"Cynthia Sheppard"},{id:14,src:f,title:"Chandra, Pyromaster",artist:"Winona Nelson"},{id:15,src:k,title:"Garruk Relentless",artist:"Eric Deschamps"},{id:16,src:A,title:"Jace Beleren",artist:"Aleksi Briclot"},{id:17,src:y,title:"Liliana, Dreadhorde General",artist:"Chris Rallis"},{id:18,src:j,title:"Ajani Goldmane",artist:"Aleksi Briclot"}],G=Object(i.useState)([]),L=Object(l.a)(G,2),D=L[0],J=L[1],E=[].concat(r),P=[].concat(r,s),R=[].concat(r,s,M);return Object(i.useEffect)((function(){var e=Object(n.a)(D);!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}}(e),J(e)}),[t]),Object(i.useEffect)((function(){return J(1===c?E:2===c?P:R),function(){}}),[c]),Object(C.jsx)("section",{className:"card-container",children:D.map((function(e){return Object(C.jsxs)("div",{className:"card"+c,id:e.title,onClick:a.bind(undefined,e.title),children:[Object(C.jsx)("h2",{children:e.title}),Object(C.jsx)("img",{src:e.src,alt:e.title}),Object(C.jsxs)("p",{className:"artist",children:["Artist: ",e.artist]})]},e.title)}))})},G=function(e){var t=e.score,a=e.lastScore,i=e.hiScore,c=e.perfectScore;return Object(C.jsxs)("section",{className:"header",children:[Object(C.jsx)("h1",{children:"Magic Memory Game "}),Object(C.jsxs)("div",{className:"scoreboard",children:[Object(C.jsx)("p",{className:"instructions",children:"Get points for choosing a card, but don't click on the same card more than once! Cards randomize afer each click"}),Object(C.jsxs)("div",{className:"personal-score",children:[Object(C.jsxs)("p",{children:["Current Streak: ",t]}),Object(C.jsxs)("p",{children:["Last Streak: ",a]}),Object(C.jsxs)("p",{children:["High Score: ",i]})]}),Object(C.jsxs)("p",{className:"perfect-score",children:["Perfect score for this difficulty: ",c," "]})]})]})},L=void 0,D=function(){var e=Object(i.useState)(0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(i.useState)(0),s=Object(l.a)(r,2),o=s[0],d=s[1],j=Object(i.useState)(0),u=Object(l.a)(j,2),b=u[0],h=u[1],m=Object(i.useState)([]),p=Object(l.a)(m,2),f=p[0],O=p[1],g=Object(i.useState)(1),k=Object(l.a)(g,2),x=k[0],v=k[1],A=Object(i.useState)(6),S=Object(l.a)(A,2),N=S[0],y=S[1],D=function(){c(0),O([])},J=function(e){var t=Number(e.target.value);v(t),E(),e.target.classList.add("selected")},E=function(){document.querySelectorAll(".btn").forEach((function(e){e.classList.remove("selected")}))};return Object(i.useEffect)((function(){y(1==x?6:2==x?12:18),c(0),O([]),h(0),d(0)}),[x]),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(G,{score:a,lastScore:o,hiScore:b,perfectScore:N}),Object(C.jsxs)("div",{className:"difficulty-container",children:[Object(C.jsx)("button",{className:"btn selected",value:"1",onClick:J.bind(L),children:"Easy"}),Object(C.jsx)("button",{className:"btn",value:"2",onClick:J.bind(L),children:"Medium"}),Object(C.jsx)("button",{className:"btn",value:"3",onClick:J.bind(L),children:"Hard"}),Object(C.jsx)("button",{className:"btn extreme",value:"4",onClick:J.bind(L),children:"Extreme"})]}),Object(C.jsx)(M,{score:a,checkMemory:function(e){f.includes(e)?(console.log("lose"),d(a),a>b?h(a):D(),D()):(console.log("keep going"),function(e){O((function(t){return[].concat(Object(n.a)(t),[e])}))}(e),console.log(a),c((function(e){return e+1})))},difficulty:x})]})};s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(D,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7ad9dc20.chunk.js.map