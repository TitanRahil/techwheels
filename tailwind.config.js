/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0F0F12',
                foreground: '#F5F5F7',
                accent: {
                    violet: '#7B61FF',
                    mint: '#3EF2C2',
                },
                muted: '#A0A0A5',
            },
            fontFamily: {
                heading: ['"Space Grotesk"', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
