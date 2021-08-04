<template>
	<div>
		<h1 class="text-info">Hello from Component One</h1>
		<form>
			First name: <br />
			<input type="text" name="firstname" v-model="fname" />
		</form>
	</div>
</template>

<script>
	export default {
		name: "ComponentOne",
		data: function () {
			return {
				fname: "",
			};
		},
		destroyed: function () {
			console.log("Component One Destroyed");
		},
	};
</script>