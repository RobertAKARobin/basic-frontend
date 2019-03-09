!function(){"use strict";function e(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,events:void 0,instance:void 0}}e.normalize=function(t){return Array.isArray(t)?e("[",void 0,void 0,e.normalizeChildren(t),void 0,void 0):null!=t&&"object"!=typeof t?e("#",void 0,void 0,!1===t?"":t,void 0,void 0):t},e.normalizeChildren=function(t){for(var n=[],r=0;r<t.length;r++)n[r]=e.normalize(t[r]);return n};var t=function(){var t,n=arguments[this],r=this+1;if(null==n?n={}:("object"!=typeof n||null!=n.tag||Array.isArray(n))&&(n={},r=this),arguments.length===r+1)t=arguments[r],Array.isArray(t)||(t=[t]);else for(t=[];r<arguments.length;)t.push(arguments[r++]);return e("",n.key,n,t)},n=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,r={},o={}.hasOwnProperty;function i(e){for(var t in e)if(o.call(e,t))return!1;return!0}function l(l){if(null==l||"string"!=typeof l&&"function"!=typeof l&&"function"!=typeof l.view)throw Error("The selector must be either a string or a component.");var a=t.apply(1,arguments);return"string"==typeof l&&(a.children=e.normalizeChildren(a.children),"["!==l)?function(t,n){var r=n.attrs,l=e.normalizeChildren(n.children),a=o.call(r,"class"),u=a?r.class:r.className;if(n.tag=t.tag,n.attrs=null,n.children=void 0,!i(t.attrs)&&!i(r)){var f={};for(var s in r)o.call(r,s)&&(f[s]=r[s]);r=f}for(var s in t.attrs)o.call(t.attrs,s)&&"className"!==s&&!o.call(r,s)&&(r[s]=t.attrs[s]);for(var s in null==u&&null==t.attrs.className||(r.className=null!=u?null!=t.attrs.className?String(t.attrs.className)+" "+String(u):u:null!=t.attrs.className?t.attrs.className:null),a&&(r.class=null),r)if(o.call(r,s)&&"key"!==s){n.attrs=r;break}return Array.isArray(l)&&1===l.length&&null!=l[0]&&"#"===l[0].tag?n.text=l[0].children:n.children=l,n}(r[l]||function(e){for(var t,o="div",i=[],l={};t=n.exec(e);){var a=t[1],u=t[2];if(""===a&&""!==u)o=u;else if("#"===a)l.id=u;else if("."===a)i.push(u);else if("["===t[3][0]){var f=t[6];f&&(f=f.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?i.push(f):l[t[4]]=""===f?f:f||!0}}return i.length>0&&(l.className=i.join(" ")),r[e]={tag:o,attrs:l}}(l),a):(a.tag=l,a)}l.trust=function(t){return null==t&&(t=""),e("<",void 0,void 0,t,void 0,void 0)},l.fragment=function(){var n=t.apply(0,arguments);return n.tag="[",n.children=e.normalizeChildren(n.children),n};var a=function(){return l.apply(this,arguments)};if(a.m=l,a.trust=l.trust,a.fragment=l.fragment,(u=function(e){if(!(this instanceof u))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var t=this,n=[],r=[],o=f(n,!0),i=f(r,!1),l=t._instance={resolvers:n,rejectors:r},a="function"==typeof setImmediate?setImmediate:setTimeout;function f(e,o){return function u(f){var c;try{if(!o||null==f||"object"!=typeof f&&"function"!=typeof f||"function"!=typeof(c=f.then))a(function(){o||0!==e.length||console.error("Possible unhandled promise rejection:",f);for(var t=0;t<e.length;t++)e[t](f);n.length=0,r.length=0,l.state=o,l.retry=function(){u(f)}});else{if(f===t)throw new TypeError("Promise can't be resolved w/ itself");s(c.bind(f))}}catch(e){i(e)}}}function s(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(i);try{e(n(o),r)}catch(e){r(e)}}s(e)}).prototype.then=function(e,t){var n,r,o=this._instance;function i(e,t,i,l){t.push(function(t){if("function"!=typeof e)i(t);else try{n(e(t))}catch(e){r&&r(e)}}),"function"==typeof o.retry&&l===o.state&&o.retry()}var l=new u(function(e,t){n=e,r=t});return i(e,o.resolvers,n,!0),i(t,o.rejectors,r,!1),l},u.prototype.catch=function(e){return this.then(null,e)},u.prototype.finally=function(e){return this.then(function(t){return u.resolve(e()).then(function(){return t})},function(t){return u.resolve(e()).then(function(){return u.reject(t)})})},u.resolve=function(e){return e instanceof u?e:new u(function(t){t(e)})},u.reject=function(e){return new u(function(t,n){n(e)})},u.all=function(e){return new u(function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var l=0;l<e.length;l++)!function(l){function a(e){o++,i[l]=e,o===r&&t(i)}null==e[l]||"object"!=typeof e[l]&&"function"!=typeof e[l]||"function"!=typeof e[l].then?a(e[l]):e[l].then(a,n)}(l)})},u.race=function(e){return new u(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},"undefined"!=typeof window){void 0===window.Promise?window.Promise=u:window.Promise.prototype.finally||(window.Promise.prototype.finally=u.prototype.finally);var u=window.Promise}else if("undefined"!=typeof global){void 0===global.Promise?global.Promise=u:global.Promise.prototype.finally||(global.Promise.prototype.finally=u.prototype.finally);u=global.Promise}var f=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}},s=function(e,t){var n,r=0;function o(e){return function(r,o){"string"!=typeof r?(o=r,r=r.url):null==o&&(o={});var i=new t(function(t,n){e(r,o,function(e){if("function"==typeof o.type)if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]=new o.type(e[n]);else e=new o.type(e);t(e)},n)});if(!0===o.background)return i;var l=0;function a(){0==--l&&"function"==typeof n&&n()}return function e(t){var n=t.then;return t.then=function(){l++;var r=n.apply(t,arguments);return r.then(a,function(e){if(a(),0===l)throw e}),e(r)},t}(i)}}function i(e,t){for(var n in e.headers)if({}.hasOwnProperty.call(e.headers,n)&&t.test(n))return!0;return!1}function l(e,t,n){if(null==t)return e;if(e=e.replace(/:([^\/]+)/gi,function(e,n){return null!=t[n]?t[n]:e}),n&&null!=t){var r=f(t);r&&(e+=(e.indexOf("?")<0?"?":"&")+r)}return e}return{request:o(function(t,n,r,o){var a=null!=n.method?n.method.toUpperCase():"GET",u="GET"!==a&&"TRACE"!==a&&("boolean"!=typeof n.useBody||n.useBody),f=n.data,s=!(null!=n.serialize&&n.serialize!==JSON.serialize||f instanceof e.FormData);u&&("function"==typeof n.serialize?f=n.serialize(f):f instanceof e.FormData||(f=JSON.stringify(f)));var c=new e.XMLHttpRequest,d=!1,v=c.abort;for(var h in c.abort=function(){d=!0,v.call(c)},c.open(a,l(t,n.data,!u),"boolean"!=typeof n.async||n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),s&&u&&!i(n,/^content-type0$/i)&&c.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||i(n,/^accept$/i)||c.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(c.withCredentials=n.withCredentials),n.timeout&&(c.timeout=n.timeout),n.responseType&&(c.responseType=n.responseType),n.headers)({}).hasOwnProperty.call(n.headers,h)&&c.setRequestHeader(h,n.headers[h]);"function"==typeof n.config&&(c=n.config(c,n)||c),c.onreadystatechange=function(){if(!d&&4===c.readyState)try{var e=c.status>=200&&c.status<300||304===c.status||/^file:\/\//i.test(t),i=c.responseText;if("function"==typeof n.extract)i=n.extract(c,n),e=!0;else if("function"==typeof n.deserialize)i=n.deserialize(i);else try{i=i?JSON.parse(i):null}catch(e){throw new Error("Invalid JSON: "+i)}if(e)r(i);else{var l=new Error(c.responseText);l.code=c.status,l.response=i,o(l)}}catch(e){o(e)}},u&&null!=f?c.send(f):c.send()}),jsonp:o(function(t,n,o,i){var a=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,u=e.document.createElement("script");e[a]=function(t){u.parentNode.removeChild(u),o(t),delete e[a]},u.onerror=function(){u.parentNode.removeChild(u),i(new Error("JSONP request failed")),delete e[a]},t=l(t,n.data,!0),u.src=t+(t.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(a),e.document.documentElement.appendChild(u)}),setCompletionCallback:function(e){n=e}}}(window,u),c=function(t){var n,r=t.document,o={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function i(e){return e.attrs&&e.attrs.xmlns||o[e.tag]}function l(e,t){if(e.state!==t)throw new Error("`vnode.state` must not be modified")}function a(e){var t=e.state;try{return this.apply(t,arguments)}finally{l(e,t)}}function u(){try{return r.activeElement}catch(e){return null}}function f(e,t,n,r,o,i,l){for(var a=n;a<r;a++){var u=t[a];null!=u&&s(e,u,o,l,i)}}function s(t,n,o,l,u){var c=n.tag;if("string"==typeof c)switch(n.state={},null!=n.attrs&&$(n.attrs,n,o),c){case"#":!function(e,t,n){t.dom=r.createTextNode(t.children),g(e,t.dom,n)}(t,n,u);break;case"<":d(t,n,l,u);break;case"[":!function(e,t,n,o,i){var l=r.createDocumentFragment();if(null!=t.children){var a=t.children;f(l,a,0,a.length,n,null,o)}t.dom=l.firstChild,t.domSize=l.childNodes.length,g(e,l,i)}(t,n,o,l,u);break;default:!function(t,n,o,l,a){var u=n.tag,s=n.attrs,c=s&&s.is,d=(l=i(n)||l)?c?r.createElementNS(l,u,{is:c}):r.createElementNS(l,u):c?r.createElement(u,{is:c}):r.createElement(u);n.dom=d,null!=s&&function(e,t,n){for(var r in t)k(e,r,null,t[r],n)}(n,s,l);if(g(t,d,a),null!=s&&null!=s.contenteditable)w(n);else if(null!=n.text&&(""!==n.text?d.textContent=n.text:n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),null!=n.children){var v=n.children;f(d,v,0,v.length,o,null,l),"select"===n.tag&&null!=s&&function(e,t){if("value"in t)if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null);else{var n=""+t.value;e.dom.value===n&&-1!==e.dom.selectedIndex||(e.dom.value=n)}"selectedIndex"in t&&k(e,"selectedIndex",null,t.selectedIndex,void 0)}(n,s)}}(t,n,o,l,u)}else!function(t,n,r,o,i){(function(t,n){var r;if("function"==typeof t.tag.view){if(t.state=Object.create(t.tag),null!=(r=t.state.view).$$reentrantLock$$)return;r.$$reentrantLock$$=!0}else{if(t.state=void 0,null!=(r=t.tag).$$reentrantLock$$)return;r.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)}if($(t.state,t,n),null!=t.attrs&&$(t.attrs,t,n),t.instance=e.normalize(a.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null})(n,r),null!=n.instance?(s(t,n.instance,r,o,i),n.dom=n.instance.dom,n.domSize=null!=n.dom?n.instance.domSize:0):n.domSize=0}(t,n,o,l,u)}var c={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function d(e,t,n,o){var i=t.children.match(/^\s*?<(\w+)/im)||[],l=r.createElement(c[i[1]]||"div");"http://www.w3.org/2000/svg"===n?(l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",l=l.firstChild):l.innerHTML=t.children,t.dom=l.firstChild,t.domSize=l.childNodes.length;for(var a,u=r.createDocumentFragment();a=l.firstChild;)u.appendChild(a);g(e,u,o)}function v(e,t,n,r,o,i){if(t!==n&&(null!=t||null!=n))if(null==t||0===t.length)f(e,n,0,n.length,r,o,i);else if(null==n||0===n.length)b(t,0,t.length);else{for(var l=0,a=0,u=null,c=null;a<t.length;a++)if(null!=t[a]){u=null!=t[a].key;break}for(;l<n.length;l++)if(null!=n[l]){c=null!=n[l].key;break}if(null===c&&null==u)return;if(u!==c)b(t,a,t.length),f(e,n,l,n.length,r,o,i);else if(c){for(var d,v,w,k,S,C=t.length-1,z=n.length-1;C>=a&&z>=l;)if(w=t[C],k=n[z],null==w)C--;else if(null==k)z--;else{if(w.key!==k.key)break;w!==k&&h(e,w,k,r,o,i),null!=k.dom&&(o=k.dom),C--,z--}for(;C>=a&&z>=l;)if(d=t[a],v=n[l],null==d)a++;else if(null==v)l++;else{if(d.key!==v.key)break;a++,l++,d!==v&&h(e,d,v,r,y(t,a,o),i)}for(;C>=a&&z>=l;){if(null==d)a++;else if(null==v)l++;else if(null==w)C--;else if(null==k)z--;else{if(l===z)break;if(d.key!==k.key||w.key!==v.key)break;S=y(t,a,o),g(e,m(w),S),w!==v&&h(e,w,v,r,S,i),++l<=--z&&g(e,m(d),o),d!==k&&h(e,d,k,r,o,i),null!=k.dom&&(o=k.dom),a++,C--}w=t[C],k=n[z],d=t[a],v=n[l]}for(;C>=a&&z>=l;){if(null==w)C--;else if(null==k)z--;else{if(w.key!==k.key)break;w!==k&&h(e,w,k,r,o,i),null!=k.dom&&(o=k.dom),C--,z--}w=t[C],k=n[z]}if(l>z)b(t,a,C+1);else if(a>C)f(e,n,l,z+1,r,o,i);else{var E,A,j=o,N=z-l+1,P=new Array(N),O=0,$=0,T=2147483647,I=0;for($=0;$<N;$++)P[$]=-1;for($=z;$>=l;$--)if(null==E&&(E=p(t,a,C+1)),null!=(k=n[$])){var R=E[k.key];null!=R&&(T=R<T?R:-1,P[$-l]=R,w=t[R],t[R]=null,w!==k&&h(e,w,k,r,o,i),null!=k.dom&&(o=k.dom),I++)}if(o=j,I!==C-a+1&&b(t,a,C+1),0===I)f(e,n,l,z+1,r,o,i);else if(-1===T)for(O=(A=function(e){var t,n,r=e.slice(),o=[];o.push(0);for(var i=0,l=e.length;i<l;++i)if(-1!==e[i]){var a=o[o.length-1];if(e[a]<e[i])r[i]=a,o.push(i);else{for(t=0,n=o.length-1;t<n;){var u=(t+n)/2|0;e[o[u]]<e[i]?t=u+1:n=u}e[i]<e[o[t]]&&(t>0&&(r[i]=o[t-1]),o[t]=i)}}t=o.length,n=o[t-1];for(;t-- >0;)o[t]=n,n=r[n];return o}(P)).length-1,$=z;$>=l;$--)v=n[$],-1===P[$-l]?s(e,v,r,i,o):A[O]===$-l?O--:g(e,m(v),o),null!=v.dom&&(o=n[$].dom);else for($=z;$>=l;$--)v=n[$],-1===P[$-l]&&s(e,v,r,i,o),null!=v.dom&&(o=n[$].dom)}}else{var L=t.length<n.length?t.length:n.length;for(l=l<a?l:a;l<L;l++)(d=t[l])===(v=n[l])||null==d&&null==v||(null==d?s(e,v,r,i,y(t,l+1,o)):null==v?x(d):h(e,d,v,r,y(t,l+1,o),i));t.length>L&&b(t,l,t.length),n.length>L&&f(e,n,l,n.length,r,o,i)}}}function h(t,n,r,o,l,u){var f=n.tag;if(f===r.tag){if(r.state=n.state,r.events=n.events,function(e,t){do{if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate){var n=a.call(e.attrs.onbeforeupdate,e,t);if(void 0!==n&&!n)break}if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate){var n=a.call(e.state.onbeforeupdate,e,t);if(void 0!==n&&!n)break}return!1}while(0);return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,!0}(r,n))return;if("string"==typeof f)switch(null!=r.attrs&&T(r.attrs,r,o),f){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children);t.dom=e.dom}(n,r);break;case"<":!function(e,t,n,r,o){t.children!==n.children?(m(t),d(e,n,r,o)):(n.dom=t.dom,n.domSize=t.domSize)}(t,n,r,u,l);break;case"[":!function(e,t,n,r,o,i){v(e,t.children,n.children,r,o,i);var l=0,a=n.children;if(n.dom=null,null!=a){for(var u=0;u<a.length;u++){var f=a[u];null!=f&&null!=f.dom&&(null==n.dom&&(n.dom=f.dom),l+=f.domSize||1)}1!==l&&(n.domSize=l)}}(t,n,r,o,l,u);break;default:!function(t,n,r,o){var l=n.dom=t.dom;o=i(n)||o,"textarea"===n.tag&&(null==n.attrs&&(n.attrs={}),null!=n.text&&(n.attrs.value=n.text,n.text=void 0));(function(e,t,n,r){if(null!=n)for(var o in n)k(e,o,t&&t[o],n[o],r);var i;if(null!=t)for(var o in t)null==(i=t[o])||null!=n&&null!=n[o]||S(e,o,i,r)})(n,t.attrs,n.attrs,o),null!=n.attrs&&null!=n.attrs.contenteditable?w(n):null!=t.text&&null!=n.text&&""!==n.text?t.text.toString()!==n.text.toString()&&(t.dom.firstChild.nodeValue=n.text):(null!=t.text&&(t.children=[e("#",void 0,void 0,t.text,void 0,t.dom.firstChild)]),null!=n.text&&(n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),v(l,t.children,n.children,r,null,o))}(n,r,o,u)}else!function(t,n,r,o,i,l){if(r.instance=e.normalize(a.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");T(r.state,r,o),null!=r.attrs&&T(r.attrs,r,o);null!=r.instance?(null==n.instance?s(t,r.instance,o,l,i):h(t,n.instance,r.instance,o,i,l),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=n.instance?(x(n.instance),r.dom=void 0,r.domSize=0):(r.dom=n.dom,r.domSize=n.domSize)}(t,n,r,o,l,u)}else x(n),s(t,r,o,u,l)}function p(e,t,n){for(var r=Object.create(null);t<n;t++){var o=e[t];if(null!=o){var i=o.key;null!=i&&(r[i]=t)}}return r}function m(e){var t=e.domSize;if(null!=t||null==e.dom){var n=r.createDocumentFragment();if(t>0){for(var o=e.dom;--t;)n.appendChild(o.nextSibling);n.insertBefore(o,n.firstChild)}return n}return e.dom}function y(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function g(e,t,n){null!=n?e.insertBefore(t,n):e.appendChild(t)}function w(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function b(e,t,n){for(var r=t;r<n;r++){var o=e[r];null!=o&&x(o)}}function x(e){var t,n=1,r=0,o=e.state;"string"!=typeof e.tag&&"function"==typeof e.state.onbeforeremove&&(null!=(t=a.call(e.state.onbeforeremove,e))&&"function"==typeof t.then&&(n++,t.then(i,i)));e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(t=a.call(e.attrs.onbeforeremove,e))&&"function"==typeof t.then&&(n++,t.then(i,i)));function i(){if(++r===n&&(l(e,o),function e(t){"string"!=typeof t.tag&&"function"==typeof t.state.onremove&&a.call(t.state.onremove,t);t.attrs&&"function"==typeof t.attrs.onremove&&a.call(t.attrs.onremove,t);if("string"!=typeof t.tag)null!=t.instance&&e(t.instance);else{var n=t.children;if(Array.isArray(n))for(var r=0;r<n.length;r++){var o=n[r];null!=o&&e(o)}}}(e),e.dom)){for(var t=e.dom.parentNode,i=e.domSize||1;--i;)t.removeChild(e.dom.nextSibling);t.removeChild(e.dom)}}i()}function k(e,t,n,o,i){if("key"!==t&&"is"!==t&&null!=o&&!C(t)&&(n!==o||function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===u()||"option"===e.tag&&e.dom.parentNode===r.activeElement}(e,t)||"object"==typeof o)){if("o"===t[0]&&"n"===t[1])return O(e,t,o);if("xlink:"===t.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(6),o);else if("style"===t)N(e.dom,n,o);else if(z(e,t,i)){if("value"===t){if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+o&&e.dom===u())return;if("select"===e.tag&&null!==n&&e.dom.value===""+o)return;if("option"===e.tag&&null!==n&&e.dom.value===""+o)return}"input"===e.tag&&"type"===t?e.dom.setAttribute(t,o):e.dom[t]=o}else"boolean"==typeof o?o?e.dom.setAttribute(t,""):e.dom.removeAttribute(t):e.dom.setAttribute("className"===t?"class":t,o)}}function S(e,t,n,r){if("key"!==t&&"is"!==t&&null!=n&&!C(t))if("o"!==t[0]||"n"!==t[1]||C(t))if("style"===t)N(e.dom,n,null);else if(!z(e,t,r)||"className"===t||"value"===t&&("option"===e.tag||"select"===e.tag&&-1===e.dom.selectedIndex&&e.dom===u())||"input"===e.tag&&"type"===t){var o=t.indexOf(":");-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)}else e.dom[t]=null;else O(e,t,void 0)}function C(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function z(e,t,n){return void 0===n&&(e.tag.indexOf("-")>-1||null!=e.attrs&&e.attrs.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom}var E=/[A-Z]/g;function A(e){return"-"+e.toLowerCase()}function j(e){return"-"===e[0]&&"-"===e[1]?e:"cssFloat"===e?"float":e.replace(E,A)}function N(e,t,n){if(t===n);else if(null==n)e.style.cssText="";else if("object"!=typeof n)e.style.cssText=n;else if(null==t||"object"!=typeof t)for(var r in e.style.cssText="",n){null!=(o=n[r])&&e.style.setProperty(j(r),String(o))}else{for(var r in n){var o;null!=(o=n[r])&&(o=String(o))!==String(t[r])&&e.style.setProperty(j(r),o)}for(var r in t)null!=t[r]&&null==n[r]&&e.style.removeProperty(j(r))}}function P(){}function O(e,t,n){if(null!=e.events){if(e.events[t]===n)return;null==n||"function"!=typeof n&&"object"!=typeof n?(null!=e.events[t]&&e.dom.removeEventListener(t.slice(2),e.events,!1),e.events[t]=void 0):(null==e.events[t]&&e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}else null==n||"function"!=typeof n&&"object"!=typeof n||(e.events=new P,e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}function $(e,t,n){"function"==typeof e.oninit&&a.call(e.oninit,t),"function"==typeof e.oncreate&&n.push(a.bind(e.oncreate,t))}function T(e,t,n){"function"==typeof e.onupdate&&n.push(a.bind(e.onupdate,t))}return P.prototype=Object.create(null),P.prototype.handleEvent=function(e){var t,r=this["on"+e.type];"function"==typeof r?t=r.call(e.currentTarget,e):"function"==typeof r.handleEvent&&r.handleEvent(e),!1===e.redraw?e.redraw=void 0:"function"==typeof n&&n(),!1===t&&(e.preventDefault(),e.stopPropagation())},{render:function(t,n){if(!t)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var r=[],o=u(),i=t.namespaceURI;null==t.vnodes&&(t.textContent=""),n=e.normalizeChildren(Array.isArray(n)?n:[n]),v(t,t.vnodes,n,r,null,"http://www.w3.org/1999/xhtml"===i?void 0:i),t.vnodes=n,null!=o&&u()!==o&&"function"==typeof o.focus&&o.focus();for(var l=0;l<r.length;l++)r[l]()},setRedraw:function(e){return n=e}}};var d=function(e,t){var n=c(e),r=[],o=!1;function i(e){var t=r.indexOf(e);t>-1&&r.splice(t,2)}function l(){if(o)throw new Error("Nested m.redraw.sync() call");o=!0;for(var e=1;e<r.length;e+=2)try{r[e]()}catch(e){"undefined"!=typeof console&&console.error(e)}o=!1}var a=(t||function(e){var t=null;return function(){null===t&&(t=requestAnimationFrame(function(){t=null,e()}))}})(l);return a.sync=l,n.setRedraw(a),{subscribe:function(e,t){i(e),r.push(e,t)},unsubscribe:i,redraw:a,render:n.render}}(window);s.setCompletionCallback(d.redraw);var v;a.mount=(v=d,function(t,n){if(null===n)return v.render(t,[]),void v.unsubscribe(t);if(null==n.view&&"function"!=typeof n)throw new Error("m.mount(element, component) expects a component, not a vnode");var r=function(){v.render(t,e(n))};v.subscribe(t,r),r()});var h=u,p=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),l=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var u=l.split(/\]\[?|\[/),f=n;l.indexOf("[")>-1&&u.pop();for(var s=0;s<u.length;s++){var c=u[s],d=u[s+1],v=""==d||!isNaN(parseInt(d,10)),h=s===u.length-1;if(""===c)null==r[l=u.slice(0,s).join()]&&(r[l]=0),c=r[l]++;null==f[c]&&(f[c]=h?a:v?[]:{}),f=f[c]}}return n},m=function(e){var t,n="function"==typeof e.history.pushState,r="function"==typeof setImmediate?setImmediate:setTimeout;function o(t){var n=e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===t&&"/"!==n[0]&&(n="/"+n),n}function i(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=r>-1?r:o>-1?o:e.length;if(r>-1){var l=o>-1?o:e.length,a=p(e.slice(r+1,l));for(var u in a)t[u]=a[u]}if(o>-1){var f=p(e.slice(o+1));for(var u in f)n[u]=f[u]}return e.slice(0,i)}var l={prefix:"#!",getPath:function(){switch(l.prefix.charAt(0)){case"#":return o("hash").slice(l.prefix.length);case"?":return o("search").slice(l.prefix.length)+o("hash");default:return o("pathname").slice(l.prefix.length)+o("search")+o("hash")}},setPath:function(t,r,o){var a={},u={};if(t=i(t,a,u),null!=r){for(var s in r)a[s]=r[s];t=t.replace(/:([^\/]+)/g,function(e,t){return delete a[t],r[t]})}var c=f(a);c&&(t+="?"+c);var d=f(u);if(d&&(t+="#"+d),n){var v=o?o.state:null,h=o?o.title:null;e.onpopstate(),o&&o.replace?e.history.replaceState(v,h,l.prefix+t):e.history.pushState(v,h,l.prefix+t)}else e.location.href=l.prefix+t}};return l.defineRoutes=function(o,a,u){function f(){var t=l.getPath(),n={},r=i(t,n,n),f=e.history.state;if(null!=f)for(var s in f)n[s]=f[s];for(var c in o){var d=new RegExp("^"+c.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(r))return void r.replace(d,function(){for(var e=c.match(/:[^\/]+/g)||[],r=[].slice.call(arguments,1,-2),i=0;i<e.length;i++)n[e[i].replace(/:|\./g,"")]=decodeURIComponent(r[i]);a(o[c],n,t,c)})}u(t,n)}var s;n?e.onpopstate=(s=f,function(){null==t&&(t=r(function(){t=null,s()}))}):"#"===l.prefix.charAt(0)&&(e.onhashchange=f),f()},l};a.route=function(t,n){var r,o,i,l,a,u=m(t),f=function(t,f,s){if(null==t)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");function c(){null!=r&&n.render(t,r(e(o,i.key,i)))}var d=function(){c(),d=n.redraw};n.subscribe(t,c);var v=function(e){if(e===f)throw new Error("Could not resolve default route "+f);u.setPath(f,null,{replace:!0})};u.defineRoutes(s,function(e,t,n){var u=a=function(e,f){u===a&&(o=null==f||"function"!=typeof f.view&&"function"!=typeof f?"div":f,i=t,l=n,a=null,r=(e.render||function(e){return e}).bind(e),d())};e.view||"function"==typeof e?u({},e):e.onmatch?h.resolve(e.onmatch(t,n)).then(function(t){u(e,t)},v):u(e,"div")},v)};f.set=function(e,t,n){null!=a&&((n=n||{}).replace=!0),a=null,u.setPath(e,t,n)},f.get=function(){return l},f.prefix=function(e){u.prefix=e};var s=function(e,t){t.dom.setAttribute("href",u.prefix+t.attrs.href),t.dom.onclick=function(t){if(!(t.ctrlKey||t.metaKey||t.shiftKey||2===t.which)){t.preventDefault(),t.redraw=!1;var n=this.getAttribute("href");0===n.indexOf(u.prefix)&&(n=n.slice(u.prefix.length)),f.set(n,void 0,e)}}};return f.link=function(e){return null==e.tag?s.bind(s,e):s({},e)},f.param=function(e){return void 0!==i&&void 0!==e?i[e]:i},f}(window,d);var y=c(window);a.render=y.render,a.redraw=d.redraw,a.request=s.request,a.jsonp=s.jsonp,a.parseQueryString=p,a.buildQueryString=f,a.version="2.0.0-rc.4",a.vnode=e,a.PromisePolyfill=u,"undefined"!=typeof module?module.exports=a:window.m=a}();