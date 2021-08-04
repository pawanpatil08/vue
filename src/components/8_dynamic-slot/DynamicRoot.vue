<template>
	<div>
		<!-- <component-one />
		<component-two /> -->

		<!-- <button class="btn btn-primary" @click="toggle">Toggle</button>
		<hr />
		<component :is="comp" /> -->

		<button class="btn btn-primary" @click="toggle">Toggle</button>
		<hr />
		<keep-alive>
			<component :is="comp" />
		</keep-alive>
	</div>
</template>

<script>
	import ComponentOne from "./ComponentOne.vue";
	import ComponentTwo from "./ComponentTwo.vue";
	export default {
		components: { ComponentOne, ComponentTwo },
		name: "DynamicRoot",
		data: function () {
			return {
				comp: ComponentOne,
			};
		},
		methods: {
			toggle() {
				if (this.comp === ComponentOne) {
					this.comp = ComponentTwo;
				} else {
					this.comp = ComponentOne;
				}
			},
		},
	};
</script>