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
        azulPrincipalEscuro: '#223f8f',
        azulPrincipalEscuroEnviar: '#0d225d',
        whatsappCor: '#2ea95b',
        whatsappCorHover: '#348a53',
        instagramCor: '#b52555',
        // instagramCorHover: '#8a1b40',
        youtubeCor: '#b73333',
        // youtubeCorHover: '#781e1e',
        facebookCor: '#5374b7',
        // facebookCorHover: '#375081',
        emailCor: '#fffa',
        // emailCorHover: '#c2c2c2',
        spotifyCor: '#3e9a5e',
        // spotifyCorHover: '#368251',
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
    // 'bg-spotifyCorHover',
    // 'bg-instagramCorHover',
    // 'bg-youtubeCorHover',
    // 'bg-facebookCorHover',
    'hover:bg-azulPrincipalEscuroEnviar'
  ],
  plugins: [],
};
