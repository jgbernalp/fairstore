!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=26)}([function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return H})),n.d(t,"hydrate",(function(){return U})),n.d(t,"createElement",(function(){return _})),n.d(t,"h",(function(){return _})),n.d(t,"Fragment",(function(){return b})),n.d(t,"createRef",(function(){return v})),n.d(t,"isValidElement",(function(){return o})),n.d(t,"Component",(function(){return g})),n.d(t,"cloneElement",(function(){return z})),n.d(t,"createContext",(function(){return G})),n.d(t,"toChildArray",(function(){return M})),n.d(t,"_unmount",(function(){return B})),n.d(t,"options",(function(){return r}));var r,o,i,a,c,s,l,u={},h=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function d(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function _(e,t,n){var r,o,i,a,c=arguments;if(t=d({},t),arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(c[r]);if(null!=n&&(t.children=n),null!=e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===t[o]&&(t[o]=e.defaultProps[o]);return a=t.key,null!=(i=t.ref)&&delete t.ref,null!=a&&delete t.key,m(e,t,a,i)}function m(e,t,n,o){var i={type:e,props:t,key:n,ref:o,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return r.vnode&&r.vnode(i),i}function v(){return{}}function b(e){return e.children}function g(e,t){this.props=e,this.context=t}function j(e,t){if(null==t)return e.__p?j(e.__p,e.__p.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?j(e):null}function w(e){var t,n;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return w(e)}}function O(e){(!e.__d&&(e.__d=!0)&&1===i.push(e)||c!==r.debounceRendering)&&(c=r.debounceRendering,(r.debounceRendering||a)(y))}function y(){var e,t,n,r,o,a,c;for(i.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=i.pop();)e.__d&&(n=void 0,r=void 0,a=(o=(t=e).__v).__e,(c=t.__P)&&(n=[],r=k(c,o,d({},o),t.__n,void 0!==c.ownerSVGElement,null,n,null==a?j(o):a),X(n,o),r!=a&&w(o)))}function S(e,t,n,r,o,i,a,c,s){var l,p,d,_,m,v,b,g=n&&n.__k||h,w=g.length;if(c==u&&(c=null!=i?i[0]:w?j(n,0):null),l=0,t.__k=M(t.__k,(function(n){if(null!=n){if(n.__p=t,n.__b=t.__b+1,null===(d=g[l])||d&&n.key==d.key&&n.type===d.type)g[l]=void 0;else for(p=0;p<w;p++){if((d=g[p])&&n.key==d.key&&n.type===d.type){g[p]=void 0;break}d=null}if(_=k(e,n,d=d||u,r,o,i,a,c,s),(p=n.ref)&&d.ref!=p&&(b||(b=[])).push(p,n.__c||_,n),null!=_){if(null==v&&(v=_),null!=n.l)_=n.l,n.l=null;else if(i==d||_!=c||null==_.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(_);else{for(m=c,p=0;(m=m.nextSibling)&&p<w;p+=2)if(m==_)break e;e.insertBefore(_,c)}"option"==t.type&&(e.value="")}c=_.nextSibling,"function"==typeof t.type&&(t.l=_)}}return l++,n})),t.__e=v,null!=i&&"function"!=typeof t.type)for(l=i.length;l--;)null!=i[l]&&f(i[l]);for(l=w;l--;)null!=g[l]&&B(g[l],g[l]);if(b)for(l=0;l<b.length;l++)L(b[l],b[++l],b[++l])}function M(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)M(e[r],t,n);else n.push(t?t(function(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return m(null,e,null,null);if(null!=e.__e||null!=e.__c){var t=m(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}(e)):e);return n}function N(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===p.test(t)?n+"px":null==n?"":n}function C(e,t,n,r,o){var i,a,c,s,l;if("key"===(t=o?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(a in r)n&&a in n||N(i,a,"");if(n)for(c in n)r&&n[c]===r[c]||N(i,c,n[c])}else"o"===t[0]&&"n"===t[1]?(s=t!==(t=t.replace(/Capture$/,"")),l=t.toLowerCase(),t=(l in e?l:t).slice(2),n?(r||e.addEventListener(t,x,s),(e.u||(e.u={}))[t]=n):e.removeEventListener(t,x,s)):"list"!==t&&"tagName"!==t&&"form"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function x(e){return this.u[e.type](r.event?r.event(e):e)}function k(e,t,n,o,i,a,c,s,l){var u,h,p,f,_,m,v,j,w,O,y=t.type;if(void 0!==t.constructor)return null;(u=r.__b)&&u(t);try{e:if("function"==typeof y){if(j=t.props,w=(u=y.contextType)&&o[u.__c],O=u?w?w.props.value:u.__p:o,n.__c?v=(h=t.__c=n.__c).__p=h.__E:("prototype"in y&&y.prototype.render?t.__c=h=new y(j,O):(t.__c=h=new g(j,O),h.constructor=y,h.render=T),w&&w.sub(h),h.props=j,h.state||(h.state={}),h.context=O,h.__n=o,p=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=y.getDerivedStateFromProps&&d(h.__s==h.state?h.__s=d({},h.__s):h.__s,y.getDerivedStateFromProps(j,h.__s)),p)null==y.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&c.push(h);else{if(null==y.getDerivedStateFromProps&&null==h.t&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(j,O),!h.t&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(j,h.__s,O)){for(h.props=j,h.state=h.__s,h.__d=!1,h.__v=t,t.__e=n.__e,t.__k=n.__k,u=0;u<t.__k.length;u++)t.__k[u]&&(t.__k[u].__p=t);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(j,h.__s,O)}f=h.props,_=h.state,h.context=O,h.props=j,h.state=h.__s,(u=r.__r)&&u(t),h.__d=!1,h.__v=t,h.__P=e,u=h.render(h.props,h.state,h.context),t.__k=M(null!=u&&u.type==b&&null==u.key?u.props.children:u),null!=h.getChildContext&&(o=d(d({},o),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(m=h.getSnapshotBeforeUpdate(f,_)),S(e,t,n,o,i,a,c,s,l),h.base=t.__e,u=h.__h,h.__h=[],u.some((function(e){e.call(h)})),p||null==f||null==h.componentDidUpdate||h.componentDidUpdate(f,_,m),v&&(h.__E=h.__p=null),h.t=null}else t.__e=P(n.__e,t,n,o,i,a,c,l);(u=r.diffed)&&u(t)}catch(e){r.__e(e,t,n)}return t.__e}function X(e,t){for(var n;n=e.pop();)try{n.componentDidMount()}catch(e){r.__e(e,n.__v)}r.__c&&r.__c(t)}function P(e,t,n,r,o,i,a,c){var s,l,p,d,f,_=n.props,m=t.props;if(o="svg"===t.type||o,null==e&&null!=i)for(s=0;s<i.length;s++)if(null!=(l=i[s])&&(null===t.type?3===l.nodeType:l.localName===t.type)){e=l,i[s]=null;break}if(null==e){if(null===t.type)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),i=null}if(null===t.type)null!=i&&(i[i.indexOf(e)]=null),_!==m&&(e.data=m);else if(t!==n){if(null!=i&&(i=h.slice.call(e.childNodes)),p=(_=n.props||u).dangerouslySetInnerHTML,d=m.dangerouslySetInnerHTML,!c){if(_===u)for(_={},f=0;f<e.attributes.length;f++)_[e.attributes[f].name]=e.attributes[f].value;(d||p)&&(d&&p&&d.__html==p.__html||(e.innerHTML=d&&d.__html||""))}(function(e,t,n,r,o){var i;for(i in n)i in t||C(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"value"===i||"checked"===i||n[i]===t[i]||C(e,i,t[i],n[i],r)})(e,m,_,o,c),t.__k=t.props.children,d||S(e,t,n,r,"foreignObject"!==t.type&&o,i,a,u,c),c||("value"in m&&void 0!==m.value&&m.value!==e.value&&(e.value=null==m.value?"":m.value),"checked"in m&&void 0!==m.checked&&m.checked!==e.checked&&(e.checked=m.checked))}return e}function L(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function B(e,t,n){var o,i,a;if(r.unmount&&r.unmount(e),(o=e.ref)&&L(o,null,t),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.l=null,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&B(o[a],t,n);null!=i&&f(i)}function T(e,t,n){return this.constructor(e,n)}function H(e,t,n){var o,i,a;r.__p&&r.__p(e,t),i=(o=n===s)?null:n&&n.__k||t.__k,e=_(b,null,[e]),a=[],k(t,o?t.__k=e:(n||t).__k=e,i||u,u,void 0!==t.ownerSVGElement,n&&!o?[n]:i?null:h.slice.call(t.childNodes),a,n||u,o),X(a,e)}function U(e,t){H(e,t,s)}function z(e,t){return t=d(d({},e.props),t),arguments.length>2&&(t.children=h.slice.call(arguments,2)),m(e.type,t,t.key||e.key,t.ref||e.ref)}function G(e){var t={},n={__c:"__cC"+l++,__p:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&r.some((function(e){e.__P&&(e.context=t.value,O(e))}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n}r={},o=function(e){return null!=e&&void 0===e.constructor},g.prototype.setState=function(e,t){var n=this.__s!==this.state&&this.__s||(this.__s=d({},this.state));("function"!=typeof e||(e=e(n,this.props)))&&d(n,e),null!=e&&this.__v&&(this.t=!1,t&&this.__h.push(t),O(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.t=!0,e&&this.__h.push(e),O(this))},g.prototype.render=b,i=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c=r.debounceRendering,r.__e=function(e,t,n){for(var r;t=t.__p;)if((r=t.__c)&&!r.__p)try{if(r.constructor&&null!=r.constructor.getDerivedStateFromError)r.setState(r.constructor.getDerivedStateFromError(e));else{if(null==r.componentDidCatch)continue;r.componentDidCatch(e)}return O(r.__E=r)}catch(t){e=t}throw e},s=u,l=0},function(e,t,n){e.exports={hideXS:"hideXS_3iroxX3",showXS:"showXS_31Puti7",hideSM:"hideSM_rcyned8",showSM:"showSM_Jb1TpAg",menuShadow:"menuShadow_2vY8CuV",navBar:"navBar_1BqshSS",sideMenu:"sideMenu_UBau7cV",active:"active_5i1dZOU",links:"links_1Wr3tj6",logo:"logo_1Pifld_",wrapper:"wrapper_OMOmYGy",rightCol:"rightCol_2nkksHr",iconsCol:"iconsCol_2gP_pHW",icon:"icon_KzxLXQM",cartIcon:"cartIcon_1TVgCfl",personIcon:"personIcon_2qevBs_",menuBtn:"menuBtn_33O66z7",sideMenuHeader:"sideMenuHeader_2Dk7lEj",closeBtn:"closeBtn_2TiDcpR",linksContainer:"linksContainer_3BYGhFk",open:"open_1Fk3wTp",grid:"grid_2a3M41K"}},function(e,t,n){e.exports={center:"center_L1iLt1O",noTop:"noTop_1T9aABc"}},function(e,t,n){e.exports={hideXS:"hideXS_1dHT3eb",showXS:"showXS_36oGuPM",hideSM:"hideSM_3rBBZjl",showSM:"showSM_2t0NrsG",container:"container_22zZdb2",button:"button_2GS_oqt",inner:"inner_2FGdPva",add:"add_wVlgwoZ",less:"less_3PsPGgs",input:"input_2nqH_6I"}},function(e,t,n){"use strict";n.r(t),n.d(t,"subscribers",(function(){return d})),n.d(t,"getCurrentUrl",(function(){return _})),n.d(t,"route",(function(){return m})),n.d(t,"Router",(function(){return y})),n.d(t,"Route",(function(){return M})),n.d(t,"Link",(function(){return S})),n.d(t,"exec",(function(){return a}));var r=n(0),o={};function i(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,a=e.match(i),c={};if(a&&a[1])for(var s=a[1].split("&"),u=0;u<s.length;u++){var h=s[u].split("=");c[decodeURIComponent(h[0])]=decodeURIComponent(h.slice(1).join("="))}e=l(e.replace(i,"")),t=l(t||"");for(var p=Math.max(e.length,t.length),d=0;d<p;d++)if(t[d]&&":"===t[d].charAt(0)){var f=t[d].replace(/(^:|[+*?]+$)/g,""),_=(t[d].match(/[+*?]+$/)||o)[0]||"",m=~_.indexOf("+"),v=~_.indexOf("*"),b=e[d]||"";if(!b&&!v&&(_.indexOf("?")<0||m)){r=!1;break}if(c[f]=decodeURIComponent(b),m||v){c[f]=e.slice(d).map(decodeURIComponent).join("/");break}}else if(t[d]!==e[d]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function s(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(u).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function u(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var h=null,p=[],d=[],f={};function _(){var e;return""+((e=h&&h.location?h.location:h&&h.getCurrentLocation?h.getCurrentLocation():"undefined"!=typeof location?location:f).pathname||"")+(e.search||"")}function m(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=p.length;t--;)if(p[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),h&&h[t]?h[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),v(e)}function v(e){for(var t=!1,n=0;n<p.length;n++)!0===p[n].routeTo(e)&&(t=!0);for(var r=d.length;r--;)d[r](e);return t}function b(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return m(t)}}function g(e){if(0==e.button)return b(e.currentTarget||e.target||this),j(e)}function j(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function w(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(b(t))return j(e)}}while(t=t.parentNode)}}var O=!1;var y=function(e){function t(t){e.call(this,t),t.history&&(h=t.history),this.state={url:t.url||_()},O||("function"==typeof addEventListener&&(h||addEventListener("popstate",(function(){v(_())})),addEventListener("click",w)),O=!0)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){p.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;h&&(this.unlisten=h.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),p.splice(p.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(s).sort(c).map((function(e){var o=a(t,e.props.path,e.props);if(o){if(!1!==n){var c={url:t,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(e,c)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,o=e.onChange,i=t.url,a=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=a[0]||null,s=this.previousUrl;return i!==s&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:s,active:a,current:c})),c},t}(r.Component),S=function(e){return Object(r.createElement)("a",i({onClick:g},e))},M=function(e){return Object(r.createElement)(e.component,e)};y.subscribers=d,y.getCurrentUrl=_,y.route=m,y.Router=y,y.Route=M,y.Link=S,t.default=y},function(e,t,n){e.exports={hideXS:"hideXS_3oY6GH3",showXS:"showXS_3EcTmjy",hideSM:"hideSM_3gQfhtI",showSM:"showSM_19ZyS31",home:"home_210Pts_",hero:"hero_5kj8qqg",heroText:"heroText_2Vs9GG9",latestProd:"latestProd_3YM6LHD",latestTitle:"latestTitle_1ymjOXX",grid:"grid_3QROPwR"}},function(e,t,n){e.exports={hideXS:"hideXS_2ZhbNUW",showXS:"showXS_2P-7Ipr",hideSM:"hideSM_3fhk5pe",showSM:"showSM_12JuO4q",categories:"categories_33o0V9H",filter:"filter_13fZOPl",slider:"slider_2DrkVWP",sliderContainer:"sliderContainer_3m-obJI"}},function(e,t,n){e.exports={hideXS:"hideXS_3Qee1tP",showXS:"showXS_3MaKHy8",hideSM:"hideSM_2v8c-y7",showSM:"showSM_3scVojl",image:"image_1Cdj15n",card:"card_2-eJg7X",name:"name_il6I-JM",rightGrid:"rightGrid_Yrj6WGL",buttons:"buttons_3rE82GX",grid:"grid_2_sSZfH"}},function(e,t,n){e.exports={hideXS:"hideXS_9B5OLMT",showXS:"showXS_k6svkKS",hideSM:"hideSM_1XnFE5L",showSM:"showSM_2HcZ4nC",img:"img_voEpxk1",title:"title_3jN5ejR",subtitle:"subtitle_3LnHiDu",intro:"intro_1sfwft8",farmerCard:"farmerCard_1qJtXN7",grid:"grid_3gfqGYr"}},function(e,t,n){var r=n(0);function o(e,t){for(var n in t)e[n]=t[n];return e}function i(e){this.getChildContext=function(){return{store:e.store}}}i.prototype.render=function(e){return e.children&&e.children[0]||e.children},t.connect=function(e,t){var n;return"function"!=typeof e&&("string"==typeof(n=e||{})&&(n=n.split(/\s*,\s*/)),e=function(e){for(var t={},r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}),function(n){function i(i,a){var c=this,s=a.store,l=e(s?s.getState():{},i),u=t?function(e,t){"function"==typeof e&&(e=e(t));var n={};for(var r in e)n[r]=t.action(e[r]);return n}(t,s):{store:s},h=function(){var t=e(s?s.getState():{},i);for(var n in t)if(t[n]!==l[n])return l=t,c.setState({});for(var r in l)if(!(r in t))return l=t,c.setState({})};this.componentWillReceiveProps=function(e){i=e,h()},this.componentDidMount=function(){s.subscribe(h)},this.componentWillUnmount=function(){s.unsubscribe(h)},this.render=function(e){return r.h(n,o(o(o({},u),e),l))}}return(i.prototype=new r.Component).constructor=i}},t.Provider=i},function(e,t,n){e.exports={hideXS:"hideXS_loVFYki",showXS:"showXS_1GYpOia",hideSM:"hideSM_kC6vCRG",showSM:"showSM_2ysdqJK",price:"price_2jYtxia",big:"big_1n5YwER",currency:"currency_38DIQI6"}},function(e,t,n){e.exports={hideXS:"hideXS_1gK1Osu",showXS:"showXS_2JLn-PB",hideSM:"hideSM_2mJ3G7M",showSM:"showSM_3jeFLEp",img:"img_ERVzON_",title:"title_2ELCs1m",container:"container_iq1lQ9z"}},function(e,t,n){e.exports={cols:"cols_1IqgF_7",center:"center_GTlB7jS",fill:"fill_BXqf-LB"}},function(e,t,n){e.exports={hideXS:"hideXS_cuPUcf1",showXS:"showXS_3uxZLyc",hideSM:"hideSM_3C38x4z",showSM:"showSM_1JoXjqP",productsContainerGrid:"productsContainerGrid_2h9DfON",filterArea:"filterArea_2xYaeZ_",productsGrid:"productsGrid_1zPuCfc"}},function(e,t,n){e.exports={hideXS:"hideXS_2WovVFD",showXS:"showXS_fYmlia3",hideSM:"hideSM_2TqGNlS",showSM:"showSM_3vLo7Ba"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.Match=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),i=n(4);function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=t.Match=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=r=a(this,e.call.apply(e,[this].concat(i))),r.update=function(e){r.nextUrl=e,r.setState({})},a(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){i.subscribers.push(this.update)},t.prototype.componentWillUnmount=function(){i.subscribers.splice(i.subscribers.indexOf(this.update)>>>0,1)},t.prototype.render=function(e){var t=this.nextUrl||(0,i.getCurrentUrl)(),n=t.replace(/\?.+$/,"");return this.nextUrl=null,e.children({url:t,path:n,matches:!1!==(0,i.exec)(n,e.path,{})})},t}(o.Component),s=function(e){var t=e.activeClassName,n=e.path,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","path"]);return(0,o.h)(c,{path:n||a.href},(function(e){var n=e.matches;return(0,o.h)(i.Link,r({},a,{class:[a.class||a.className,n&&t].filter(Boolean).join(" ")}))}))};t.Link=s,t.default=c,c.Link=s},function(e,t,n){e.exports={hideXS:"hideXS_2ey14Wo",showXS:"showXS_1NJ_bBS",hideSM:"hideSM_265TdMD",showSM:"showSM_1N0F8Zl",container:"container_2Z_W25o",button:"button_2VCxxx1",primary:"primary_akzzxpS",secondary:"secondary_3R6JL9s"}},function(e,t,n){e.exports={rows:"rows_dFxhfC1",fill:"fill_hI7YyRo"}},function(e,t,n){e.exports={hideXS:"hideXS_19ghUjv",showXS:"showXS_347LlP1",hideSM:"hideSM_nV3mOB6",showSM:"showSM_2S-L01R",app:"app_1ityU3k",section:"section_1-k-l0b"}},function(e,t,n){e.exports={hideXS:"hideXS_2bhIz-6",showXS:"showXS_3b2s0Dj",hideSM:"hideSM_j29gUM7",showSM:"showSM_2BVe7Eh",footer:"footer_135WsKw",title:"title_3pOYLVF"}},function(e,t,n){e.exports={wrapper:"wrapper_1_6rkrM"}},function(e,t,n){e.exports={hideXS:"hideXS_1-sL2-R",showXS:"showXS_2NIwxtM",hideSM:"hideSM_2yK1OG3",showSM:"showSM_3Xcp1qS",card:"card_1yHGlQk"}},function(e,t,n){e.exports={hideXS:"hideXS_37V8Xak",showXS:"showXS_2BBWucI",hideSM:"hideSM_3jbzqkt",showSM:"showSM_1wmRVBy",avatar:"avatar_17_N5Yl"}},function(e,t,n){e.exports={grid:"grid_3mTuoea"}},function(e,t,n){e.exports={grid:"grid_3eaR_yZ"}},function(e,t,n){e.exports={hideXS:"hideXS_9GalCyB",showXS:"showXS_2Q_0zUK",hideSM:"hideSM_RCXZ6pT",showSM:"showSM_35RiGa3",searchBar:"searchBar_1kTg1Qb"}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(4),i=n(5),a=n.n(i),c=n(20),s=n.n(c);const l=({children:e,verticalPadding:t})=>{const n=t?{"padding-top":t}:void 0,o=t?{"padding-bottom":t}:void 0;return Object(r.h)("div",{style:Object.assign(Object.assign({},n),o),className:s.a.wrapper},e)};var u=n(2),h=n.n(u);const p=(...e)=>e.filter(Boolean).join(" ").trim(),d=({children:e,className:t,center:n,noTopMargin:o,h1:i,h2:a,h3:c,h4:s,h5:l,h6:u})=>{const d=n?h.a.center:void 0,f=o?h.a.noTop:void 0;return i?Object(r.h)("h1",{className:p(t,h.a.h1,d,f)},e):a?Object(r.h)("h2",{className:p(t,h.a.h2,d,f)},e):c?Object(r.h)("h3",{className:p(t,h.a.h3,d,f)},e):s?Object(r.h)("h4",{className:p(t,h.a.h4,d,f)},e):u?Object(r.h)("h6",{className:p(t,h.a.h6,d,f)},e):l?Object(r.h)("h5",{className:p(t,h.a.h5,d,f)},e):Object(r.h)("h1",{className:p(t,h.a.h1,d,f)},e)},f=[{id:"1",name:"Avocado",image:"https://img.etimg.com/thumb/msid-69268059,width-643,imgsize-164253,resizemode-4/avocados.jpg",price:100,farmer:{name:"Pedro",avatar:"https://media.istockphoto.com/photos/senior-farmercountryside-man-picture-id955895084?k=6&m=955895084&s=612x612&w=0&h=BZoADpECS7G8Xg-TGCYhvX2gDULjF-tHmAK4_eMWlOY="}},{id:"2",name:"Coffee",image:"https://athome.starbucks.com/sites/site.prod.athome.starbucks.com/files/2019-06/CoffeeFinder_ArticleHeader_Desktop_1176x712.jpg",price:200,farmer:{name:"Maria",avatar:"http://images.telemetro.com/internacionales/Campesina-Puerto-Rico-Nobel-FotoAFP_MEDIMA20160418_0264_31.jpg"}},{id:"3",name:"Garlic",image:"https://cdn.editorchoice.com/wp-content/uploads/2019/07/garlic.jpg",price:140,farmer:{name:"Pablo",avatar:"https://media.istockphoto.com/videos/portrait-of-young-farmer-in-hat-standing-at-field-of-organic-farm-and-video-id814387148?s=640x640"}},{id:"4",name:"Strawberries",image:"https://cdn.theatlantic.com/assets/media/img/mt/2019/08/RTR4FJJS/lead_720_405.jpg?mod=1567003290",price:42,farmer:{name:"Hannah",avatar:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/22/11/strawberry-farm-worker.jpg?w968h681"}},{id:"5",name:"Grapes",image:"https://cdn.shopify.com/s/files/1/1359/5939/products/10_24_2011_6_1400x.jpg?v=1529969229",price:52,farmer:{name:"Marco",avatar:"https://previews.123rf.com/images/carballo/carballo1610/carballo161000120/63546971-farmer-harvesting-the-grapes-in-the-vineyard.jpg"}},{id:"6",name:"Bread",image:"https://www.thespruceeats.com/thmb/2blr6l0u64ETt4Fpdi-lfGnXL8w=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-155279113-582681813df78c6f6a39e2c6.jpg",price:12,farmer:{name:"Karl",avatar:"http://www.cusanos.com/wp-content/uploads/2016/06/bakers.jpg"}},{id:"7",name:"Cheese",image:"https://www.vegetariantimes.com/.image/t_share/MTQ2ODI5MzI5MzA5NzcxNzM2/how-to-buy-veg-friendly-cheesejpg.jpg",price:40,farmer:{name:"Martha",avatar:"https://bloximages.chicago2.vip.townnews.com/poststar.com/content/tncms/assets/v3/editorial/a/d1/ad178123-1316-5197-b425-1c7a7faa2483/589fd680488c9.image.jpg"}},{id:"8",name:"Hess Avocado",image:"https://i0.wp.com/www.ediblebackyard.co.nz/wp-content/uploads/2017/11/avocados-2.jpg?resize=699%2C427",price:80,farmer:{name:"Maina",avatar:"https://mobile.nation.co.ke/image/view/-/2261580/medRes/717020/-/7xsj2c/-/GOLD+AVOCADO+2603+II.JPG.jpg"}},{id:"9",name:"Cocoa",image:"https://cdn11.bigcommerce.com/s-ham8sjk/images/stencil/1280x1280/products/276/836/Cacao_Chocolate_Chocolate_Liquor__1551729718_104.172.159.225__96045.1551729753.jpg?c=2&imbypass=on",price:80,farmer:{name:"Moussa",avatar:"https://www.fairtrade.org.uk/~/media/FairtradeUK/Media%20Centre/Images/press%20releases/14866.jpg?la=en&mw=1200"}},{id:"10",name:"Mango",image:"https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/6/1/6/1/7231616-1-eng-GB/Senegal-is-ready-to-supply-US-mangoes_wrbm_large.jpg",price:30,farmer:{name:"Larry",avatar:"https://cdn.newsapi.com.au/image/v1/b2061724827fe49c6521fea950b514cd?width=1024"}},{id:"11",name:"Peach",image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fresh-organic-peaches-in-wooden-crate-viewed-from-royalty-free-image-584718022-1558541036.jpg?crop=0.667xw:1.00xh;0.333xw,0&resize=640:*",price:20,farmer:{name:"Joao",avatar:"http://farmflavor.com/wp-content/uploads/2013/01/1540712jso6331.jpg"}},{id:"12",name:"Date",image:"https://cdn2.stylecraze.com/wp-content/uploads/2014/08/8_Serious_Side_Effects_Of_Dates.jpg",price:10,farmer:{name:"Wadi",avatar:"https://c8.alamy.com/comp/C1HA1E/egypt-desert-of-sina-oasis-of-wadi-feiran-farmer-bedouin-and-date-C1HA1E.jpg"}},{id:"13",name:"Ginger",image:"http://www.ecorazzi.com/wp-content/uploads/2013/06/ginger.jpg",price:13,farmer:{name:"Santu",avatar:"https://www.mercycorps.org/sites/default/files/styles/slideshow/public/nepal-201406-msamper-0626.JPG"}}],_=f.concat([]).sort(()=>Math.random()-.5).slice(0,5);var m=n(21),v=n.n(m);const b=({children:e,className:t})=>Object(r.h)("div",{className:p(v.a.card,t)},e);var g=n(10),j=n.n(g);const w=({price:e,big:t=!1})=>Object(r.h)("div",{className:p(j.a.price,t&&j.a.big)},Object(r.h)("span",{className:j.a.currency},"€"),Object(r.h)("span",null,e));var O=n(11),y=n.n(O),S=n(22),M=n.n(S);const N=({src:e})=>Object(r.h)("img",{src:e,className:M.a.avatar});var C=n(17),x=n.n(C);const k=({children:e,fill:t=!1})=>Object(r.h)("div",{className:p(x.a.rows,t?x.a.fill:"auto")},e);var X=n(12),P=n.n(X);const L=({className:e,children:t,verticalCenter:n,fill:o})=>Object(r.h)("div",{className:p(e,P.a.cols,n&&P.a.center,o&&P.a.fill)},t),B=({product:e})=>Object(r.h)(b,null,Object(r.h)("img",{className:y.a.img,src:e.image}),Object(r.h)(L,{fill:!0,className:y.a.container},Object(r.h)(k,null,Object(r.h)(d,{h6:!0,noTopMargin:!0,className:y.a.title},e.name),Object(r.h)(w,{price:e.price})),Object(r.h)(N,{src:e.farmer.avatar})));var T=n(23),H=n.n(T);const U=({children:e,className:t})=>Object(r.h)("div",{className:p(H.a.grid,t)},e),z=e=>Object(r.h)("div",{className:a.a.home},Object(r.h)("div",{className:a.a.hero},Object(r.h)(l,null,Object(r.h)("div",{className:a.a.heroText},Object(r.h)(d,{h2:!0},"Be fair!"),Object(r.h)("p",null,"Buy crafted products direclty from the best farmers.")))),Object(r.h)("div",{className:a.a.lastestProds},Object(r.h)(l,{verticalPadding:"2rem"},Object(r.h)(d,{className:a.a.latestTitle,h4:!0,center:!0},"Latest products"),Object(r.h)(U,{className:a.a.grid},_.map(e=>Object(r.h)(o.Link,{href:`/products/${e.id}`},Object(r.h)(B,{product:e})))))));var G=n(6),A=n.n(G);const E=()=>Object(r.h)(r.Fragment,null,Object(r.h)("div",{className:A.a.filter},Object(r.h)(d,{h5:!0},"Categories"),Object(r.h)("div",{className:A.a.categories},Object(r.h)("a",{href:"#"},"Coffee"),Object(r.h)("a",{href:"#"},"Vegetables"),Object(r.h)("a",{href:"#"},"Fruits"),Object(r.h)("a",{href:"#"},"Cheese"),Object(r.h)("a",{href:"#"},"Bread"),Object(r.h)("a",{href:"#"},"Cocoa"))),Object(r.h)("div",{className:A.a.filter},Object(r.h)(d,{h5:!0},"Price"),Object(r.h)("div",{className:A.a.price},Object(r.h)("div",{className:A.a.sliderContainer},Object(r.h)("input",{type:"range",min:"1",max:"100",value:"100",className:A.a.slider})))));var R=n(13),I=n.n(R);const D=e=>Object(r.h)(l,{verticalPadding:"1rem"},Object(r.h)(U,{className:I.a.productsContainerGrid,areas:"filter productGrid"},Object(r.h)("div",{className:I.a.filterArea},Object(r.h)(E,null)),Object(r.h)(U,{className:I.a.productsGrid},f.map(e=>Object(r.h)(o.Link,{href:`/products/${e.id}`},Object(r.h)(B,{product:e})))))),F=f.map(({farmer:{name:e,avatar:t}})=>({name:e,avatar:t,intro:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}));var q=n(8),W=n.n(q);const V=({farmer:e})=>Object(r.h)(b,{className:W.a.farmerCard},Object(r.h)(U,{className:W.a.grid},Object(r.h)(L,{verticalCenter:!0},Object(r.h)(N,{src:e.avatar}),Object(r.h)("div",null,Object(r.h)(d,{h4:!0,className:W.a.title},e.name),Object(r.h)(d,{h6:!0,className:W.a.subtitle},"Country"))),Object(r.h)(r.Fragment,null,e.intro&&Object(r.h)("p",{className:W.a.intro},e.intro))));var Y=n(24),J=n.n(Y);const K=e=>Object(r.h)(l,{verticalPadding:"1rem"},Object(r.h)(U,{className:J.a.grid},F.map(e=>Object(r.h)(V,{farmer:e}))));var Z=n(18),Q=n.n(Z),$=n(1),ee=n.n($),te=n(14),ne=n.n(te),re=n(15),oe=n(25),ie=n.n(oe);const ae=({className:e})=>Object(r.h)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.h)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})),ce=({className:e})=>Object(r.h)("div",{className:p(ie.a.searchBar,e)},Object(r.h)(ae,null),Object(r.h)("input",{type:"search",placeholder:"Search"})),se=({className:e,items:t=0})=>Object(r.h)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},t>0?Object(r.h)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}):Object(r.h)("path",{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"})),le=({className:e})=>Object(r.h)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.h)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"})),ue=({className:e})=>Object(r.h)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.h)("path",{d:"M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"}));var he=n(9);const pe=({className:e})=>Object(r.h)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.h)("path",{d:"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})),de=(e,t)=>()=>{e(t)},fe=Object(he.connect)(["isMenuOpen"],{setMenuOpen:(e,t)=>({isMenuOpen:t})})(({isMenuOpen:e,setMenuOpen:t})=>{const n=Object(r.h)(U,{className:ee.a.links},Object(r.h)(re.Link,{onClick:de(t,!1),activeClassName:ee.a.active,href:"/"},"Home"),Object(r.h)(re.Link,{onClick:de(t,!1),activeClassName:ee.a.active,href:"/products"},"Products"),Object(r.h)(re.Link,{onClick:de(t,!1),activeClassName:ee.a.active,href:"/farmers"},"Farmers & Crafters"));return Object(r.h)("div",null,Object(r.h)("div",{className:p(ee.a.sideMenu,e&&ee.a.open)},Object(r.h)("header",{className:ee.a.sideMenuHeader},Object(r.h)("button",{className:ee.a.closeBtn,onClick:de(t,!1)},Object(r.h)(pe,null))),n),Object(r.h)("div",{className:ee.a.navBar},Object(r.h)(l,{className:ee.a.wrapper},Object(r.h)(U,{className:ee.a.grid},Object(r.h)("div",{className:ne.a.showSM},Object(r.h)("button",{className:ee.a.menuBtn,onClick:de(t,!0)},Object(r.h)(ue,null))),Object(r.h)("div",{className:p(ee.a.logo,ne.a.hideXS)},"FairStore"),Object(r.h)(U,{className:ee.a.rightCol},Object(r.h)(ce,{className:ee.a.searchBar}),Object(r.h)("div",{className:p(ee.a.linksContainer,ne.a.hideSM)},n),Object(r.h)("div",{className:ee.a.iconsCol},Object(r.h)(se,{className:p(ee.a.cartIcon,ee.a.icon)}),Object(r.h)(le,{className:p(ee.a.personIcon,ee.a.icon)})))))))});var _e=n(7),me=n.n(_e),ve=n(16),be=n.n(ve);const ge=({color:e="primary",children:t})=>Object(r.h)("button",{className:p(be.a.button,be.a[e])},Object(r.h)("span",{className:be.a.container},t)),je=({className:e})=>Object(r.h)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.h)("path",{d:"M12 9c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1zm-5 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.38-6.13c.27-.48.09-1.09-.39-1.36-.48-.26-1.09-.09-1.35.39L15.55 11H8.53L4.54 2.57c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2z"}));var we=n(3),Oe=n.n(we);const ye=({className:e})=>Object(r.h)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.h)("path",{d:"M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"})),Se=({className:e})=>Object(r.h)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(r.h)("path",{d:"M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"}));var Me,Ne,Ce=[],xe=r.options.__r;r.options.__r=function(e){xe&&xe(e),Me=0,(Ne=e.__c).__H&&(Ne.__H.t=He(Ne.__H.t))};var ke=r.options.diffed;r.options.diffed=function(e){ke&&ke(e);var t=e.__c;if(t){var n=t.__H;n&&(n.u=(n.u.some((function(e){e.ref&&(e.ref.current=e.createHandle())})),[]),n.i=He(n.i))}};var Xe=r.options.unmount;function Pe(e){r.options.__h&&r.options.__h(Ne);var t=Ne.__H||(Ne.__H={o:[],t:[],i:[],u:[]});return e>=t.o.length&&t.o.push({}),t.o[e]}function Le(e){return function(e,t,n){var r=Pe(Me++);return r.__c||(r.__c=Ne,r.v=[n?n(t):Ge(void 0,t),function(t){var n=e(r.v[0],t);r.v[0]!==n&&(r.v[0]=n,r.__c.setState({}))}]),r.v}(Ge,e)}r.options.unmount=function(e){Xe&&Xe(e);var t=e.__c;if(t){var n=t.__H;n&&n.o.forEach((function(e){return e.l&&e.l()}))}};function Be(){Ce.some((function(e){e.s=!1,e.__P&&(e.__H.t=He(e.__H.t))})),Ce=[]}if("undefined"!=typeof window){var Te=r.options.requestAnimationFrame;(function(e){(!e.s&&(e.s=!0)&&1===Ce.push(e)||Te!==r.options.requestAnimationFrame)&&(Te=r.options.requestAnimationFrame,(r.options.requestAnimationFrame||function(e){var t=function(){clearTimeout(n),cancelAnimationFrame(r),setTimeout(e)},n=setTimeout(t,100),r=requestAnimationFrame(t)})(Be))})}function He(e){return e.forEach(Ue),e.forEach(ze),[]}function Ue(e){e.l&&e.l()}function ze(e){var t=e.v();"function"==typeof t&&(e.l=t)}function Ge(e,t){return"function"==typeof t?t(e):t}const Ae=(e,t)=>()=>{t>0&&t<=30&&e(t)},Ee=()=>{const[e,t]=Le(1);return Object(r.h)("div",{className:Oe.a.container},Object(r.h)("div",{className:Oe.a.inner},Object(r.h)("button",{onClick:Ae(t,e-1),className:p(Oe.a.button,Oe.a.less)},Object(r.h)(Se,null)),Object(r.h)("input",{disabled:!0,className:Oe.a.input,type:"number",value:e.toString()}),Object(r.h)("button",{onClick:Ae(t,e+1),className:p(Oe.a.button,Oe.a.add)},Object(r.h)(ye,null))))},Re=({productId:e})=>{const t=f.find(t=>t.id===e);return t?(e=>Object(r.h)(l,{verticalPadding:"1rem"},Object(r.h)(U,{className:me.a.grid},Object(r.h)("div",{className:me.a.image},Object(r.h)("img",{src:e.image})),Object(r.h)(U,{className:me.a.rightGrid},Object(r.h)("div",{className:me.a.details},Object(r.h)(d,{h3:!0,noTopMargin:!0,className:me.a.name},e.name),Object(r.h)(w,{big:!0,price:e.price}),Object(r.h)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),Object(r.h)("div",{className:me.a.buttons},Object(r.h)(Ee,null),Object(r.h)(ge,{color:"secondary"},"Add to cart",Object(r.h)(je,null)))))))(t):Object(r.h)(d,{h5:!0},"Product Not found")};var Ie=n(19),De=n.n(Ie);const Fe=()=>Object(r.h)("footer",{className:De.a.footer},Object(r.h)(l,null,Object(r.h)(d,{className:De.a.title,h5:!0},"Information"),Object(r.h)("a",{href:"#"},"About Us"),Object(r.h)("a",{href:"#"},"Privacy Policy"),Object(r.h)("a",{href:"#"},"Terms & Conditions")));function qe(e,t){for(var n in t)e[n]=t[n];return e}const We=document.getElementById("app"),Ve=function(e){var t=[];function n(e){for(var n=[],r=0;r<t.length;r++)t[r]===e?e=null:n.push(t[r]);t=n}function r(n,r,o){e=r?n:qe(qe({},e),n);for(var i=t,a=0;a<i.length;a++)i[a](e,o)}return e=e||{},{action:function(t){function n(e){r(e,!1,t)}return function(){for(var r=arguments,o=[e],i=0;i<arguments.length;i++)o.push(r[i]);var a=t.apply(this,o);if(null!=a)return a.then?a.then(n):n(a)}},setState:r,subscribe:function(e){return t.push(e),function(){n(e)}},unsubscribe:n,getState:function(){return e}}}({isMenuOpen:!1});Object(r.render)(Object(r.h)(he.Provider,{store:Ve},Object(r.h)(()=>Object(r.h)("div",{className:Q.a.app},Object(r.h)(fe,null),Object(r.h)("section",{className:Q.a.section},Object(r.h)(o.Router,null,Object(r.h)(z,{path:"/"}),Object(r.h)(D,{path:"/products"}),Object(r.h)(Re,{path:"/products/:productId"}),Object(r.h)(K,{path:"/farmers"})),Object(r.h)(Fe,null))),null)),We,We)}]);