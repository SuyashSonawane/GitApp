(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55adf659"],{"0790":function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"a",function(){return i}),e.d(n,"c",function(){return a});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},r(t,n)};function o(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function i(t,n,e,r){return new(e||(e=Promise))(function(o,i){function a(t){try{c(r.next(t))}catch(n){i(n)}}function u(t){try{c(r["throw"](t))}catch(n){i(n)}}function c(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(a,u)}c((r=r.apply(t,n||[])).next())})}function a(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(t){return function(n){return c([t,n])}}function c(i){if(e)throw new TypeError("Generator is already executing.");while(a)try{if(e=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(u){i=[6,u],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}},"358e":function(t,n,e){"use strict";e.r(n),e.d(n,"IonAvatar",function(){return i}),e.d(n,"IonBadge",function(){return a}),e.d(n,"IonThumbnail",function(){return u});var r=e("7018"),o=e("77a5"),i=function(){function t(){}return t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t)}},t.prototype.render=function(){return Object(r["b"])("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-avatar"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(){}return t.prototype.hostData=function(){var t;return{class:Object.assign({},Object(o["c"])(this.color),(t={},t[""+this.mode]=!0,t))}},t.prototype.render=function(){return Object(r["b"])("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-badge"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),u=function(){function t(){}return t.prototype.hostData=function(){var t;return{class:(t={},t[""+this.mode]=!0,t)}},t.prototype.render=function(){return Object(r["b"])("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-thumbnail"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"},enumerable:!0,configurable:!0}),t}()},"77a5":function(t,n,e){"use strict";e.d(n,"a",function(){return u}),e.d(n,"b",function(){return d}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return o});var r=e("0790");function o(t,n){return null!==n.closest(t)}function i(t){var n;return"string"==typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0}function a(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}function u(t){var n={};return a(t).forEach(function(t){return n[t]=!0}),n}var c=/^[a-z][a-z0-9+\-.]*:/;function d(t,n,e,o){return r["a"](this,void 0,void 0,function(){var i;return r["c"](this,function(r){switch(r.label){case 0:return null==n||"#"===n[0]||c.test(n)?[3,2]:(i=t.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return r.sent(),[2,i.push(n,o)];case 2:return[2,!1]}})})}}}]);
//# sourceMappingURL=chunk-55adf659.de60086d.js.map