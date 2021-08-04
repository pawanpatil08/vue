<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <component-one />
    <component-two />
    <component-three /> -->
    <!-- <component-module-css/> -->
<!-- <component-with-data/> -->
		<!-- <component-with-props
			:id="id"
			:name="'Manish'"
			:address="{ city: 'Pune', state: 'MH' }"
			:friends="fList"
		/> -->
    <!-- <behavior-root/> -->
    <!-- <binding-component/> -->
  <!-- <calculator-assignment/> -->
  <!-- <counter-assignment/> -->
<!-- <counter-assignment/> -->

<!-- <dynamic-root/> -->

<!-- <slot-root/> -->
<!-- <mixin-root/> -->
<!-- <form-root/> -->

<!-- <form-validation/> -->

<ajax-component/>
  </div>
</template>

<script>
import AjaxComponent from './components/3_ajax/AjaxComponent.vue';
// import MixinRoot from './components/9_mixins/MixinRoot.vue';
// import FormRoot from './components/assignment/formRoot.vue';
// import CounterAssignment from './components/6_counter-assignment/CounterAssignment.vue';
// import SlotRoot from './components/7_slot/SlotRoot.vue';
// import DynamicRoot from './components/8_dynamic-slot/DynamicRoot.vue';
// import CalculatorAssignment from './components/CalculatorAssignment.vue';
// import CounterAssignment from './components/counter-assignment/CounterAssignment.vue';
// import BindingComponent from './components/BindingComponent.vue';
// import BehaviorRoot from './components/BehaviorRoot.vue';
// import HelloWorld from './components/HelloWorld.vue'
// import componentOne from "./components/componentOne.vue";
// import ComponentTwo from "./components/ComponentTwo.vue";
// import ComponentThree from "./components/componentThree.vue";
// import  ComponentWithData  from "./components/componentData.vue";
	// import ComponentWithProps from "./components/ComponentWithProps.vue";
// import componentModuleCss from "./components/componentModuleCss.vue";
// import FormValidation from './components/3_FormValidation/FormValidation.vue'
export default {
  name: "App",
  components: {
    // FormValidation,
    AjaxComponent
    // MixinRoot,
    // FormRoot
    // CalculatorAssignment,
    // CounterAssignment,
    // SlotRoot,
    // DynamicRoot,
    // CounterAssignment
    // BindingComponent
    // HelloWorld,
    // componentOne,
    // ComponentTwo,
    // ComponentThree,
    // ComponentWithProps,
    // BehaviorRoot
    // componentModuleCss,
    
  },
  data: function () {
			return {
				fList: ["Abhijeet", "Ramakant"],
                id: Symbol(1)
			};
		},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 10px;
  padding:0% 20%;
  /* padding:5%; */
}
</style>
