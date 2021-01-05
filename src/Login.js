import React, { useState } from 'react'
import { auth } from './firebase'
import './Login.css'
import swal from 'sweetalert'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilePic, setProfilePic] = useState('')
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
               displayName: userAuth.user.displayName,
               profileUrl: userAuth.user.photoURL,
            }))
        }).catch(error => swal(error))
    }

    const register = () => {
        if(!name) {
            return swal("Please Enter a Full Name", "Thank You", "error")
        }

        auth.createUserWithEmailAndPassword(email, password).then(userAuth => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name, 
                    photoURL: profilePic
                }))
            })
        }).catch((error) =>  swal(error))
    }

    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0vks" alt="LinkedIn_Logo"/>

            <form>
                <input value={name} 
                onChange={e => setName(e.target.value)} type="text" 
                placeholder='Full Name (required if registering)'/>

                <input type="text" 
                placeholder='Profile pic URL (optional)'
                value={profilePic}
                onChange={e => setProfilePic(e.target.value)}
                />

                <input value={email} 
                onChange={e => setEmail(e.target.value)} type="Email" 
                placeholder='Email'/>


                <input value={password} 
                onChange={e => setPassword(e.target.value)} 
                type="password"
                 placeholder='Password'/>

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a Member?{' '}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
