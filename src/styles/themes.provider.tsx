
'use client'
import { ThemeProvider } from "styled-components"
import { ReactNode } from "react";
import theme from "./themes";



interface ThemesProvidersProps {
    children: ReactNode;
}

export const ThemesProviders = ({ children }: ThemesProvidersProps) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};