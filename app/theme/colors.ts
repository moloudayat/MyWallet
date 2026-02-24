export type ThemeColors = {
  background: string;
  card: string;
  surface: string;
  inputBorder: string;
  devider: string;
  border: string;
  text: string;
  secondaryText: string;
  helperText: string;
  placeholder: string;
  primary: string;
  secondary: string;
  link: string;
};

export const lightColors: ThemeColors = {
  // Backgrounds
  background: '#F4F6FA',
  card: '#FFFFFF',
  surface: '#e7ecf7',
  // Borders & Dividers
  inputBorder: '#D6DBE6',
  devider: '#E3E6EF',
  border: '#C9CEDA',
  // Text
  text: '#1F2937',
  secondaryText: '#4B5563',
  helperText: '#6B7280',
  placeholder: '#525965',
  // Primary / Action Colors
  primary: '#1E6AE1',
  secondary: '#5b71a1',
  link: '#2563EB',
};

export const darkColors: ThemeColors = {
  // Backgrounds
  background: '#080C16',
  card: '#0D121F',
  surface: '#1B1F2E',
  // Borders & Dividers
  inputBorder: '#383A48',
  devider: '#383A48',
  border: '#383A48',
  // Text
  text: '#DBD7DE',
  secondaryText: '#B8BFCC',
  helperText: '#81787E',
  placeholder: '#989CA6',
  // Primary / Action Colors
  primary: '#1E6AE1',
  secondary: '#E6E8EE',
  link: '#2563EB',
};
