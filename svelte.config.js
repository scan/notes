import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import WindiCSS from 'vite-plugin-windicss/dist/index.mjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: adapter(),
        vite: {
            plugins: [WindiCSS()],
        },
    },
};

export default config;
