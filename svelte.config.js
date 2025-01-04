import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
//import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		//appDir: 'app', // Required as the default is _app
		adapter: adapter({
			fallback: '404.html'
		})
	},
};
  
/*https://dev.to/scc33/publishing-a-sveltekit-app-to-github-pages-4439*/

export default config;