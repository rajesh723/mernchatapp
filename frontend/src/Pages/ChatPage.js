import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react';

const ChatPage = () => {

  const [chats, setChats] = useState([]);

  const fetchChats = async ()=>{
    const data= await axios.get("/api/chats");
    setChats(data);
  }

useEffect(() => {
   fetchChats();
},[]);

  return (
    <>
      {chats.map((chat) =>(
        <div>{chat.chatName}</div>
      ))}
    </>
  );
  
};

export default ChatPage