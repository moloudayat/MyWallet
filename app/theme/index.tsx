import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { useColorScheme } from 'react-native';
import { darkColors, lightColors, type ThemeColors } from './colors';

export type Theme = {
  isDark: boolean;
  colors: ThemeColors;
  changeMode: () => void;
};

const ThemeContext = createContext<Theme>({
  isDark: false,
  colors: lightColors,
  changeMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === 'dark');

  useEffect(() => {
    if (systemScheme) {
      setIsDark(systemScheme === 'dark');
    }
  }, [systemScheme]);

  const changeMode = () => setIsDark(prev => !prev);

  const value = useMemo(
    () => ({
      isDark,
      colors: isDark ? darkColors : lightColors,
      changeMode,
    }),
    [isDark],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  return useContext(ThemeContext);
}

export { darkColors, lightColors };
