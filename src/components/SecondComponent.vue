<template>
	<div>
		<p>Yo this is the second component!</p>
		<p>{{ myProp }}</p>
		<p v-if="mySecondProp != null">{{ mySecondProp }}</p>
	</div>
</template>

<script>
export default {
	name: 'SecondComponent',
	props: {
		myProp: {
			type: Number,
			required: true,
		},
		mySecondProp: {
			type: String,
			required: false
		}
	},
	computed: { // computed properties take no arguments
		myNewValue() { // props can be referenced off 'this'
			return '' + this.myProp + (this.mySecondProp != null ? this.mySecondProp : 'was null');
		}
	},
	methods: {
		emitData() {
			// computed properties are accessible off 'this' however, while they appear to be functions
			// they are actually treated as simple variables (these behave akin to data propeties)
			console.log('emitting!', this.myNewValue);
			this.$emit('my-emitted-property', this.myNewValue);
			// when emitting properties, the '$emit' function can be called.
			// it takes 2 argument:
			// a string representing the name of the emitted propety
				// this is used in the parent component (the component containing this component) as an identifier for this result
			// and a value, that will be passed, via this name, to the parent component
		}
	},
	watch: {
		myProp: function(newValue, oldValue) {
			// watching is simply a function called when a particular variable is changed
			console.log('Prop changed: ', newValue, ' but was: ', oldValue);
			this.emitData(); // call emitData to update new data
		},
		mySecondProp: function(newValue, oldValue) {
			console.log('Prop changed: ', newValue, ' but was: ', oldValue);
			this.emitData();
		}
	}
}
</script>

<style scoped>

</style>
