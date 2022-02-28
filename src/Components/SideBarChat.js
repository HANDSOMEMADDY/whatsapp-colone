import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {db}  from '../firebase';
import './sidebarchat.css'

function SideBarChat({addNewChat,id,name}) {

    const[seed,setseed] = useState('');
      
    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    },[])

    const createChat = () => {
        const roomName = prompt('please enter name for chat room');

        if (roomName) {
            db.collection('rooms').add({
                name:roomName
            });
        }
    }
  return !addNewChat ? (
      <Link to={`/rooms/${id}`}>
    <div className='sidebarchat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='sidebarchat-info'>
            <h1>{name}</h1>
            <p>last message</p>
        </div>
    </div>
    </Link>
  ) : (
      <div onClick={createChat} className='sidebarChat'>
          <h2>Add new chat</h2>
      </div>
  )
}
export default SideBarChat;