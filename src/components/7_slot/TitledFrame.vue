<template>
	<div class="myframe">
        <header>
            <h2>
                <slot name="title">Header Title</slot>    
            </h2>
        </header>
        <slot>This is the default Content if nothing is sent</slot>
    </div>
</template>

<script>
	export default {
		name: "TitledFrame",
	};
</script>

<style scoped>
	.myframe {
		border: 2px solid blue;
	}
</style>