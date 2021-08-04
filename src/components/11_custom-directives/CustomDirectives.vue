<template>
	<div>
		<ul class="list-group">
			<li v-for="e in employees" v-bind:key="e.id" class="list-group-item" v-highlight="'skyblue'">
				{{ e.name }}
			</li>
		</ul>

		<h3 v-cc></h3>
		<p v-cc></p>
		<div v-cc></div>
		<span v-cc></span>
		<h3 v-demo:data.test.a="'Hello from Root'"></h3>
	</div>
</template>

<script>
	export default {
		name: "CustomDirectives",
		data() {
			return {
				employees: [
					{ id: 1, name: "Manish" },
					{ id: 2, name: "Abhijeet" },
					{ id: 3, name: "Ramakant" },
					{ id: 4, name: "Subodh" },
					{ id: 5, name: "Abhishek" },
				],
			};
		},
	};
</script>