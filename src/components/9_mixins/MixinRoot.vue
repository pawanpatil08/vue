<template>
	<div>
		<component-one />
		<component-two />
	</div>
</template>

<script>
	import ComponentOne from "./ComponentOne.vue";
	import ComponentTwo from "./ComponentTwo.vue";
	export default {
		components: { ComponentOne, ComponentTwo },
		name: "MixinRoot"
	};
</script>