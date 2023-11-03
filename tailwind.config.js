/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'inter': ['Inter', 'sans-serif'],
      'chirp': ['Chirp', 'sans'],
    },
    extend: {
      strokeWidth: ['responsive', 'hover', 'focus'],
      stroke: ['responsive', 'hover', 'focus'],
      strokeWidth:{
        '1.5': '1.5px',
      },
      backgroundImage:{
        'user-avatar':"url(/public/images/user-avatar.svg)",
      },
      backgroundPosition: {
        'custom-position': '50%',
      },
      colors: {
        "twitter-blue-default": "#1d9bf0",
        "twitter-blue-hover": "#1871ca",
        "twitter-blue-disabled": "#1e5d87", 
        "twitter-white-100":"#FFFFFF",
        "blue-wash": "#75beef",
        "button-stroke": "#546A7A", 
        "searchbar-fill": "#212327", 
        "card-fill": "#16181c",
        "success": "#00be74", 
        "error": "#8b141a", 
        "neutral-50": "#f9f9f9", 
        "neutral-100": "#f4f4f4", 
        "neutral-200": "#e4e4e4", 
        "neutral-300": "#d3d3d3", 
        "neutral-400": "#a2a2a2",
        "neutral-500": "#737373", 
        "neutral-600": "#525252", 
        "neutral-700": "#404040", 
        "neutral-800": "#262626",
        "neutral-900": "#171717", 
        "neutral-950": "#0a0a0a", 
        "neutral-1000": "#000000",
        "gray":"rgba(255,255,255,0.2)",
        "secondary-gray":"rgba(255, 255, 255, 0.60)", 
        'custom-stroke': 'var(--stroke, rgba(29, 155, 240, 0.24))',
        'custom-gray': 'lightgray',
        'red-error' : "#8B141A",
        'edit-photos-bg':'rgba(0, 0, 0, 0.60)',
      },
      width:{
        '15': '3.625rem',
        '22.5rem':'22.5rem',
        '24.375rem': '24.375rem',
        '30.125':'30.125rem',
        '32rem':'32rem',
        '37.375':'37.375rem',
        '98':'26.625rem',
        '100':'27.625rem',
        '150':'37.375rem',
      },
      height:{
        '15': '3.625rem',
        '22.1875rem': '22.1875rem',
        '54.25rem': '54.25rem',
        '98':'26.625rem',
        '100':'27.625rem',
        '150':'37.375rem',
      },
      gap:{
        '14.66288rem': '14.66288rem',
      },
      spacing:{
        '0.9375rem':'0.9375rem',
        '5.8125rem':'5.8125rem',
        '0.875rem':'0.875rem', 
        '0.90625rem':'0.90625rem', 
        "1.24338rem":"1.24338rem",
      },
      margin:{
        
      },
      fontFamily:{
        "px-regular": "Inter",
      },
      boxShadow:{
        'lc': "0px 8px 16px 0px rgba(0 0 0 / 0.25)"
      },
      borderRadius: {
        'custom': '4.0625rem',
        '4xl': '1.875rem',
        '624.9375rem': '624.9375rem',
        '12.5rem':'12.5rem',
        '6249.9375rem':'6249.9375rem',
      },
      utilities: {
        '.font-features-off': {
          'font-feature-settings': "'clig' off, 'liga' off",
        },
      },
    },
  },
  plugins: [],
}