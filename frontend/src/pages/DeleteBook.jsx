import React, { useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    setLoading(false);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        alert('Book deleted successfully!')
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console.')
        console.log(error)
      })}

  return (
    <div className='p-4'>
      {/* <BackButton /> */}
      <h1 className='text-3xl my-4 text-center'>Delete Book</h1>
      { loading ? <Spinner /> : '' }
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2x1'>Are you sure you want to delete this book?</h3>
        <div className = 'flex flex-row '>
          <Link
            to='/'
            className='p-4 bg-blue-400 m-8 w-full text-center rounded-xl'
          >
            No, do not delete.
          </Link>
          <button 
            className='p-4 bg-red-400 m-8 w-full text-center rounded-xl'
            onClick={handleDeleteBook}
          >
            Yes, delete it!
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteBook;