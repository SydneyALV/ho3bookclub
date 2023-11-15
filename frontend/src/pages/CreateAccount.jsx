import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateAccount = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleCreateUser = () => {
        const data = {
            username,
            password,
        };

        axios
            .post('http://localhost:5555/users', data)
            .then(() => {
                enqueueSnackbar('User created successfully!', { variant: 'success' })
                navigate('/')
            })
            .catch((error) => {
                alert('An error happened and account could not be created. Please check console.')
                enqueueSnackbar('Error', { variant: 'error' })
                console.log(error)
            })
    }


    return (
        <div className="justify-self-auto">
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Create Username</label>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
                        required
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Create New Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
                        required
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Retype New Password</label>
                    <input
                        type='password'
                        // value={password}
                        // onChange={(e) => { e.target.value === password }}
                        className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-4 rounded-lg' onClick={handleCreateUser}>
                    Create Account
                </button>
                <div className="flex flex-col justify-center">
                    <p className="text-center text-xl mr-4 text-gray-500 m-2">Do you already have an account?</p>
                    <Link to='/login' className="text-xl mr-4 text-gray-500 justify-center m-auto">
                        Yes, login instead.
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount