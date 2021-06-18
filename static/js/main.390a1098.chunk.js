(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(19),a=n.n(s),o=n(2),i=(n(25),n(17)),l=n(9),j=n(0),h={dark:!0},d=Object(c.createContext)([h,function(){}]);function b(e){var t=e.children,n=Object(c.useState)([h,function(e){a((function(t){return[Object(i.a)(Object(i.a)({},t[0]),e),t[1]]}))}]),r=Object(l.a)(n,2),s=r[0],a=r[1];return Object(j.jsx)(d.Provider,{value:s,children:t})}var u=n(12),m=n.p+"static/media/moon.5daf971d.svg",O=n.p+"static/media/sun.40900a29.svg";function x(){var e=Object(c.useContext)(d),t=Object(l.a)(e,2),n=t[0].dark,r=t[1],s=Object(c.useState)(n),a=Object(l.a)(s,2),o=a[0],i=a[1];Object(c.useEffect)((function(){var e=document.body.classList;o?e.add("theme-dark"):e.remove("theme-dark")}),[o]);var h=function(e){var t=e.matches;console.log("Dark mode is ".concat(t?"\ud83c\udf12 on":"\u2600 off",".")),i(t),r({dark:t})};return Object(c.useEffect)((function(){return window.matchMedia("(prefers-color-scheme: dark)").addListener(h),function(){window.matchMedia("(prefers-color-scheme: dark)").removeListener(h)}}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",{onClick:function(){i(!o),r({dark:!o})},src:o?O:m,width:"100%",alt:""})})}var f=n(8),g=n.n(f),p=n.p+"static/media/floppy.a644d2bf.png";function w(){var e=Object(c.useContext)(d),t=Object(l.a)(e,1)[0].dark,n=Object(c.useState)(window.scrollY>20),r=Object(l.a)(n,2),s=r[0],a=r[1],o=Object(c.useCallback)((function(){window.scrollY>20?a(!0):a(!1)}),[]);return Object(c.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[o]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:g.a.holder}),Object(j.jsx)("header",{className:[g.a.header,s?g.a.scrolled:"",t?g.a.dark:""].join(" "),children:Object(j.jsxs)("section",{className:g.a.section,children:[Object(j.jsxs)(u.a,{className:g.a.logo,to:"/",children:[Object(j.jsx)("img",{src:p,alt:"LOGO"}),Object(j.jsx)("span",{className:"logo-text",children:"PJ"})]}),Object(j.jsx)("menu",{className:g.a.menu,children:Object(j.jsx)(u.a,{to:"/about",children:"About"})}),Object(j.jsx)("span",{className:g.a.theme,children:Object(j.jsx)(x,{})})]})})]})}function k(){return Object(j.jsx)("footer",{className:g.a.footer,children:Object(j.jsxs)("section",{children:[Object(j.jsxs)("p",{children:["Copyright \xa9 ",(new Date).getFullYear()," by imjeen"]}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:"https://imjeen.github.io/notes/",children:"notes"})})]})})}function v(e){var t=e.children;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{}),t,Object(j.jsx)(k,{})]})}var N=n(7),F=n.n(N),C=[{emoji:"\ud83d\udc33",title:"PersonalPhotoStudio/PhotoStudio",repo:"https://github.com/PersonalPhotoStudio/PhotoStudio",demo:"https://personalphotostudio.github.io/PhotoStudio/"},{emoji:"\u269b\ufe0f",title:"imjeen/rc-tricks",repo:"https://github.com/imjeen/rc-tricks",demo:"https://imjeen.github.io/rc-tricks/"},{emoji:"\ud83d\udcf8",title:"grandFilter/iFilter",repo:"https://github.com/grandFilter/iFilter",demo:"https://grandfilter.github.io/iFilter"},{emoji:"\ud83e\uddec",title:"imjeen/gl",repo:"https://github.com/imjeen/gl",demo:"https://imjeen.github.io/gl/"}],S=[{url:"https://www.notion.so/Certificates-for-localhost-64f4cc03767a45b0a1088a20772d8da4",title:"Certificates for localhost"},{url:"https://www.notion.so/7250645aa4bd4a89bf182611ef036b35",title:"\u6a21\u5757\u5316\u3001\u547d\u540d\u7a7a\u95f4\u4e0e\u7ec4\u4ef6\u5316"},{url:"https://www.notion.so/Git-102c8241af224b1e9eaaa1eb05323830",title:"Git \u63d0\u4ea4\u89c4\u8303\u4e0e\u81ea\u52a8\u5316"},{url:"https://www.notion.so/Promise-Generator-async-await-735d0ee1d50444228fa43ca27fb965b1",title:"Promise, Generator \u548c async/await"},{url:"https://www.notion.so/Docker-CI-CD-15b4c52bb25d440692548247132e31f6",title:"\u4f7f\u7528 Docker \u6784\u5efa CI/CD"}];function P(){var e=Object(c.useContext)(d),t=Object(l.a)(e,1)[0].dark;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("main",{className:["ui-section",F.a.main,t?F.a.dark:""].join(" "),children:[Object(j.jsxs)("aside",{className:F.a.elevator,children:[Object(j.jsx)("h1",{children:"Hey, I'm PJ. "}),Object(j.jsxs)("p",{children:["I'm a beginner of the full stack software developer creating"," ",Object(j.jsx)("a",{href:"https://github.com/imjeen",target:"_blank",rel:"noopener noreferrer",children:"open source"})," ","projects and writing about modern JavaScript / Typescript, Node.js, and Flutter."]})]}),Object(j.jsxs)("header",{className:["theme-card",F.a.card].join(" "),children:[Object(j.jsx)("img",{src:"https://avatars.githubusercontent.com/u/4100582",alt:"SELFIE"}),Object(j.jsx)("h3",{children:"PJ.ONE"}),Object(j.jsx)("p",{children:"I sometimes push the codes. Get an update when something new comes out by following me below!"}),Object(j.jsx)("a",{className:F.a.button,href:"https://github.com/imjeen",target:"_blank",rel:"noreferrer",children:"Github"})]}),Object(j.jsxs)("section",{className:F.a.latest,children:[Object(j.jsx)("h2",{children:"Latest Open Source"}),C.map((function(e,t){var n=e.emoji,c=e.title,r=e.repo,s=e.demo;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:F.a.nav,children:[Object(j.jsxs)("h3",{children:[n,Object(j.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:c})]}),Object(j.jsx)("strong",{className:F.a.new,children:Object(j.jsx)("a",{className:F.a.button,href:s,target:"_blank",rel:"noreferrer",children:"Demo"})})]},t.toString())})}))]}),Object(j.jsxs)("section",{className:F.a.notions,children:[Object(j.jsx)("h2",{children:"Articles"}),S.map((function(e,t){var n=e.url,c=e.title;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{children:[Object(j.jsx)("h3",{children:Object(j.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:c})}),Object(j.jsx)("strong",{className:F.a.new})]},t.toString())})}))]})]})})}function y(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("section",{className:"ui-section",children:[Object(j.jsx)("h2",{children:"Know the Unknown"}),Object(j.jsxs)("blockquote",{children:[Object(j.jsx)("p",{children:"There are known knowns. These are things we know that we know. There are known unknowns. That is to say, there are things that we know we don't know. But there are also unknown unknowns. There are things we don't know we don't know."}),Object(j.jsx)("p",{children:"-- Donald Rumsfeld"})]})]})})}function L(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("section",{className:"ui-section",children:"404"})})}var E=n(4),D=Object(E.a)();var I=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(b,{children:Object(j.jsx)(o.b,{history:D,children:Object(j.jsx)(o.c,{children:Object(j.jsxs)(v,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,children:Object(j.jsx)(P,{})}),Object(j.jsx)(o.a,{path:"/about",exact:!0,children:Object(j.jsx)(y,{})}),Object(j.jsx)(o.a,{path:"/404",children:Object(j.jsx)(L,{})})]})})})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),T()},7:function(e,t,n){e.exports={main:"main--3-X_L",dark:"dark--juqya",card:"card--1blo5",elevator:"elevator--1-Xs1",button:"button--dzeLb",notions:"notions--1u6Kt",latest:"latest--2ZNU6",nav:"nav--8F6L5"}},8:function(e,t,n){e.exports={holder:"holder--36xea",header:"header--k3ona",dark:"dark--cMNc-",menu:"menu--dvm58",scrolled:"scrolled--3HS3f",section:"section--3f1Ef",logo:"logo--2b_Ls","is-active":"is-active--2JIYh",theme:"theme--2ye4h",footer:"footer--1l8dg"}}},[[32,1,2]]]);
//# sourceMappingURL=main.390a1098.chunk.js.map