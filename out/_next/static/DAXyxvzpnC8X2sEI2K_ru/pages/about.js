(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Juyh:function(t,n,r){"use strict";r.r(n);var e=r("ln6h"),o=r.n(e);var u=r("hfKm"),a=r.n(u);function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),a()(t,e.key,e)}}var s=r("XVgq"),c=r.n(s),f=r("Z7t5"),l=r.n(f);function p(t){return(p="function"===typeof l.a&&"symbol"===typeof c.a?function(t){return typeof t}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":typeof t})(t)}function h(t){return(h="function"===typeof l.a&&"symbol"===p(c.a)?function(t){return p(t)}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":p(t)})(t)}function y(t,n){return!n||"object"!==h(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var b=r("Bhuq"),d=r.n(b),v=r("TRZx"),w=r.n(v);function _(t){return(_=w.a?d.a:function(t){return t.__proto__||d()(t)})(t)}var m=r("SqZg"),g=r.n(m);function x(t,n){return(x=w.a||function(t,n){return t.__proto__=n,t})(t,n)}var C=r("q1tI"),E=r.n(C),T=r("5Yp1"),k=r("vcXL"),q=r.n(k),S=r("Y0NT");r.d(n,"default",(function(){return J}));var X=E.a.createElement,J=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),y(this,_(n).apply(this,arguments))}var r,e,u;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=g()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&x(t,n)}(n,t),r=n,u=[{key:"getInitialProps",value:function(){var t,n,r;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(q()("https://api.github.com/users/suhasalahuddin"));case 2:return t=e.sent,n=t.status>200&&t.status,e.next=6,o.a.awrap(t.json());case 6:return r=e.sent,e.abrupt("return",{user:r,statusCode:n});case 8:case"end":return e.stop()}}))}}],(e=[{key:"render",value:function(){var t=this.props,n=t.user,r=t.statusCode;return r?X(S.default,{statusCode:r}):X(T.a,{title:"About"},X("br",null),X("br",null),X("p",null,n.name),X("p",null,n.bio),X("br",null),X("br",null),X("img",{src:n.avatar_url,alt:"Suha",height:"200px"}))}}])&&i(r.prototype,e),u&&i(r,u),n}(C.Component)},Y0NT:function(t,n,r){"use strict";r.r(n);var e=r("q1tI"),o=r.n(e),u=r("5Yp1"),a=o.a.createElement;n.default=function(t){var n=t.statusCode;return a(u.a,{title:"Error!!"},n?"Could not load your user data: Status Code ".concat(n):"Couldn't get the page, Sorry!")}},rB5V:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r("Juyh")}])},vcXL:function(t,n,r){"use strict";var e=self.fetch.bind(self);t.exports=e,t.exports.default=t.exports}},[["rB5V",0,1]]]);