!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e||self).createPersistedState=o()}(this,function(){var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)},o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function t(e,o){return!1!==o.clone&&o.isMergeableObject(e)?u(Array.isArray(e)?[]:{},e,o):e}function r(e,o,r){return e.concat(o).map(function(e){return t(e,r)})}function n(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(o){return e.propertyIsEnumerable(o)}):[]}(e))}function c(e,o){try{return o in e}catch(e){return!1}}function u(o,l,s){(s=s||{}).arrayMerge=s.arrayMerge||r,s.isMergeableObject=s.isMergeableObject||e,s.cloneUnlessOtherwiseSpecified=t;var i=Array.isArray(l);return i===Array.isArray(o)?i?s.arrayMerge(o,l,s):function(e,o,r){var l={};return r.isMergeableObject(e)&&n(e).forEach(function(o){l[o]=t(e[o],r)}),n(o).forEach(function(n){(function(e,o){return c(e,o)&&!(Object.hasOwnProperty.call(e,o)&&Object.propertyIsEnumerable.call(e,o))})(e,n)||(l[n]=c(e,n)&&r.isMergeableObject(o[n])?function(e,o){if(!o.customMerge)return u;var t=o.customMerge(e);return"function"==typeof t?t:u}(n,r)(e[n],o[n],r):t(o[n],r))}),l}(o,l,s):t(l,s)}u.all=function(e,o){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,t){return u(e,t,o)},{})};var l=u;return function(e){var o=(e=e||{}).storage||window&&window.localStorage,t=e.key||"vuex";function r(e,o){var t=o.getItem(e);try{return"string"==typeof t?JSON.parse(t):"object"==typeof t?t:void 0}catch(e){}}function n(){return!0}function c(e,o,t){return t.setItem(e,JSON.stringify(o))}function u(e,o){return console.log("reducer"),console.log(e),console.log(o),Array.isArray(o)?o.reduce(function(o,t){return function(e,o,t,r){return!/^(__proto__|constructor|prototype)$/.test(o)&&((o=o.split?o.split("."):o.slice(0)).slice(0,-1).reduce(function(e,o){return e[o]=e[o]||{}},e)[o.pop()]=t),e}(o,t,(r=e,void 0===(r=((n=t).split?n.split("."):n).reduce(function(e,o){return e&&e[o]},r))?void 0:r));var r,n},{}):e}function s(e){return console.log("[vuex-p]subscriber store"),console.log(e),function(o){return e.subscribe(o)}}(e.assertStorage||function(){console.log("[vuex-p]test"),o.setItem("@@",1),o.removeItem("@@")})(o);var i,a=function(){return(e.getState||r)(t,o)};return e.fetchBeforeUse&&(i=a()),function(r){e.fetchBeforeUse||(i=a()),"object"==typeof i&&null!==i&&(r.replaceState(e.overwrite?i:l(r.state,i,{arrayMerge:e.arrayMerger||function(e,o){return o},clone:!1})),(e.rehydrated||function(){})(r)),console.log("[vuex-p]subscriber"),console.log(s(r)),(e.subscriber||s)(r)(function(r,l){console.log("[vuex-p]state"),console.log(l),console.log("[vuex-p]options"),console.log(e),console.log("[vuex-p]filter"),console.log(n),console.log("[vuex-p]options.filter"),console.log(e.filter),console.log("[vuex-p]setState"),console.log(c),console.log("[vuex-p]options.setState"),console.log(e.setState),console.log("[vuex-p]options.reducer"),console.log(e.reducer),console.log("[vuex-p]reducer"),console.log(u),console.log("[vuex-p]options.paths"),console.log(e.paths),(e.filter||n)(r)&&(console.log("[vuex-p]in filter"),(e.setState||c)(t,(e.reducer||u)(l,e.paths),o))})}}});
//# sourceMappingURL=vuex-persistedstate.umd.js.map
