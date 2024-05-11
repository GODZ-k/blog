import React from 'react'
import { Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}
