/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "header": "url('/src/assets/Header/hero-bg.jpg')",
                "why-choose-us": "url('/src/assets/WhyChooseUs/us-bg.jpg')",
                "healthy": "url('/src/assets/Healthy/healthy-bg.jpg')",
                "trainers": "url('/src/assets/Trainers/trainer-bg.jpg')"
            }
        },
    },
    plugins: [],
}

