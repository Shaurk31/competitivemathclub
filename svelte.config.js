import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Preprocessors for Svelte
	preprocess: [
		vitePreprocess(),
	],

	kit: {
		// Use the auto adapter for deployment
		adapter: adapter(),
	}
};

export default config;
