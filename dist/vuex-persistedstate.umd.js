!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e||self).createPersistedState=r()}(this,function(){var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function t(e,r){return!1!==r.clone&&r.isMergeableObject(e)?u(Array.isArray(e)?[]:{},e,r):e}function n(e,r,n){return e.concat(r).map(function(e){return t(e,n)})}function o(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return e.propertyIsEnumerable(r)}):[]}(e))}function c(e,r){try{return r in e}catch(e){return!1}}function u(r,i,s){(s=s||{}).arrayMerge=s.arrayMerge||n,s.isMergeableObject=s.isMergeableObject||e,s.cloneUnlessOtherwiseSpecified=t;var a=Array.isArray(i);return a===Array.isArray(r)?a?s.arrayMerge(r,i,s):function(e,r,n){var i={};return n.isMergeableObject(e)&&o(e).forEach(function(r){i[r]=t(e[r],n)}),o(r).forEach(function(o){(function(e,r){return c(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))})(e,o)||(i[o]=c(e,o)&&n.isMergeableObject(r[o])?function(e,r){if(!r.customMerge)return u;var t=r.customMerge(e);return"function"==typeof t?t:u}(o,n)(e[o],r[o],n):t(r[o],n))}),i}(r,i,s):t(i,s)}u.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,t){return u(e,t,r)},{})};var i=u;return function(e){var r=(e=e||{}).storage||window&&window.localStorage,t=e.key||"vuex";function n(e,r){var t=r.getItem(e);try{return"string"==typeof t?JSON.parse(t):"object"==typeof t?t:void 0}catch(e){}}function o(){return!0}function c(e,r,t){return t.setItem(e,JSON.stringify(r))}function u(e,r){return console.log("reducer"),console.log(e),console.log(r),Array.isArray(r)?r.reduce(function(r,t){return function(e,r,t,n){return!/^(__proto__|constructor|prototype)$/.test(r)&&((r=r.split?r.split("."):r.slice(0)).slice(0,-1).reduce(function(e,r){return e[r]=e[r]||{}},e)[r.pop()]=t),e}(r,t,(n=e,void 0===(n=((o=t).split?o.split("."):o).reduce(function(e,r){return e&&e[r]},n))?void 0:n));var n,o},{}):e}function s(e){return function(r){return e.subscribe(r)}}(e.assertStorage||function(){console.log("[vuex-p]test"),r.setItem("@@",1),r.removeItem("@@")})(r);var a,l=function(){return(e.getState||n)(t,r)};return e.fetchBeforeUse&&(a=l()),function(n){e.fetchBeforeUse||(a=l()),"object"==typeof a&&null!==a&&(n.replaceState(e.overwrite?a:i(n.state,a,{arrayMerge:e.arrayMerger||function(e,r){return r},clone:!1})),(e.rehydrated||function(){})(n)),(e.subscriber||s)(n)(function(n,i){console.log("[vuex-p]state"),console.log(i),console.log("[vuex-p]options"),console.log(e),console.log("[vuex-p]options.reducer"),console.log(e.reducer),console.log("[vuex-p]reducer"),console.log(u),console.log("[vuex-p]options.paths"),console.log(e.paths),(e.filter||o)(n)&&(e.setState||c)(t,(e.reducer||u)(i,e.paths),r)})}}});
//# sourceMappingURL=vuex-persistedstate.umd.js.map
