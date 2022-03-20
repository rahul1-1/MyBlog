
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#898987'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Code for Interview</Typography>
                <Typography variant="h5" className={classes.text}>I am a student of Information Technology at Sikkim Manipal Institute of Technology, currently in my 4th year.<br />
                  
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/rahul1-1" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Typography>
                <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/rahul-choudhary-18407b1a0/" color="inherit" target="_blank">
                            <LinkedIn />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:rc590366@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Typography>
            </Box>
        </Box>
    )
}

export default About;