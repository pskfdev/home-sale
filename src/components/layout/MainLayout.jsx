import React from 'react'
import { Outlet } from 'react-router-dom';

/* Components */
import Navbar from '../navbar/Navbar';

function MainLayout() {
  return (
    <>
        <nav>
            <Navbar />
        </nav>

        <main>
            <Outlet />
        </main>
    </>
  )
}

export default MainLayout;