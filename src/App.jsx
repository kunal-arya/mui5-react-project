import { Box, CssBaseline, Stack } from '@mui/material'
import './App.css'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Add from './components/Add'
import { useState } from 'react'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

export default function App() {
  const [mode,setMode] = useState("light")

  const theme = createTheme({
      breakpoints: {
          values: {
            xs: 0,
            sm: 700,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      palette: {
        mode: mode
      }
  })

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </ThemeProvider>
    </>
  )
}
