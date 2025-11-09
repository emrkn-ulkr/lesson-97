import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

const BASE_URL = "http://localhost:3005";
function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data)
  }

  const createUser = async (user) => {
    const createUsr = await axios.post(`${BASE_URL}/users/`, user);
    console.log(createUsr.data);
  }

  const updateUser = async (userId, setUser) => {
    const remasteredUser = await axios.put(`${BASE_URL}/users/${userId}`, setUser);
    console.log(remasteredUser.data);
  }

  const deleteUser = async (userId) => {
    const deletedUser = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedUser.data);
  }


  const getUserPostId = async (Id) => {
    const userIdResponse = await axios.get(`${BASE_URL}/users/${Id}`);
    return userIdResponse.data.postId;
  }

  const getPostId = async (postId) => {
    const getPostResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return getPostResponse.data;
  }

  const getUserPost = async () => {
    const userPostId = await getUserPostId(1);
    const postDataUser = await getPostId(userPostId);
    console.log(postDataUser);
  }


  useEffect(() => {
    getUserPost();
    // const newUser = {
    //   "username": "Şule",
    //   "password": "4240"
    // }
    // createUser(newUser);

    // updateUser(2, {
    //   "username": "Yakup",
    //   "password": "vv"
    // });
    // deleteUser("5eea");

  }, []);

  return (
    <div>

    </div>
  )
}

export default App
