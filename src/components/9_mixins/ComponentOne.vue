<template>
	<div>
		<h1 class="text-info">Hello from Component One</h1>
		<button
			class="btn btn-primary"
			@click="handleClick('You Clicked - ComponentOne Button')"
		>
			Click Me
		</button>
		<button
			class="btn btn-primary"
			@click="onClick('You Clicked - ComponentOne Button')"
		>
			Click Me
		</button>
	</div>
</template>

<script>
	import clickMixin from "../../mixins/onClick.mixin";
	export default {
		name: "ComponentOne",
		methods: {
			handleClick(value) {
				alert(`From C1 - ${value}`);
			},
		},
		mixins: [clickMixin],
	};
</script>