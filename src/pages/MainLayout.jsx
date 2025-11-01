import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
const MainLayout = ({ children }) => {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white">
        {children}
    </main>
    <Footer />
    </>
  )
}

export default MainLayout