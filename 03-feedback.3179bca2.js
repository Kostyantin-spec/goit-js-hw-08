function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,i,o,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function w(e){return c=e,u=setTimeout(j,t),l?b(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=o}function j(){var e=v();if(x(e))return S(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?m(n,o-(e-c)):n}(e))}function S(e){return u=void 0,g&&r?b(e):(r=i=void 0,a)}function T(){var e=v(),n=x(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=i=u=void 0},T.flush=function(){return void 0===u?a:S(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const b={},w={form:document.querySelector(".feedback-form"),textarea:document.querySelector('textarea[name="message"'),email:document.querySelector('input[name="email"]')};w.form.addEventListener("submit",e(t)((function(e){e.preventDefault(),w.textarea.value="",w.email.value="",e.currentTarget.reset(),localStorage.removeItem("feedback-msg"),console.log(b)}),500)),w.form.addEventListener("input",e(t)((function(e){b[e.target.name]=e.target.value,localStorage.setItem("feedback-msg",JSON.stringify(b))}),500)),window.addEventListener("load",(function(){const e=JSON.parse(localStorage.getItem("feedback-msg"));null!==e&&(w.textarea.value=e.message,w.email.value=e.email)}));
//# sourceMappingURL=03-feedback.3179bca2.js.map