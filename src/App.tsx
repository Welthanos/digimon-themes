import { GlobalStyles } from "./styles/GlobalStyle"
import { lightTheme } from "./styles/themes/lightTheme";
import { darkTheme } from './styles/themes/darkTheme';
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Header } from "./components/header/Header";

export default function App() {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  function handleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />

        <Header />
        <button onClick={handleTheme}>trocar tema</button>
      </ThemeProvider>

    </>
  )
}
