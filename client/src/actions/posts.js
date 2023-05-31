import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";



// Action Creators (functions that return an action)
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); // object with a type and payload
    dispatch({ type: FETCH_ALL, payload: data }); // <---
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

