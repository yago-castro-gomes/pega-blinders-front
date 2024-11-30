'use client';

import React, { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";

interface ThemeContextType {
  themeMode: "light";
  toggleTheme: () => void;
  theme: ReturnType<typeof createTheme>;
}

const ThemeContext = createContext<ThemeContextType>({
  themeMode: "light",
  toggleTheme: () => {},
  theme: createTheme(),
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#DAA520",
      main: "#DAA520",
      dark: "#DAA520",
    },
    secondary: {
      main: "#DAA520",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#FFFFFF", // Cor do texto para branco
      secondary: "#FFFFFF", // Cor do texto secundário para branco
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "8px 16px",
          backgroundColor: "#388E3C",
          "&:hover": {
            backgroundColor: "#4CAF50",
          },
        },
        contained: {
          color: "#FFFFFF",
        },
      },
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#FFFFFF", // Texto do TextField em branco
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            "& fieldset": {
              borderColor: "#FFFFFF", // Borda inicial em branco
            },
            "&:hover fieldset": {
              borderColor: "#FFFFFF", // Borda no hover em branco
            },
            "&.Mui-focused fieldset": {
              borderColor: "#DAA520", // Borda quando focado (aqui mantém o dourado)
            },
            "& input": {
              color: "#FFFFFF", // Texto digitado no input em branco
            },
          },
          "& .MuiInputLabel-root": {
            color: "#FFFFFF", // Cor da label em branco
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#DAA520", // Cor da label quando focada (dourado)
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            "& fieldset": {
              borderColor: "#FFFFFF", // Borda inicial em branco
            },
            "&:hover fieldset": {
              borderColor: "#FFFFFF", // Borda no hover em branco
            },
            "&.Mui-focused fieldset": {
              borderColor: "#DAA520", // Borda quando focado (dourado)
            },
            "& input": {
              color: "#FFFFFF", // Texto em branco
            },
          },
          "& .MuiInputLabel-root": {
            color: "#FFFFFF", // Cor da label em branco
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#DAA520", // Cor da label quando focada (dourado)
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          border: "1px solid #DAA520",
        },
      },
    },
  },
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Evita renderizar no servidor

  const themeMode = "light";
  const theme = lightTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme: () => {}, theme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
