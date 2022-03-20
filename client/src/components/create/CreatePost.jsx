import React, { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, TextareaAutosize, Button, FormControl, InputBase } from '@material-ui/core';
import { AddCircle as Add, CallEnd } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

import { createPost, uploadFile } from '../../service/api';
import { LoginContext } from '../../context/ContextProvider';

const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    title: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 55,
        fontSize: 19,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreatePost = () => {
    const classes = useStyle();
    const history = useHistory();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const [imageURL, setImageURL] = useState('');
    const { account, setAccount } = useContext(LoginContext);

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
    
    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const image = await uploadFile(data);
                post.picture = image.data;
                setImageURL(image.data);
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All'
        post.username = account;
    }, [file])

    const savePost = async () => {
        await createPost(post);
        history.push('/');
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />

            <FormControl className={classes.title}>
                <label htmlFor="fileInput">
                    <Add className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputBase onChange={(e) => handleChange(e)} name='title' placeholder="Title" className={classes.textfield} />
                <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder="Tell your story..."
                className={classes.textarea}
                name='description'
                onChange={(e) => handleChange(e)} 
            />
        </Box>
    )
}

export default CreatePost;