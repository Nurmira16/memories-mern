import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts,createPost,updatePost,likePost,deletePost } from "./postThunks";


const postsSlice= createSlice({
    name:'posts',
    initialState:[],
    reducers:{
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      })

      .addCase(createPost.fulfilled, (state, action) => {
        state.push(action.payload);
      })

      .addCase(updatePost.fulfilled, (state, action) => {
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      })

      .addCase(likePost.fulfilled, (state, action) => {
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        return state.filter((post) => post._id !== action.payload);
      });
  },
})


export default postsSlice.reducer