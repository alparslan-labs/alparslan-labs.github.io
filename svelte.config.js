import adapter from '@sveltejs/adapter-static';
//import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {imdwqdport('@sveltejs/kit').Config} */
const config = {
	
	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	},
};
 
config.paths = { base: process.argv.includes('dev') ? '' : "/alparslan-labs" }
 
export default config;

/*https://dev.to/scc33/publishing-a-sveltekit-app-to-github-pages-4439*/