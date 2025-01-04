import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
//import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {imdwqdport('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production'?'/alparslan-labs.github.io' :'',

		}
	},
};
 
//config.paths = { base: process.argv.includes('dev') ? '' : "/alparslan-labs" }
 
export default config;

/*https://dev.to/scc33/publishing-a-sveltekit-app-to-github-pages-4439*/