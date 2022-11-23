// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         "./index.html"
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    darkMode: 'media',
    theme: {
        fontFamily: {
            sans: ['IBM Plex Sans', 'sans-serif'],
            serif: ['IBM Plex Serif', 'serif'],
            mono: ['IBM Plex Mono', 'monospace'],
        },
        extend: {
            colors: {
                primary: '#8ECAE6',
                secondary: '#FB8500',
                tertiary: '#023047',
            },
            margin: {
                "site-default": '10rem',
                "tablet": '3rem',
                "mobile": '1.5rem',
            },
            padding: {
                "site-default": '10rem',
                "tablet": '3rem',
                "mobile": '1.5rem',
            },
            spacing: {
                "site-default": '10rem',
                "tablet": '3rem',
                "mobile": '1.5rem',
            },
            transitionDelay: {
                primary: "100ms",
            }
        },
    },
    plugins: [],
};