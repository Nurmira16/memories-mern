import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import memories from './images/memories.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { appBarStyles, headingStyles, imageStyles } from "./styles";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./reducers/postThunks";
import './index.css'
const App=()=>{
    const [currentId, setCurrentId]=useState(null)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])


    return(
      <Container maxWidth="lg">
        <AppBar position="static" color="primary" sx={appBarStyles}>
            <Typography sx={headingStyles} variant="h2" align="center">Memories</Typography>
            <img style={imageStyles} src={memories} alt="memories" width="100px" />
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>

                    <Form currentId={currentId} />

                    </Grid>
                </Grid>
            </Container>
        </Grow>
      </Container>
    )
}
export default App;