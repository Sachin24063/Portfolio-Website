import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif`,
    body: `'Inter', 'Plus Jakarta Sans', -apple-system, sans-serif`,
    mono: `'JetBrains Mono', 'Fira Code', monospace`,
    // Backwards compatibility aliases
    workSans: `'Inter', sans-serif`,
    paytone: `'Plus Jakarta Sans', sans-serif`,
    satisfy: `'Plus Jakarta Sans', sans-serif`,
    dancingScript: `'Plus Jakarta Sans', sans-serif`,
  },
  colors: {
    brand: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#2563eb', // Royal Azure Blue
      600: '#1d4ed8',
      700: '#1e40af',
      800: '#1e3a8a',
      900: '#172554',
    },
    surface: {
      bg: '#F8FAFC',
      card: '#FFFFFF',
      border: '#E2E8F0',
      borderHover: '#BFDBFE',
      muted: '#64748B',
      dark: '#0F172A',
    },
    accent: {
      blue: '#2563EB',
      cyan: '#0284C7',
      purple: '#7C3AED',
      emerald: '#059669',
      amber: '#D97706',
      rose: '#E11D48',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#F8FAFC',
        color: '#0F172A',
      },
    },
  },
});

export default theme;