import { createSystem, defaultConfig } from '@chakra-ui/react';

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#f7fafc' },
          100: { value: '#edf2f7' },
          200: { value: '#e2e8f0' },
          300: { value: '#cbd5e0' },
          400: { value: '#a0aec0' },
          500: { value: '#718096' },
          600: { value: '#4a5568' },
          700: { value: '#2d3748' },
          800: { value: '#1a202c' },
          900: { value: '#171923' },
        },
        primary: {
          main: { value: '#2B6CB0' },
        },
        secondary: {
          main: { value: '#805AD5' },
        },
      },
      fonts: {
        heading: { value: 'Inter, sans-serif' },
        body: { value: 'Inter, sans-serif' },
      },
    },
    styles: {
      global: {
        body: {
          bg: { value: 'white' },
          color: { value: 'gray.800' },
        },
      },
    },
  },
});

export default theme;
