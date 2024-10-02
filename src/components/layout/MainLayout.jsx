import React from 'react'
import { Outlet } from 'react-router-dom';

/* Components */
import Navbar from '../navbar/Navbar';

function MainLayout() {
  return (
    <div className='bg-slate-100'>
        <nav className='sticky top-0 z-10'>
            <Navbar />
        </nav>

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout;