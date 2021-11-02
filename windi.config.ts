import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    dark: 'media',
    theme: {
        fontFamily: {
            sans: '"Roboto", sans-serif',
            mono: '"Roboto Mono", monospace',
        },
    },
    plugins: [
        require('windicss/plugin/forms'),
        require('windicss/plugin/aspect-ratio'),
        require('windicss/plugin/line-clamp'),
        require('windicss/plugin/filters'),
        require('windicss/plugin/scroll-snap'),
        require('windicss/plugin/typography'),
        // add more as needed
        // see: https://windicss.org/ for more info
    ],
});
