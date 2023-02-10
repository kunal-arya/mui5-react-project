import React, { useState } from 'react'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "1em"
})

const Add = () => {

    const [open,setOpen] = useState(false)



  return (
    <>
        <Tooltip title="Delete" onClick={() => setOpen(true)}>
            <Fab color="primary" aria-label="add" sx={{position: "fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30 }}}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}
            >
            <Box 
                width={400} 
                height={300} 
                bgcolor="white" 
                p={3}
                borderRadius={5}
            >
                <Typography variant='h6' color='gray' textAlign="center">
                    Create Post
                </Typography>
                <UserBox>
                    <Avatar
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        sx={{ width: 30, height: 30 }}
                    />
                    <Typography fontWeight={500} variant="span">John Doe</Typography>
                </UserBox>
                <TextField
                    sx={{width:"100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={3}
                    placeholder="What's on your mind?"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions />
                    <Image color="secondary" />
                    <VideoCameraBack color="success" />
                    <PersonAdd color="error" />
                </Stack>
                <ButtonGroup variant="contained" aria-label="post Button" fullWidth>
                    <Button>Post</Button>
                    <Button sx={{width:"100px"}}><DateRange /></Button>
                </ButtonGroup>
            </Box>
        </Modal>
    </>
  )
}

export default Add