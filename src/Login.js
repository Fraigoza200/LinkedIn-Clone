import React from 'react'
import { auth } from './firebase'
import './Login.css'

function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginToApp = (e) => {
        e.preventDefault()
    }

    const register = () => {

    }

    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0vks" alt="LinkedIn_Logo"/>

            <form>
                <input type="text" placeholder='Full Name (required if registering)'/>

                <input type="text" placeholder='Profile pic URL (optional)'/>

                <input value={email} onChange={} type="Email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a Member?{' '}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
