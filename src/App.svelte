<script>
	import { onMount } from 'svelte';
	import MapUSA from './charts/MapUSA.svelte'
	import GraphicTitle from './components/GraphicTitle.svelte'
	import GraphicFooter from './components/GraphicFooter.svelte'
	import states  from './helpers/USStates.js'
	import { join } from "./helpers/join.js";
	import * as colors from './helpers/colors.js'
	import * as data from '../public/datasets/data.json'

	export let width = Math.min(
		(document.getElementById('interactive').getBoundingClientRect().width / 2) - 40
	);
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

	#maps {
		display:grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 20px;
		grid-template-rows: repeat(2, 1fr);
		row-gap:30px;
	}
</style>


{#if newdata.length > 0}
<h3>Percent of respondents in each state who said, in the past week, that they "very closely" followed recommendations to...</h3>
<div id="maps">
	<div class="a-map">
		<GraphicTitle
			title={"...avoid contact with other people"}
		/>
		<MapUSA
			data={newdata}
			width = {width}
			height = {height * 2}
			variable={"Avoiding contact with other people"}
			maptype={"geo"}
			colorscheme={colors.linearpurple}
		/>
	</div>
	<div class="a-map">
		<GraphicTitle
			title={"...avoid public or crowded places"}
		/>
		<MapUSA
			data={newdata}
			width = {width}
			height = {height * 2}
			variable={"Avoiding public or crowded places"}
			maptype={"geo"}
			colorscheme={colors.linearpurple}
		/>
	</div>
	<div class="a-map">
		<GraphicTitle
			title={"...frequently wash hands"}
		/>
		<MapUSA
			data={newdata}
			width = {width}
			height = {height * 2}
			variable={"Frequently washing hands"}
			maptype={"geo"}
			colorscheme={colors.linearpurple}
		/>
	</div>
	<div class="a-map">
		<GraphicTitle
			title={"...wear a face mask when outside of the home"}
		/>
		<MapUSA
			data={newdata}
			width = {width}
			height = {height * 2}
			variable={"Wearing a face mask when outside of your home"}
			maptype={"geo"}
			colorscheme={colors.linearpurple}
		/>
	</div>
</div>
{/if}




<GraphicFooter
	source={'<a href="https://covidstates.org/">The COVID-19 Consortium for Understanding the Public’s Policy Preferences Across States</a>'}
	credit={'Tyler Machado/Northeastern University'}
/>
