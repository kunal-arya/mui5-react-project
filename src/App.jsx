import { Box, CssBaseline, Stack } from '@mui/material'
import './App.css'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default function App() {

  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}
