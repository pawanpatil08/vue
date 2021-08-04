<template>
	<div class="myframe">
        <h1>This is the Frame Component</h1>
        <slot>This is the default Content if nothing is sent</slot>
    </div>
</template>

<script>
	export default {
		name: "Frame",
	};
</script>

<style scoped>
	.myframe {
		border: 2px solid blue;
	}
</style>