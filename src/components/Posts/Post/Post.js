import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import MoreHorizIcon  from '@mui/icons-material/MoreHoriz'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon  from '@mui/icons-material/Delete'


import { cardStyles, mediaStyles,cardActionsStyles,titleStyles, overlay2Styles, overlayStyles , detailsStyles} from './styles';
import moment from 'moment/moment';
const Post = ({post}) => {
    return (
        <Card sx={cardStyles}>
            <CardMedia 
    sx={mediaStyles} 
    image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} 
    title={post.title} 
/>
            <div sx={overlayStyles}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div sx={overlay2Styles}>
                <Button style={{color:'white'}} size='small' onClick={()=>{}}>
                    <MoreHorizIcon fontSize='default'/>
                </Button>
            </div>
            <div sx={detailsStyles}>
                <Typography variant='body2' color="textSecondary">{post.tags.map((tag)=>`#${tag}`)}</Typography>
            </div>
            <CardContent>
                <Typography sx={titleStyles} variant='h5' gutterBottom>{post.message}</Typography>
                </CardContent>
                <CardActions sx={cardActionsStyles}>
                    <Button size="small" color="primary" onClick={()=>{}}>
                        <ThumbUpAltIcon fontSize='small'/>
                        Like
                        {post.likeCount}
                    </Button>
                      <Button size="small" color="primary" onClick={()=>{}}>
                        <DeleteIcon fontSize='small'/>
                       Delete
                    </Button>
                </CardActions>
        </Card>
    );
};

export default Post;