<template>
	<div>
		<h1 class="text-primary">Component With Props</h1>
		<h2 class="text-info">Id: {{ id }}</h2>
		<h2 class="text-info">Name: {{ name }}</h2>
		<h2 class="text-info">Address: {{ address }}</h2>
		<h2 class="text-info">Friends: {{ friends }}</h2>
	</div>
</template>

<script>
	export default {
		name: "ComponentWithProps",
		// props: ["id", "name", "address", "friends"],
		props: {
			// id: {
			// 	type: Number,
			// 	default: 0,
			// },
			id: {
				type: Symbol,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			address: {
				type: Object,
				required: true,
				validator: (obj) => {
					// Write a logic to verify the data
					// console.log(obj);
					Object.keys(obj).forEach((key) => {
						// Write a logic to verify keys in the object
						console.log(key);
					});
					return true;
				},
			},
			friends: {
				type: Array,
				required: true,
			},
			greet: {
				type: Function,
				default: function () {
					alert("From the Component");
				},
			},
		},
	};
</script>