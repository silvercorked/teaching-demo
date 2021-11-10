<template> <!-- this is standard vue 2 & 3 single page component structure
	(
		Template: Where HTML content is placed and js properties are referenced
		Script: Where Component setup and vue features are utilized
		Style: Where CSS is applied
	) -->
	<div>
		<p>Hello! Welcome to my Website!</p>
		<!-- Here, I use vue-router, a plugin, to link between pages. It's a great tool. -->
		<router-link :to="{ name: 'Components' }">Move to Component Example Page!</router-link>
	</div>
</template>

<script>
export default {
	name: 'Home',
}
</script>

<style scoped>

</style>
