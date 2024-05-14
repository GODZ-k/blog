import React from 'react'
import { Home } from './Pages'
import { CreatePost, Detailpost , Login, ProtectedRoutes, Register } from './Components'
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
        <Route path='/create' element={<ProtectedRoutes><CreatePost/></ProtectedRoutes>}/>
        <Route path='/post/:id' element={<ProtectedRoutes><Detailpost/></ProtectedRoutes>}/>
        </Route>
      </Routes>
      </UserContextProvider>
  )
}

export default App