/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,css,svelte,ts}"],
    daisyui: {
        themes: ["emerald", "dark"],
    },
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui")
    ],
}
