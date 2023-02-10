import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // palette: {
    //     primary: {
    //         main: "#ff9800",
    //         light: "#ffe0b2"
    //     },
    //     secondary: {
    //         main: '#15c630'
    //     },
    //     otherColor: {
    //         main: "#999"
    //     }
    // },
    breakpoints: {
        values: {
          xs: 0,
          sm: 700,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
})

export default theme