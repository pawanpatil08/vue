<template>
	<ValidationObserver v-slot="{ passes }">
		<form class="form-horizontal" @submit.prevent="passes(onSubmit)">
			<fieldset class="form-group border p-3">
				<legend class="w-auto px-2 text-center">
					<h3>Form with Custom Validation</h3>
				</legend>
				<ValidationProvider rules="required" v-slot="v">
					<div class="form-group">
						<label for="firstname" class="mb-1">
							<h6 class="mb-0 text-sm">Firstname</h6>
						</label>
						<input
							type="text"
							class="form-control"
							:class="{ 'is-invalid': v.errors[0] }"
							id="firstname"
							name="firstName"
							v-model="regForm.firstname"
						/>
						<div class="invalid-feedback" v-if="v.errors[0]">
							<p>{{ v.errors[0] }}</p>
						</div>
					</div>
				</ValidationProvider>
				<ValidationProvider rules="required|max:6|min:3" v-slot="v">
					<div class="form-group">
						<label for="lastname" class="mb-1">
							<h6 class="mb-0 text-sm">Lastname</h6>
						</label>
						<input
							type="text"
							class="form-control"
							:class="{ 'is-invalid': v.errors[0] }"
							id="lastname"
							name="lastname"
							v-model="regForm.lastname"
						/>
						<div class="invalid-feedback" v-if="v.errors[0]">
							<p>{{ v.errors[0] }}</p>
						</div>
					</div>
				</ValidationProvider>
				<ValidationProvider rules="required" v-slot="v">
					<div class="form-group">
						<label for="gender" class="mb-1">
							<h6 class="mb-0 text-sm">Gender</h6>
						</label>
						<div :class="{ 'is-invalid': v.errors[0] }">
							<div class="form-check-inline">
								<input
									class="form-check-input"
									:class="{ 'is-invalid': v.errors[0] }"
									type="radio"
									id="gender"
									value="male"
									v-model="regForm.gender"
								/>
								<label class="form-check-label" for="gender"> Male </label>
							</div>
							<div class="form-check-inline">
								<input
									class="form-check-input"
									:class="{ 'is-invalid': v.errors[0] }"
									type="radio"
									id="gender"
									value="female"
									v-model="regForm.gender"
								/>
								<label class="form-check-label" for="gender"> Female </label>
							</div>
						</div>
						<div class="invalid-feedback" v-if="v.errors[0]">
							<p>{{ v.errors[0] }}</p>
						</div>
					</div>
				</ValidationProvider>
				<ValidationProvider rules="required" v-slot="v">
					<div class="form-group">
						<label for="country" class="mb-1">
							<h6 class="mb-0 text-sm">Country</h6>
						</label>
						<select
							class="form-control"
							id="country"
							v-model="regForm.address.country"
							:class="{ 'is-invalid': v.errors[0] }"
						>
							<option
								v-for="country of countries"
								:value="country.id"
								:key="country.id"
							>
								{{ country.name }}
							</option>
						</select>
						<div class="invalid-feedback" v-if="v.errors[0]">
							<p>{{ v.errors[0] }}</p>
						</div>
					</div>
				</ValidationProvider>
				<ValidationProvider rules="required" v-slot="v">
					<div class="form-group">
						<label for="city" class="mb-1">
							<h6 class="mb-0 text-sm">City</h6>
						</label>
						<input
							type="text"
							class="form-control"
							:class="{ 'is-invalid': v.errors[0] }"
							id="city"
							v-model="regForm.address.city"
						/>
						<div class="invalid-feedback" v-if="v.errors[0]">
							<p>{{ v.errors[0] }}</p>
						</div>
					</div>
				</ValidationProvider>
				<ValidationProvider rules="required" v-slot="v">
					<div class="form-group">
						<label for="zip" class="mb-1">
							<h6 class="mb-0 text-sm">Zip</h6>
						</label>
						<input
							type="text"
							class="form-control"
							:class="{ 'is-invalid': v.errors[0] }"
							id="zip"
							v-model="regForm.address.zip"
						/>
						<div class="invalid-feedback" v-if="v.errors[0]">
							<p>{{ v.errors[0] }}</p>
						</div>
					</div>
				</ValidationProvider>
				<ValidationProvider rules="required" v-slot="v">
					<div class="form-group form-check">
						<input
							type="checkbox"
							class="form-check-input"
							:class="{ 'is-invalid': v.errors[0] }"
							id="acceptTerms"
							v-model="regForm.acceptTerms"
						/>
						<label for="acceptTerms" class="form-check-label">
							<h6 class="mb-0 text-sm">Agree to terms and conditions</h6>
						</label>
						<div class="invalid-feedback" v-if="v.errors[0]">
							<p>{{ v.errors[0] }}</p>
						</div>
					</div>
				</ValidationProvider>
				<div class="form-group row">
					<div class="col">
						<button type="submit" class="btn btn-primary btn-block">
							Save
						</button>
					</div>
					<div class="col">
						<button type="button" class="btn btn-secondary btn-block">
							Reset
						</button>
					</div>
				</div>
			</fieldset>
		</form>
	</ValidationObserver>
</template>

<script>
	export default {
		name: "FormValidation",
		data: function () {
			this.countries = [
				{ id: "", name: "Select Country" },
				{ id: 1, name: "India" },
				{ id: 2, name: "USA" },
				{ id: 3, name: "UK" },
			];
			return {
				regForm: {
					firstname: "",
					lastname: "",
					gender: "",
					address: {
						country: "",
						city: "",
						zip: "",
					},
					acceptTerms: false,
				},
			};
		},
		methods: {
			onSubmit() {
				console.log("Success !!");
				console.log(JSON.stringify(this.regForm));
			},
		},
	};
</script>