import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText,IconButton,FormGroup,FormControlLabel } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import { AccountBox, Article, Group, Person, Settings, Storefront,Brightness7,Brightness4 } from '@mui/icons-material';

const Sidebar = ({setMode,mode}) => {

  const darkMode = () => mode === "dark" ? "Dark Mode" : "Light Mode"

  return (
    <Box 
        flex={1} 
        p={3} 
        sx={{display: {xs:"none", sm: "block"}}}
    >
      <Box position={"fixed"}>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
            <ListItemText primary={darkMode()} />
              <ListItemIcon>
                 <IconButton sx={{ ml: 1 }} onClick={() => setMode(prevMode => prevMode === "dark" ? "light" : "dark" )} color="inherit">
                    {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                 </IconButton>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
