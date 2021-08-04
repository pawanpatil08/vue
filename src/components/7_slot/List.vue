<template>
	<div>
		<slot v-for="item in items" :item="item">
			<!-- UI in Scope -->
		</slot>
	</div>
</template>

<script>
	export default {
		name: "List",
		props: {
			items: {
				type: Array,
				default: () => [],
			},
		},
	};
</script>