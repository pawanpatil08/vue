<template>
	<div>
		<h1 class="text-primary">Filter Demo</h1>
		<h2 class="text-info">{{ name }}</h2>
		<h2 class="text-info">{{ name | Upper }}</h2>
		<h2 class="text-info">{{ name | Lower }}</h2>
		<hr />
		<h2 class="text-info">Global Filter</h2>
		<h2>{{ user | JSON }}</h2>
		<h2>{{ user | JSON | Upper }}</h2>
	</div>
</template>

<script>
	export default {
		name: "FilterDemo",
		data: function () {
			return {
				name: "Manish Sharma",
				user: {
					username: "msharma",
					email: "msh@gmail.com",
					countryCode: "India",
				},
			};
		},
		filters: {
			Upper: function (value) {
				return value.toUpperCase();
			},
			Lower: function (value) {
				return value.toLowerCase();
			},
		},
	};
</script>