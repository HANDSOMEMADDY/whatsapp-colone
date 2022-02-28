import { Avatar, IconButton } from '@material-ui/core'
import  InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import  AttachFile  from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import React,{useState,useEffect} from 'react'
import MicIcon from '@material-ui/icons/Mic'
import './chat.css'
import { db } from '../firebase';
import { useParams } from 'react-router-dom';

function Chat() {
    const[input,setinput] = useState('')
    const[seed,setseed] = useState('')
    const{roomId} = useParams();
    const [roomname,setroomname] = useState('');
      
    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setroomname(snapshot.data().name)
            ))
        }
    },[roomId])
    useEffect(() => {
        setseed(Math.floor(Math.random() * 5000))
    },[roomId])

    const sendMessage = (e) => {
        e.preventDefault();

        setinput('')
    }
  return (
    <div className='chat'>
        <div className='chat-header'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className='chat-headerInfo'>
                <h3>{roomname}</h3>
                <p>Last seen at...</p>
            </div>
            <div className='chat-headerright'>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className='chat-body'>
            <p className={`chat-message  ${true && "char-reciver"}`}>
            <span className='chat-name'>Saurabh</span>
            hellow bro
            <span className='chat-time'>3:15pm</span>
            </p>

        </div>
        <div className='chat-footer'>
            <InsertEmoticonIcon/>
            <form>
                <input placeholder='type a message' type='text' value={input} onChange={(e) => setinput(e.targer.value)}/>
                <button onClick={sendMessage}>send a message</button>
            </form>
            <MicIcon/>
        </div>
    </div>
  )
}
export default Chat;