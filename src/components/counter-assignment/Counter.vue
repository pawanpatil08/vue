<template>
	<div>
		<div class="text-center">
			<h3 class="text-info">Counter Component</h3>
		</div>
		<div class="row d-flex justify-content-center">
			<div class="col-sm-4">
				<input
					type="text"
					class="form-control"
					v-model.number="count"
					:disabled="flag"
				/>
			</div>
			<div class="col-sm-1">
				<button class="btn btn-info btn-block" :disabled="flag" @click="inc">
					+
				</button>
			</div>
			<div class="col-sm-1">
				<button class="btn btn-info btn-block" :disabled="flag" @click="dec">
					-
				</button>
			</div>
			<div class="col-sm-2">
				<button class="btn btn-info btn-block" :disabled="!flag" @click="reset">
					Reset
				</button>
			</div>
		</div>

		
	</div>
</template>

<script>
	export default {
		name: "Counter",
		data: function () {
			this.clickCount = 0;
			return {
				count: 0,
				flag: false,
			};
		},
		props: {
			interval: {
				type: Number,
				default: 1,
			},
				onMax: {
				type: Function,
				default: function () {},
			},
		},
		methods: {
			manageClickCount() {
				this.clickCount += 1;
				if (this.clickCount > 9) {
					this.flag = true;
				}
			},
			inc() {
				this.manageClickCount();
				this.count += this.interval;
			},
			dec() {
				this.manageClickCount();
				this.count -= this.interval;
			},
			reset() {
				this.clickCount = 0;
				this.count = 0;
				this.flag = false;
			},
			
		},
		watch: {
			flag: function (newValue, oldValue) {
				// console.log("new: ", newValue);
				// console.log("old: ", oldValue);
				if (newValue !== oldValue) {
					this.onMax(this.flag);
			// by emmiting
					this.$emit("flag-changed", this.flag);
				}
			},
		},
	};
</script>