import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();

function ToggleColorMode({ children }) {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

    const lightPalette = {
      primary: {
        main: '#a37cf0', 
      },
    };
  
    const darkPalette = {
      primary: {
        main: '#222222', 
      },
    };
  
    const theme = useMemo(() =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? lightPalette : darkPalette),
        },
      }),
      [mode]
    );

  // const theme = useMemo(() => createTheme({
  //   palette: {
  //     mode,
  //   },
  // }), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorMode;
