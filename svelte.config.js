import adapter from '@sveltejs/adapter-vercel'; // <-- MODIFIÉ
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// L'adaptateur est maintenant configuré pour Vercel.
		adapter: adapter()
	}
};

export default config;