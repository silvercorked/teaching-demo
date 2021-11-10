<template>
	<div>
		<p>Props Example Page</p>
		<!--<router-link :to="{ name: 'Components' }">Move to Component Example Page!</router-link>-->

		<p>myDataProperty equals {{ myDataProperty }}</p>
		<button @click="incrementMyDataProperty">Increment myDataProperty</button>

		<!--
			recall the kebab case idea from before? vue automatically accepts 
			kebab case prop values and looks for both kebab case
			and camel case versions. So here we use kebab case
			but in secondComponent, we can use camel case
		-->
		<second-component
			v-if="myDataProperty > 10"
			:my-prop="myDataProperty"
			my-second-prop="a String!!!"
			@my-emitted-property="setMyLocalVersionOfEmittedProperty"
		></second-component>

		<p>emitted property was {{ myLocalVersionOfEmittedProperty }}</p>
	</div>
</template>

<script>
import SecondComponent from '../components/SecondComponent.vue';

export default {
	name: 'Home',
	components: { 
		'second-component': SecondComponent
	},
	data: function() {
		return { // set myDataPropety to Number 5
			myDataProperty: 5,
			myLocalVersionOfEmittedProperty: null
		};
	},
	methods: {
		setMyLocalVersionOfEmittedProperty(emittedProperty) {
			this.$data.myLocalVersionOfEmittedProperty = emittedProperty;
		},
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
