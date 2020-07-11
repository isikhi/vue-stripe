"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var STRIPE_CHECKOUT_URL="https://js.stripe.com",SUPPORTED_LANGS=["auto","da","de","en","es","fi","fr","it","ja","nb","nl","pl","pt","sv","zh"],SUPPORTED_SUBMIT_TYPES=["auto","book","donate","pay"],BILLING_ADDRESS_COLLECTION_TYPES=["required","auto"],loadStripeCheckout=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"v3",n=arguments.length>2?arguments[2]:void 0,r=document.createElement("script");r.src="".concat(STRIPE_CHECKOUT_URL,"/").concat(t),r.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(r),r.addEventListener("load",n)},script={props:{pk:{type:String,required:!0},mode:{type:String,required:void 0},lineItems:{type:Array,default:void 0},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return SUPPORTED_SUBMIT_TYPES.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return BILLING_ADDRESS_COLLECTION_TYPES.includes(e)}},clientReferenceId:{type:String,default:void 0},customerEmail:{type:String,default:void 0},sessionId:{type:String,default:void 0},locale:{type:String,default:"auto",validator:function(e){return SUPPORTED_LANGS.includes(e)}}},methods:{redirectToCheckout:function(){var e=this;this.$emit("loading",!0),loadStripeCheckout(this.pk,"v3",(function(){try{var t=window.Stripe(e.pk);e.sessionId?t.redirectToCheckout({sessionId:e.sessionId}):t.redirectToCheckout({billingAddressCollection:e.billingAddressCollection,cancelUrl:e.cancelUrl,clientReferenceId:e.clientReferenceId,customerEmail:e.customerEmail,lineItems:e.lineItems,locale:e.locale,mode:e.mode,submitType:e.submitType,successUrl:e.successUrl})}catch(t){console.error(t),e.$emit("error",t)}finally{e.$emit("loading",!1)}}))}}};function normalizeComponent(e,t,n,r,o,i,a,s,c,l){"boolean"!=typeof a&&(c=s,s=a,a=!1);const u="function"==typeof n?n.options:n;let d;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):t&&(d=a?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),d)if(u.functional){const e=u.render;u.render=function(t,n){return d.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,d):[d]}return n}const isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return(e,t)=>addStyle(e,t)}let HEAD;const styles={};function addStyle(e,t){const n=isOldIE?t.media||"default":e,r=styles[n]||(styles[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===HEAD&&(HEAD=document.head||document.getElementsByTagName("head")[0]),HEAD.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,t=document.createTextNode(n),o=r.element.childNodes;o[e]&&r.element.removeChild(o[e]),o.length?r.element.insertBefore(t,o[e]):r.element.appendChild(t)}}}const __vue_script__=script;var __vue_render__=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._t("checkout-button",[t("button",{on:{click:this.redirectToCheckout}},[this._v("Checkout")])])],2)},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;const __vue_inject_styles__=void 0,__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},void 0,__vue_script__,void 0,!1,void 0,!1,void 0,void 0,void 0);function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var runtime_1=createCommonjsModule((function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(e,t,n){var r=u;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===h)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?f:d,c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=f,n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u="suspendedStart",d="suspendedYield",p="executing",f="completed",h={};function m(){}function _(){}function v(){}var y={};y[i]=function(){return this};var g=Object.getPrototypeOf,A=g&&g(g(L([])));A&&A!==n&&r.call(A,i)&&(y=A);var b=v.prototype=m.prototype=Object.create(y);function E(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function w(e){var t;this._invoke=function(n,o){function i(){return new Promise((function(t,i){!function t(n,o,i,a){var s=l(e[n],e,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,i,a)}),(function(e){t("throw",e,i,a)})):Promise.resolve(u).then((function(e){c.value=e,i(c)}),(function(e){return t("throw",e,i,a)}))}a(s.arg)}(n,o,t,i)}))}return t=t?t.then(i,i):i()}}function x(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,x(e,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function L(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:t,done:!0}}return _.prototype=b.constructor=v,v.constructor=_,v[s]=_.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),w.prototype[a]=function(){return this},e.AsyncIterator=w,e.async=function(t,n,r,o){var i=new w(c(t,n,r,o));return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}})),regenerator=runtime_1;function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var defineProperty=_defineProperty;function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var script$1={props:{pk:{type:String,required:!0},amount:{type:Number,default:void 0},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"}},data:function(){return{loading:!1,stripe:null,elements:null,card:null}},computed:{style:function(){return{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},form:function(){return document.getElementById("payment-form")}},methods:{submit:function(){this.$refs.submitButtonRef.click()}},mounted:function(){var e=this;loadStripeCheckout(this.pk,"v3",(function(){var t={stripeAccount:e.stripeAccount,apiVersion:e.apiVersion,locale:e.locale};e.stripe=window.Stripe(e.pk,t),e.elements=e.stripe.elements(),e.card=e.elements.create("card",{style:e.style}),e.card.mount("#card-element"),e.card.addEventListener("change",(function(e){var t=e.error,n=document.getElementById("card-errors");n.textContent=t?t.message:""})),e.form.addEventListener("submit",(function(t){var n,r,o,i;return regenerator.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,e.$emit("loading",!0),t.preventDefault(),n=_objectSpread({},e.card),e.amount&&(n.amount=e.amount),a.next=7,regenerator.awrap(e.stripe.createToken(n));case 7:r=a.sent,o=r.token,(i=r.error)?(document.getElementById("card-errors").textContent=i.message,console.error(i),e.$emit("error 1",i)):e.$emit("token",o),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(0),console.error(a.t0),e.$emit("error",a.t0);case 17:return a.prev=17,e.$emit("loading",!1),a.finish(17);case 20:case"end":return a.stop()}}),null,null,[[0,13,17,20]])}))}))}};const __vue_script__$1=script$1;var __vue_render__$1=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("form",{attrs:{id:"payment-form"}},[this._t("card-element",[t("div",{attrs:{id:"card-element"}})]),this._v(" "),this._t("card-errors",[t("div",{attrs:{id:"card-errors",role:"alert"}})]),this._v(" "),t("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},__vue_staticRenderFns__$1=[];__vue_render__$1._withStripped=!0;const __vue_inject_styles__$1=function(e){e&&e("data-v-469737cd_0",{source:"\n.StripeElement[data-v-469737cd] {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n.StripeElement--focus[data-v-469737cd] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n.StripeElement--invalid[data-v-469737cd] {\n  border-color: #fa755a;\n}\n.StripeElement--webkit-autofill[data-v-469737cd] {\n  background-color: #fefde5 !important;\n}\n.hide[data-v-469737cd] {\n  visibility: hidden;\n}\n",map:{version:3,sources:["/Users/ivgtr/Desktop/to6/2020/project/vue-stripe-fix/vue-stripe-checkout/src/Elements.vue"],names:[],mappings:";AA6HA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,kBAAA;AACA",file:"Elements.vue",sourcesContent:["<template>\n  <div>\n    <form id=\"payment-form\">\n      <slot name=\"card-element\">\n        <div id=\"card-element\"></div>\n      </slot>\n      <slot name=\"card-errors\">\n        <div id=\"card-errors\" role=\"alert\"></div>\n      </slot>\n      <button ref=\"submitButtonRef\" type=\"submit\" class=\"hide\"></button>\n    </form>\n  </div>\n</template>\n\n<script>\nimport { loadStripeCheckout } from './load-checkout';\nexport default {\n  props: {\n    pk: {\n      type: String,\n      required: true\n    },\n    amount: {\n      type: Number,\n      default: undefined\n    },\n    stripeAccount: {\n      type: String,\n      default: undefined,\n    },\n    apiVersion: {\n      type: String,\n      default: undefined,\n    },\n    locale: {\n      type: String,\n      default: 'auto',\n    },\n  },\n  data () {\n    return {\n      loading: false,\n      stripe: null,\n      elements: null,\n      card: null\n    }\n  },\n  computed: {\n    style () {\n      return {\n        base: {\n          color: '#32325d',\n          fontFamily: '\"Helvetica Neue\", Helvetica, sans-serif',\n          fontSmoothing: 'antialiased',\n          fontSize: '16px',\n          '::placeholder': {\n            color: '#aab7c4'\n          }\n        },\n        invalid: {\n          color: '#fa755a',\n          iconColor: '#fa755a'\n        }\n      };\n    },\n    form () {\n      return document.getElementById('payment-form');\n    }\n  },\n  methods: {\n    submit () {\n      this.$refs.submitButtonRef.click();\n    }\n  },\n  mounted () {\n    loadStripeCheckout(this.pk, 'v3', () => {\n      const options = {\n        stripeAccount: this.stripeAccount,\n        apiVersion: this.apiVersion,\n        locale: this.locale,\n      };\n      this.stripe = window.Stripe(this.pk, options);\n      this.elements = this.stripe.elements();\n      this.card = this.elements.create('card', { style: this.style });\n      this.card.mount('#card-element');\n\n      this.card.addEventListener('change', ({ error }) => {\n        const displayError = document.getElementById('card-errors');\n        if (error) {\n          displayError.textContent = error.message;\n        } else {\n          displayError.textContent = '';\n        }\n      });\n      \n      this.form.addEventListener('submit', async (event) => {\n        try {\n          this.$emit('loading', true);\n          event.preventDefault();\n          const data = {\n            ...this.card\n          };\n          if (this.amount) data.amount = this.amount;\n          const { token, error } = await this.stripe.createToken(data);\n          if (error) {\n            const errorElement = document.getElementById('card-errors');\n            errorElement.textContent = error.message;\n            console.error(error);\n            this.$emit('error 1', error);\n          } else {\n            this.$emit('token', token);\n          }\n        } catch (error) {\n          console.error(error);\n          this.$emit('error', error);\n        } finally {\n          this.$emit('loading', false);\n        }\n      });\n    });\n  }\n}\n<\/script>\n\n<style scoped>\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.hide {\n  visibility: hidden;\n}\n</style>"]},media:void 0})},__vue_scope_id__$1="data-v-469737cd",__vue_module_identifier__$1=void 0,__vue_is_functional_template__$1=!1,__vue_component__$1=normalizeComponent({render:__vue_render__$1,staticRenderFns:__vue_staticRenderFns__$1},__vue_inject_styles__$1,__vue_script__$1,"data-v-469737cd",!1,void 0,!1,createInjector,void 0,void 0);exports.StripeCheckout=__vue_component__,exports.StripeElements=__vue_component__$1;
