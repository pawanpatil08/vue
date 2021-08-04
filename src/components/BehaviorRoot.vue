<template>
	<div>
		<component-with-behavior
			:name="'Manish'"
			:address="{ city: 'Pune', state: 'MH' }"
		/>
	</div>
</template>

<script>
	import ComponentWithBehavior from "./ComponentWithBehavior.vue";
	export default {
		components: { ComponentWithBehavior },
		name: "BehaviorRoot",
	};
</script>