function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var r=o("8zd4h");const l=document.querySelector(".feedback-form"),s=l.querySelector('input[name="email"]'),d=l.querySelector('textarea[name="message"]'),i=e(r)((()=>{const e={email:s.value,message:d.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);s.addEventListener("input",i),d.addEventListener("input",i),l.addEventListener("submit",(e=>{e.preventDefault();const t={email:s.value,message:d.value};console.log(t),localStorage.removeItem("feedback-form-state"),l.reset()})),document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);s.value=t.email,d.value=t.message}}));
//# sourceMappingURL=03-feedback.4c259146.js.map
