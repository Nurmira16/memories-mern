import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/index.js';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const { data } = await api.fetchPosts();
    return data;
  }
);

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post) => {
    const { data } = await api.createPost(post);
    return data;
  }
);

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, post }) => {
    const { data } = await api.updatePost(id, post);
    return data;
  }
);

export const likePost = createAsyncThunk(
  'posts/likePost',
  async (id) => {
    const { data } = await api.likePost(id);
    return data;
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id) => {
    await api.deletePost(id);
    return id;
  }
);
