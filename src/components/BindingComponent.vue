<template>
	<div>
		<div class="row">
			<div class="col">
				<label>v-bind</label>
				<input class="form-control" type="text" v-bind:value="id" />
			</div>
			<div class="col">
				<label>v-bind</label>
				<input class="form-control" type="text" :value="id" />
			</div>
		</div>

		<div class="row">
			<div class="col">
				<label>v-bind</label>
				<input class="form-control" type="text" v-model="id" />
			</div>
			<div class="col">
				<label>v-bind</label>
				<input class="form-control" type="number" v-model="id" />
			</div>
		</div>

		<div class="row">
			<div class="col">
				<label>v-bind</label>
				<input class="form-control" type="text" v-model.number="id" />
			</div>
			<div class="col">
				<label>v-bind</label>
				<input class="form-control" type="number" v-model.number="id" />
			</div>
			<div class="col">
				<label>v-bind</label>
				<input class="form-control" type="number" v-model.number.lazy="id" />
			</div>
		</div>

		<h3>Id is: {{ id }}</h3>
		<h3>Typeof Id is: {{ idtype }}</h3>

		<hr />
		<input type="text" class="form-control" v-model="name" />
		<h3>Name is: {{ name }}</h3>

		<hr />
		<textarea class="form-control" v-model="address" />
		<h3>Address is: {{ address }}</h3>

		<hr />
		<input type="checkbox" id="coding" value="Coding" v-model="hobbies" />
		<label for="coding">Coding</label>
		<input type="checkbox" id="running" value="Running" v-model="hobbies" />
		<label for="coding">Running</label>
		<input type="checkbox" id="cycling" value="Cycling" v-model="hobbies" />
		<label for="coding">Cycling</label>
		<h3>Hobbies: {{ hobbies }}</h3>

		<hr />
		<input type="radio" id="male" value="Male" v-model="gender" />
		<label for="male">Male</label>
		<input type="radio" id="female" value="Female" v-model="gender" />
		<label for="male">Female</label>
		<h3>Gender: {{ gender }}</h3>

		<hr />
		<select v-model="gender" class="form-control">
			<option disabled value="">Please select</option>
			<option>Male</option>
			<option>Female</option>
		</select>
		<h3>Gender: {{ gender }}</h3>
	</div>
</template>

<script>
	export default {
		name: "BindingComponent",
		data: function () {
			return {
				id: 0,
				name: "",
				address: "",
				hobbies: [],
				gender: "",
			};
		},
		computed: {
			idtype: function () {
				return typeof this.id;
			},
		},
	};
</script>