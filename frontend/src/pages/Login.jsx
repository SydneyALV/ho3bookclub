import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';


const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();
    
    const handleLogInUser = () => {
        const data = {
            username,
            password,
        };

        axios
            .get(`http://localhost:5555/users/${username}`, data)
            .then((response) => {
                if (
                    password === response.data.password && username === response.data.username
                ) {
                    setLoggedIn(true)
                    enqueueSnackbar('User created successfully!', { variant: 'success' })
                    navigate('/')
                }
            })
            .catch((error) => {
                alert('An error happened and account could not be created. Please check console.')
                enqueueSnackbar('Error', { variant: 'error' })
                console.log(error)
            })
    }
    
    return (
        <div className='align-center'>
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Enter Username</label>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
                        required
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Enter Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
                        required
                    />
                </div>
                <button className='p-2 bg-sky-300 m-4 rounded-lg' onClick={handleLogInUser}>
                    Log In
                </button>
                <div className="flex flex-col justify-center">
                    <p className="text-center text-xl mr-4 text-gray-500 m-2">Do you not have an account?</p>
                    <Link to='/create-user' className="text-xl text-gray-500 text-center hover:text-blue-500">
                        No, create account.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login