import React from 'react';
import axios from 'axios';
// import appConfig from '../assets/config.json';

// const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });
// const API = axios.create({ baseURL: appConfig.APP_API_URL });
const API = axios.create({baseURL: window.Configs.APP_API_URL});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

// const url = `${process.env.REACT_APP_API_URL}/posts`;

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);