<template>
	<div>
		<h1 class="text-success">Hello from Component Two</h1>
		<button
			class="btn btn-success"
			@click="handleClick('You Clicked - ComponentTwo Button')"
		>
			Click Me
		</button>
		<button
			class="btn btn-success"
			@click="onClick('You Clicked - ComponentTwo Button')"
		>
			Click Me
		</button>
	</div>
</template>

<script>
	import clickMixin from "../../mixins/onClick.mixin";

	export default {
		name: "ComponentTwo",
		methods: {
			handleClick(value) {
				alert(`From C2 - ${value}`);
			},
		},
		mixins: [clickMixin],
	};
</script>