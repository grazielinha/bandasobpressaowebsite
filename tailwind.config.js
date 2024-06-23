/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        robotocondensed: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        azulPrincipal: '#1C1E4C',
        azulEmBaixo: '#0F3E96',
        azulNavbarFica: '#15173E',
        whatsappCor: '#25d366',
        instagramCor: '#E1306C',
        youtubeCor: '#FF0000',
        facebookCor: '#4267B2',
        emailCor: '#fffa',
        spotifyCor: '#1DB954',
      },
    },
  },
  safelist: [
    'bg-whatsappCor',
    'bg-instagramCor',
    'bg-youtubeCor',
    'bg-facebookCor',
    'bg-emailCor',
    'bg-spotifyCor',
  ],
  plugins: [],
};
