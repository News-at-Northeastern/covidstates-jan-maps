<script>
	import { onMount } from 'svelte';
	import MapUSA from './charts/MapUSA.svelte'
	import GraphicTitle from './components/GraphicTitle.svelte'
	import GraphicFooter from './components/GraphicFooter.svelte'
	import states  from './helpers/USStates.js'
	import { join } from "./helpers/join.js";
	import * as colors from './helpers/colors.js'
	import * as data from '../public/datasets/xmas.json'

	export let width = document.getElementById('xmas-chart').getBoundingClientRect().width;
	export let height = width * 0.3;

	export let newdata = [];

	// export let height = Math.min(
	// 	document.getElementById('interactive').getBoundingClientRect().height,
	// 	1000
	// );

	onMount(function() {
		newdata = join(states, data.default, "abbreviation", "State", function(second, first) {
				second["Full Name"] = first["name"]
				return second;
			}) //join
	}) // onMount
</script>

<style>

</style>


{#if newdata.length > 0}
<h3>Did you attend or do you plan to attend a holiday gathering with people who live outside your household?</h3>
<GraphicTitle
	title={"Percentage of respondents answering \"Yes, I already attended one in December\" or \"Yes, I am planning to attend one\""}
/>
<MapUSA
	data={newdata}
	width = {width}
	height = {height * 2}
	variable={"Attended or planned to attend a holiday gathering in December"}
	maptype={"geo"}
	colorscheme={colors.linearpurple}
/>
{/if}




<GraphicFooter
	source={'<a href="https://covidstates.org/">The COVID-19 Consortium for Understanding the Public’s Policy Preferences Across States</a>'}
	credit={'Tyler Machado/Northeastern University'}
/>
