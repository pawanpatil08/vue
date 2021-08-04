<template>
	<div>
		<br />
		<hr />
		<h3 class="text-info text-center">
			This is a sibling Component to Counter
		</h3>
		<h3 class="text-success">
			Data via $emit and Prop: {{ current_count_via_prop }}
		</h3>
		<h3 class="text-success">
			Data via $root $emit: {{ current_count_via_root_emit }}
		</h3>
		<h3 class="text-success">
			Data via Event Bus: {{ current_count_via_event_bus }}
		</h3>
		<hr />
	</div>
</template>

<script>
	import EventBus from "./EventBus";

	export default {
		name: "CounterSibling",
		data: function () {
			return {
				current_count_via_root_emit: 0,
				current_count_via_event_bus: 0,
			};
		},
		props: {
			current_count_via_prop: {
				type: Number,
				default: 0,
			},
		},
		mounted: function () {
			this.$root.$on("root-count-changed", (newCount) => {
				this.current_count_via_root_emit = newCount;
			});
			EventBus.$on("count-published", (newCount) => {
				this.current_count_via_event_bus = newCount;
			});
		},
	};
</script>