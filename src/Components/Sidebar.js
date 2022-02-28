import React, { useEffect, useState } from 'react'
import './siderbar.css'
import { Avatar, IconButton } from '@material-ui/core'
import  DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from "@material-ui/icons/Chat"
import  MoreVertIcon  from '@material-ui/icons/MoreVert'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import SideBarChat from './SideBarChat'
import {db} from '../firebase';

function Sidebar() {  

    const [rooms ,setroom] = useState([]);

    useEffect(() => {
     const unsubcride = db.collection('rooms').onSnapshot((snapshot) => 
            setroom(snapshot.docs.map(doc => ({
                id:doc.id,
                data: doc.data(),
            }))
            ))
            return () => {
                unsubcride()
            }
    },[])
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <Avatar/>
            <div className='sidebar-right'>
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className='sidebar-search'>
            <div className='sidebar-serachcontainer'>
            <SearchOutlinedIcon/>
            <input placeholder='serach or new chat' type="text" />
            </div>
        </div>
        <div className='sidebar-chat'>
            <SideBarChat addNewChat/>
            {rooms.map(room => (
                <SideBarChat key={room.id} id={room.id}
                name={room.data.name}/>
            ))}
        </div>
    </div>
  )
}
export default Sidebar;