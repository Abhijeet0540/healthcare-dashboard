/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                'healthcare-blue': '#4F46E5',
                'healthcare-cyan': '#06B6D4',
                'healthcare-orange': '#F97316',
                'healthcare-red': '#EF4444',
                'healthcare-gray': '#F8FAFC',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
