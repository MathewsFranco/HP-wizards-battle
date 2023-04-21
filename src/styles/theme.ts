declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      Gryffindor: string;
      Slytherin: string;
      Ravenclaw: string;
      Hufflepuff: string;
      text: string;
      background: string;
      success: string;
      error: string;
    };
    fontSizes: { small: string; medium: string; large: string; xlarge: string };
    boxShadow: { small: string; medium: string; large: string };
  }
}

export const theme = {
  colors: {
    primary: '#FFC107',
    secondary: '#FF5722',
    Gryffindor: '#7F0909',
    Slytherin: '#1A472A',
    Ravenclaw: '#222f5b',
    Hufflepuff: '#FDB813',
    text: '#333',
    background: '#FFFFFF',
    success: '#00C851',
    error: '#FF4444',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '24px',
    xlarge: '32px',
  },

  boxShadow: {
    small: '0px 1px 2px rgba(0, 0, 0, 0.15)',
    medium: '0px 4px 6px rgba(0, 0, 0, 0.15)',
    large: '0px 8px 12px rgba(0, 0, 0, 0.15)',
  },
};
