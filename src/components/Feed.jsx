import { Box } from '@mui/material'
import Post from './Post'

const Feed = () => {
  return (
    <Box flex={4} p={3}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed