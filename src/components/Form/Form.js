import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import {
  paperStyles,
  formStyles,
  buttonSubmitStyles,
} from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../reducers/postThunks';

const Form = () => {
  const IMAGES = [
  'https://images.unsplash.com/photo-1500622345610-10b17424726b?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=60'
];
  const [postData,setPostData]=useState({
    creator:'', title:'', message:'', tags:'',selectedFile:''
  })
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault()
    const randomIndex = Math.floor(Math.random() * IMAGES.length);
    const finalPostData = { ...postData, selectedFile: IMAGES[randomIndex], tags: postData.tags.split(',').map(tag => tag.trim()) };
    dispatch(createPost(finalPostData))
    clear()
  }

  const clear=()=>{

  }

 

  return (
    <Paper sx={paperStyles}>
      <form autoComplete='off' noValidate sx={formStyles} onSubmit={handleSubmit}>
        <Typography variant='h6'> Creating a memory</Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e)=>setPostData({...postData, creator:e.target.value})}
          />
           <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e)=>setPostData({...postData, title:e.target.value})}
          />
           <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e)=>setPostData({...postData, message:e.target.value})}
          />
           <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e)=>setPostData({...postData, tags:e.target.value})}
          />
        
          <Button sx={buttonSubmitStyles} variant='contained' color='primary' size='large' type='submit' fullWidth> Submit</Button>
          <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth> Clear</Button>

      </form>
    </Paper>
  );
};

export default Form;
