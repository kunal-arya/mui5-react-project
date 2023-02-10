import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import {Mail, Notifications, Pets} from '@mui/icons-material';
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled('div')(({theme}) => ({
    backgroundColor:"white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap: "1em",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "1em",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: "none"
    }
}))

const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)

    const AvatarIcon = () => {
        return (
            <Avatar 
                sx={{width:30,height:30}} 
                src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                onClick={() => setOpenMenu(true)} 
            />
        )
    }

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs:"none",sm:"block"}}}>Dev</Typography>
            <Pets  sx={{display: {xs:"block",sm:"none"}}} />
            <Search><InputBase placeholder='Search....'/></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail  />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <AvatarIcon />
            </Icons>
            <UserBox>
                <AvatarIcon />
            </UserBox>
        </StyledToolbar>
        <Menu
        id="menu-btn"
        aria-labelledby="Menu-button"
        open={openMenu}
        onClose={e => setOpenMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar