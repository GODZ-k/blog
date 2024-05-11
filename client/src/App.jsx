import React from 'react'
import { Home } from './Pages'
import { Footer, Header , Login, Register } from './Components'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        </Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App