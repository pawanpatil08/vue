// https://1drv.ms/u/s!Ao-ceLq5rZm3hqoC4fYZl9zsejQ3bw?e=q3nFaU

<template>
	<div>
		<h1 class="text-success">Hello from Component Two</h1>
	</div>
</template>

<script>
	export default {
		name: "ComponentTwo",
		destroyed: function () {
			console.log("Component Two Destroyed");
		},
	};
</script>