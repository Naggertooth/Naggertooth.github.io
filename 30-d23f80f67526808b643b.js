(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{360:function(e,a,t){"use strict";var n=t(1),r=t.n(n),s=t(6),u=t.n(s),c=t(70),l=t.n(c);t.d(a,"a",function(){return l.a}),t.d(a,"b",function(){return c.navigate});t(363),r.a.createContext({});u.a.object,u.a.string.isRequired,u.a.func,u.a.func},363:function(e,a,t){var n;e.exports=(n=t(369))&&n.default||n},369:function(e,a,t){"use strict";t.r(a);t(31);var n=t(1),r=t.n(n),s=t(6),u=t.n(s),c=t(97),l=t(8),o=function(e){var a=e.location,t=l.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};o.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},a.default=o},639:function(e,a,t){e.exports=t.p+"static/logoLogin-394df71382dbe5500df77e14920341d4.svg"},654:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(54),u=t(360),c=t(39),l=t.n(c),o=t(108),i=t(52),m=t(10),f=t(639),p=t.n(f),d=t(353),b=t.n(d);l.a.defaults.withCredentials=!0;var v=i.a.constants.links.linksPaths;var E=Object(s.b)(null,function(e){return{authMe:function(a,t){return e(m.a.default.askAuth({username:a,password:t}))}}})(function(e){var a=e.authMe,t=Object(n.useRef)(null),s=Object(n.useRef)(null),c=Object(n.useState)(!1),l=c[0],i=c[1];return Object(n.useEffect)(function(){var e=setTimeout(function(){i(!1)},1e4);return function(){clearTimeout(e)}},[l]),l?r.a.createElement(o.a,null):r.a.createElement("div",{className:b.a.layout},r.a.createElement("header",{className:b.a.header},r.a.createElement(u.a,{to:v.root},r.a.createElement("img",{src:p.a,alt:"logo"}))),r.a.createElement("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),a(t.current.value,s.current.value),i(!0)}},r.a.createElement("label",{className:b.a.form__label},r.a.createElement("span",null,"Логин"),r.a.createElement("input",{className:b.a.form__input,type:"text",name:"login",id:"login",ref:t})),r.a.createElement("label",{className:b.a.form__label},r.a.createElement("span",null,"Пароль"),r.a.createElement("input",{className:b.a.form__input,type:"password",name:"password",id:"password",ref:s})),r.a.createElement("button",{className:b.a.form__button,type:"submit"},"Войти")))});a.default=E}}]);
//# sourceMappingURL=30-d23f80f67526808b643b.js.map