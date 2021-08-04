import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
Vue.config.productionTip = false
// npm i vee-validate
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
  // console.log(rule);
  extend(rule, rules[rule]);
});

extend("required", {
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined, false].indexOf(value) === -1,
    };
  },
  computesRequired: true,
  message: "This field is required",
});

localize('en', en);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  render: h => h(App),
}).$mount('#app')




// Template Compilation is possible on Build, when we write single file component 
// By default cli projects are configured for runtime-only build, which does not include template compiler
// Enable runtimeCompiler: true in vue.config.js (Include Runtime and Compiler both in the build)
// This will be required when we write templates in string format
// new Vue({
//   el: '#app',
//   template: `
//     <h1>
//       Hello from Main Vue
//     </h1>
//   `
// });

// const componentOne = {
//   template: `
//     <h1 class="text-info">
//       Hello from component One
//     </h1>
//   `
// };
// const componentTwo = {
//   template: `
//     <h1 class="text-success">
//       Hello from component Two
//     </h1>
//   `
// };


// new Vue({
//   el: '#app',
//   template: `
//     <div>
//       <componentOne/>
//       <componentTwo />
     
//     </div>
//   `,
//   // components: { GreetingComponent }   // Local Component Registration
//   components: { 
//    componentOne,
//     componentTwo                   // Local Component Registration with Identifier 
//   }   
// });


// new Vue({
//   render: (h) => h(componentOne)
// }).$mount("#app");
