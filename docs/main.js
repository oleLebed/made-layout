!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=2)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(s=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),r=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")});return[t].concat(r).concat([i]).join("\n")}var s,a,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var s=0;s<n.length;s++){var a=n[s];null!=a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="(".concat(a[2],") and (").concat(t,")")),e.push(a))}},e}},function(n,e,t){var o,i,r={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),a=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var o=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}}(),c=null,f=0,l=[],u=t(5);function d(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(y(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(y(o.parts[s],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function p(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(a):t.push(o[s]={id:s,parts:[a]})}return t}function m(n,e){var t=a(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(n.insertAt.before,t);t.insertBefore(e,i)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return t.nc}();o&&(n.attrs.nonce=o)}return g(e,n.attrs),m(n,e),e}function g(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function y(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=r}if(e.singleton){var s=f++;t=c||(c=h(e)),o=w.bind(null,t,s,!1),i=w.bind(null,t,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(e,n.attrs),m(n,e),e}(e),o=function(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=u(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,e),i=function(){b(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){b(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=p(n,e);return d(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var s=t[i];(a=r[s.id]).refs--,o.push(a)}n&&d(p(n,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var x,v=(x=[],function(n,e){return x[n]=e,x.filter(Boolean).join("\n")});function w(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=v(e,i);else{var r=document.createTextNode(i),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(r,s[e]):n.appendChild(r)}}},function(n,e,t){"use strict";t.r(e);t(3),t(6);const o=document.getElementsByClassName("section-1__form-input"),i=document.getElementById("hide"),r=document.getElementById("hide-small");Array.from(o).forEach(n=>n.addEventListener("input",()=>{const e=n.clientHeight>40?i:r;e.textContent=n.value,n.style.width=e.offsetWidth+"px"}))},function(n,e,t){var o=t(4);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type="search"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n',""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){var o=t(7);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){e=n.exports=t(0)(!1);var o=t(8),i=o(t(9)),r=o(t(10)),s=o(t(11));e.push([n.i,"@font-face {\n  font-family: Ubuntu;\n  src: url("+i+"); }\n\n@font-face {\n  font-family: UbuntuItalic;\n  src: url("+r+"); }\n\nhtml {\n  font-size: 20px; }\n\n#hide,\n#hide-small {\n  position: absolute;\n  height: 0;\n  overflow: hidden;\n  white-space: pre; }\n\nbody {\n  user-select: none; }\n\n.section-1 {\n  align-items: center;\n  background-color: #ee5454;\n  display: flex;\n  flex-direction: column; }\n  .section-1__logo {\n    background: url("+s+") no-repeat;\n    margin-bottom: 87px;\n    margin-top: 37px;\n    min-height: 45px;\n    min-width: 117px; }\n  .section-1__form {\n    color: #fff;\n    font-family: Ubuntu, sans-serif;\n    font-size: 1.8rem;\n    text-align: center; }\n  .section-1__form-input {\n    min-width: 220px;\n    width: 220px;\n    background: transparent;\n    border: none;\n    border-bottom: solid 2px #ff7571;\n    color: #fff; }\n    .section-1__form-input_mail {\n      min-width: 350px;\n      width: 350px; }\n    .section-1__form-input_tel {\n      min-width: 323px;\n      width: 323px; }\n  .section-1__form-input:focus {\n    outline: none; }\n  .section-1__form-input-prefix {\n    color: #eeb0ae;\n    font-family: Ubuntu, sans-serif;\n    font-size: 1rem;\n    line-height: 1.5;\n    text-align: left; }\n  .section-1__form-contacts {\n    display: inline-block; }\n  .section-1__form-submit {\n    cursor: pointer;\n    background-color: #fff;\n    border: solid 1px #fff;\n    border-radius: 6px;\n    color: #ee5454;\n    height: 47px;\n    font-family: Arial, sans-serif;\n    font-size: .85rem;\n    margin-top: 52px;\n    outline: none;\n    width: 212px; }\n  .section-1__form-submit:hover {\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);\n    color: #000000; }\n  .section-1__form-submit:active {\n    color: rgba(0, 0, 0, 0.7); }\n  .section-1__info {\n    padding: 40px 0 45px 0;\n    text-align: center; }\n  .section-1__info-item {\n    display: inline-block;\n    margin: 15px 30px; }\n  .section-1__info-main {\n    font-family: Arial, sans-serif;\n    font-size: 1.65rem;\n    font-weight: bold;\n    color: #ffcece; }\n  .section-1__info-comment-bold {\n    font-family: Arial, sans-serif;\n    font-size: .75rem;\n    font-weight: bold;\n    color: #ffcece; }\n  .section-1__info-comment {\n    font-family: Arial, sans-serif;\n    font-size: .75rem;\n    color: #ffcece; }\n\n.section-2 {\n  padding: 75px 0;\n  text-align: center; }\n  .section-2__title {\n    color: #ee5454;\n    font-family: Ubuntu, sans-serif;\n    font-size: 2.8rem;\n    margin-bottom: 50px; }\n  .section-2__sub-title {\n    font-family: Ubuntu, sans-serif;\n    font-size: 2.8rem; }\n  .section-2__info-item {\n    display: inline-block;\n    font-family: Arial, sans-serif;\n    font-size: 20px;\n    margin: 50px 20px 20px 20px; }\n  .section-2__info-comment-bold {\n    font-weight: bold;\n    margin-bottom: 40px; }\n  .section-2__button {\n    background-color: #ee5454;\n    border: none;\n    border-radius: 6px;\n    display: block;\n    color: #fff;\n    cursor: pointer;\n    font-family: Arial, sans-serif;\n    font-size: .85rem;\n    height: 47px;\n    margin: 20px auto 0;\n    outline: none;\n    width: 212px; }\n  .section-2__button:hover {\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2); }\n  .section-2__button:active {\n    color: rgba(255, 255, 255, 0.7); }\n\n.section-4 {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding: 5rem 3rem; }\n  .section-4__title {\n    color: #ee5454;\n    font-family: Ubuntu, sans-serif;\n    font-size: 2rem;\n    font-weight: 500;\n    margin-bottom: 4rem;\n    text-align: center; }\n  .section-4__list {\n    counter-reset: li;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  .section-4__list-item {\n    margin: 0 auto 30px; }\n  .section-4__list-item:before {\n    border: 1px solid #ee5454;\n    border-radius: 50%;\n    color: #ee5454;\n    content: counter(li);\n    counter-increment: li;\n    font-size: .75rem;\n    font-weight: bold;\n    text-align: center;\n    position: absolute;\n    padding: .3rem .5rem; }\n  .section-4__list-item-title {\n    font-family: Ubuntu, sans-serif;\n    font-size: 1.25rem;\n    margin-bottom: .5rem;\n    margin-left: 2rem; }\n  .section-4__list-item-comment {\n    font-size: .75rem;\n    margin-left: 2rem; }\n\n.section-5 {\n  background-image: linear-gradient(to bottom, #e8eef6, #eefdff);\n  padding: 100px 25px;\n  text-align: center; }\n  .section-5__title {\n    font-family: Ubuntu, sans-serif;\n    font-size: 2rem;\n    font-weight: 500;\n    margin-bottom: 35px; }\n  .section-5__comment {\n    margin-top: 25px; }\n  .section-5__info {\n    display: flex;\n    justify-content: center;\n    margin: 4rem 0; }\n  .section-5__info-item {\n    margin: 0 1rem; }\n  .section-5__info-item-title {\n    font-size: 1.25rem;\n    font-weight: 500;\n    margin-bottom: 1rem; }\n  .section-5__info-item-comment {\n    font-size: .75rem; }\n",""])},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){n.exports=t.p+"fb4c7f5813a0ec14f77da2fb523e3516.ttf"},function(n,e,t){n.exports=t.p+"669a64a5df65f7d143c69c09324e926c.ttf"},function(n,e,t){n.exports=t.p+"11a6b410306a17c8b3820463eab9a8d2.svg"}]);
//# sourceMappingURL=main.js.map