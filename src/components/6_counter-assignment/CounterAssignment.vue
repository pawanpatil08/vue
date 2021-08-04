<template>
	<div>
		<h2 class="text-success text-center">Sibling Communication</h2>
		<br />
		<h3 class="alert alert-danger" v-if="message">{{ message }}</h3>
		<br />
		<counter
			:interval="10"
			ref="c1"
			@flag-changed="handleFlagChanged"
			@count-changed="handleCountChanged"
		/>
		<br />
		<br />
		<counter-sibling :current_count_via_prop="pcount" />
		<br />
		<br />
		<div class="text-center">
			<button class="btn btn-warning btn-block" @click="p_reset">
				Parent Reset
			</button>
		</div>
	</div>

	<!-- <div>
		<h2 class="text-success text-center">Notify Parent from Child</h2>
		<h2 class="text-info text-center">
			Child to Parent Communication via Events
			<br />
			Vue components have a $emit() function that allows you to pass custom
			events up the component tree.
		</h2>
		<br />
		<h3 class="alert alert-danger" v-if="message">{{ message }}</h3>
		<br />
		<counter :interval="10" ref="c1" v-on:flag-changed="handleFlagChanged" />
		<br />
		<counter :interval="10" ref="c1" @flag-changed="handleFlagChanged" />
		<br />
		<br />
		<div class="text-center">
			<button class="btn btn-warning btn-block" @click="p_reset">
				Parent Reset
			</button>
		</div>
	</div> -->

	<!-- <div>
		<h2 class="text-success text-center">Calling Parent Method from Child</h2>
		<h2 class="text-danger text-center">
			Passing Parent Method Reference to Child - Anti Pattern
		</h2>
		<br />
		<h3 class="alert alert-danger" v-if="message">{{ message }}</h3>
		<br />
		<counter :interval="10" ref="c1" :onMax="updateMessage" />
		<br />
		<br />
		<div class="text-center">
			<button class="btn btn-warning btn-block" @click="p_reset">
				Parent Reset
			</button>
		</div>
	</div> -->

	<!-- <div>
		<h2 class="text-success text-center">Calling Child Method from Parent</h2>
		<br />
		<counter :interval="10" ref="c1" />
		<br />
		<br />
		<div class="text-center">
			<button class="btn btn-warning btn-block" @click="p_reset">
				Parent Reset
			</button>
		</div>
	</div> -->

	<!-- <div>
		<counter />
		<br />
		<counter :interval="10" />
	</div> -->
</template>

<script>
	import Counter from "./Counter.vue";
	import CounterSibling from "./CounterSibling.vue";
	export default {
		name: "CounterAssignment",
		components: { Counter, CounterSibling },
		data: function () {
			return {
				message: "",
				pcount: 0,
			};
		},
		methods: {
			updateMessage(flag) {
				if (flag)
					this.message =
						"Max Click Reached, please click 'reset button' to restart";
				else this.message = "";
			},
			handleFlagChanged(flag) {
				if (flag)
					this.message =
						"Max Click Reached, please click 'reset button' to restart";
				else this.message = "";
			},
			p_reset() {
				// console.log(this.$refs);
				this.$refs.c1.reset();
			},
			handleCountChanged(count) {
				this.pcount = count;
			},
		},
	};
</script>