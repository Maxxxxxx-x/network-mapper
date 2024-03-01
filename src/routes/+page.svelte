<script lang="ts">
	import { browser } from '$app/environment';

	export function getBrowserTheme() {
		if (!browser) {
			throw new Error('browser not found');
		}

		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			console.log('dark theme');
			return;
		}
		console.log('Light theme');
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
