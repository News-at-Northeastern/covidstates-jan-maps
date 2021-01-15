import App from './App.svelte';

const app = new App({
	target: document.getElementById('interactive')
});

import Xmas from './Xmas.svelte';

const xmaschart = new Xmas({
	target: document.getElementById('xmas-chart')
});

export default {xmaschart, app};
