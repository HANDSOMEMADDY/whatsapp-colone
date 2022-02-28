import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import './login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'


function Login() {

    const [{},dispatch] = useStateValue();
 
    const signin = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        }).catch((error) => alert(error.message))
    }
  return (
    <div className='login'>
        <div className='login-container'>
            <img src='https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg' alt='Whatsapp'/>
            <div className='login-text'>
                <h3>Sign in to Whatsapp</h3>
            </div>
            <Button type='submit' onClick={signin}>
                Sign In With Google
            </Button>
        </div>
    </div>
  )
}

export default Login