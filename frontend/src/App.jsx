import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-user' element={<CreateAccount />} />
      <Route path='/login' element={<Login />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App