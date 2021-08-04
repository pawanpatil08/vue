<template>
	<div>
		<h2 class="text-primary">Component with Internal Data</h2>
		<h2 class="text-info">Hello, {{ name }}</h2>
		<h2 class="text-info" v-html="name">Hello</h2>
		<h2 class="text-info" v-text="name">Hello</h2>
		<input type="text" v-bind:value="name" />

		<hr />
		<h2 class="text-success" v-bind:hidden="!flag">Hello, I am hidden</h2>
		<h2 class="text-success" :hidden="!flag">Hello, I am hidden</h2>
		<h2 class="text-success" v-show="flag">Hello, I am hidden</h2>
		<h2 class="text-success" v-if="flag">Hello, I am hidden</h2>

		<hr />
		<h2 class="text-warning">List Rendering</h2>
		<ul class="list-group">
			<li
				class="list-group-item"
				v-for="employee in employees"
				v-bind:key="employee.id"
			>
				{{ employee.name }}
			</li>
		</ul>

		<hr />
		<h2 class="text-info">Computed</h2>
		<h2 class="text-info">num: {{ num }}</h2>
		<h2 class="text-info">num: {{ num * 2 }}</h2>
		<h2 class="text-info">Computed num: {{ numDouble }}</h2>
	</div>
</template>

<script>
	export default {
		name: "ComponentWithData",
		data: function () {
			this.city = "Pune";
			return {
				num: 20,
				name: "Synechron",
				flag: false,
				employees: [
					{ id: 1, name: "Manish" },
					{ id: 2, name: "Abhijeet" },
					{ id: 3, name: "Ramakant" },
					{ id: 4, name: "Subodh" },
					{ id: 5, name: "Abhishek" },
				],
			};
		},
		computed: {
			numDouble: function () {
				return this.num * 2;
			},
		},
	};
</script>