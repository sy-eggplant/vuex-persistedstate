var e=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var o=Object.prototype.toString.call(e);return"[object RegExp]"===o||"[object Date]"===o||function(e){return e.$$typeof===r}(e)}(e)},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(e,r){return!1!==r.clone&&r.isMergeableObject(e)?u(Array.isArray(e)?[]:{},e,r):e}function t(e,r,t){return e.concat(r).map(function(e){return o(e,t)})}function n(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(r){return e.propertyIsEnumerable(r)}):[]}(e))}function c(e,r){try{return r in e}catch(e){return!1}}function u(r,l,s){(s=s||{}).arrayMerge=s.arrayMerge||t,s.isMergeableObject=s.isMergeableObject||e,s.cloneUnlessOtherwiseSpecified=o;var i=Array.isArray(l);return i===Array.isArray(r)?i?s.arrayMerge(r,l,s):function(e,r,t){var l={};return t.isMergeableObject(e)&&n(e).forEach(function(r){l[r]=o(e[r],t)}),n(r).forEach(function(n){(function(e,r){return c(e,r)&&!(Object.hasOwnProperty.call(e,r)&&Object.propertyIsEnumerable.call(e,r))})(e,n)||(l[n]=c(e,n)&&t.isMergeableObject(r[n])?function(e,r){if(!r.customMerge)return u;var o=r.customMerge(e);return"function"==typeof o?o:u}(n,t)(e[n],r[n],t):o(r[n],t))}),l}(r,l,s):o(l,s)}u.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,o){return u(e,o,r)},{})};var l=u;function s(e){var r=(e=e||{}).storage||window&&window.localStorage,o=e.key||"vuex";function t(e,r){var o=r.getItem(e);try{return"string"==typeof o?JSON.parse(o):"object"==typeof o?o:void 0}catch(e){}}function n(){return!0}function c(e,r,o){return o.setItem(e,JSON.stringify(r))}function u(e,r){return console.log("reducer"),console.log(e),console.log(r),Array.isArray(r)?r.reduce(function(r,o){return function(e,r,o,t){return!/^(__proto__|constructor|prototype)$/.test(r)&&((r=r.split?r.split("."):r.slice(0)).slice(0,-1).reduce(function(e,r){return e[r]=e[r]||{}},e)[r.pop()]=o),e}(r,o,(t=e,void 0===(t=((n=o).split?n.split("."):n).reduce(function(e,r){return e&&e[r]},t))?void 0:t));var t,n},{}):e}function s(e){return console.log("[vuex-p]subscriber store"),console.log(e),function(r){return e.subscribe(r)}}(e.assertStorage||function(){console.log("[vuex-p]test"),r.setItem("@@",1),r.removeItem("@@")})(r);var i,a=function(){return(e.getState||t)(o,r)};return e.fetchBeforeUse&&(i=a()),function(t){e.fetchBeforeUse||(i=a()),"object"==typeof i&&null!==i&&(t.replaceState(e.overwrite?i:l(t.state,i,{arrayMerge:e.arrayMerger||function(e,r){return r},clone:!1})),(e.rehydrated||function(){})(t)),console.log("[vuex-p]subscriber"),console.log(s(t)),(e.subscriber||s)(t)(function(t,l){console.log("[vuex-p]state"),console.log(l),console.log("[vuex-p]options"),console.log(e),console.log("[vuex-p]filter"),console.log(n),console.log("[vuex-p]options.filter"),console.log(e.filter),console.log("[vuex-p]setState"),console.log(c),console.log("[vuex-p]options.setState"),console.log(e.setState),console.log("[vuex-p]options.reducer"),console.log(e.reducer),console.log("[vuex-p]reducer"),console.log(u),console.log("[vuex-p]options.paths"),console.log(e.paths),(e.filter||n)(t)&&(console.log("[vuex-p]in filter"),(e.setState||c)(o,(e.reducer||u)(l,e.paths),r))})}}export{s as default};
//# sourceMappingURL=vuex-persistedstate.es.js.map
