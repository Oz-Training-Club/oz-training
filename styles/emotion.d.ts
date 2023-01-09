import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      darkblue: string;
      pastelblue: string;
      lightblue: string;
      pink: string;
    };
    mq: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      darkblue: string;
      pastelblue: string;
      lightblue: string;
      pink: string;
    };
    mq: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
  interface ThemeOptions {
    colors?: {
      darkblue?: string;
      pastelblue?: string;
      lightblue?: string;
      pink?: string;
    };
    mq?: {
      mobile?: string;
      tablet?: string;
      desktop?: string;
    };
  }
}
