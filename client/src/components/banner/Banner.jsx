
import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://media.istockphoto.com/photos/getting-lost-in-the-code-picture-id1164885329?b=1&k=20&m=1164885329&s=170667a&w=0&h=LrCkNBqRmAzNtUCysJsJVXktCfwNz8iKDOwgg_eRQ-g='}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1629757509637-7c99379d6d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
    return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG</Typography>
                <Typography>Code for Interview</Typography>
            </Box>
        </>
    )
}

export default Banner;