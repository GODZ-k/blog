import React from 'react'
import { Home } from './Pages'
import { CreatePost, Footer, Header , Login, Register } from './Components'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import UserContextProvider from './Context/userContext.jsx'


function App() {
  return (
      <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        </Route>
      </Routes>
      </UserContextProvider>
  )
}

export default App