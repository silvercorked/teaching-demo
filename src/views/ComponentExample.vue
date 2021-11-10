<template>
	<div>
		<p>Component Example Page</p>
		<router-link :to="{ name: 'Props' }">Move to Props Example Page!</router-link>

		<!-- {{ }} <- these 'handlebars' are a common token to signify referencing something besides HTML
		In this case, the handlebars will be parsed by Vue and allow access to properties of our component.
		This allows us to render out js values in the DOM, and have them update dynamically -->
		<p>myDataProperty equals {{ myDataProperty }}</p>
		<button @click="incrementMyDataProperty">Increment myDataProperty</button>

		<first-component v-if="myDataProperty > 10"></first-component>
	</div>
</template>

<script>
import FirstComponent from '../components/FirstComponent.vue';

export default {
	name: 'Home',
	components: { // I recommend setting all component names, when using them in files
				// to kebab-case. This is because XML, the base for XML, doesn't destinguish between capitol letters and lower case letters
				// so keeping everything lower case leads to fewer issues
		'first-component': FirstComponent
	},
	data: function() {
		return { // set myDataPropety to Number 5
			myDataProperty: 5
		};
	},
	methods: {
		incrementMyDataProperty() {
			// accessing properties of our component in the component space requires accessing particular properties.
			// in this case, accessing a data property necessitates accessing the '$data' property of our
			// component. 'this' is a reference to our component.
			this.$data.myDataProperty++;
		}
	}
}
</script>

<style scoped>
	.big-margin {
		margin-top: 3rem;
	}
</style>
