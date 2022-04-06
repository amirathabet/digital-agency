import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
    <Head>
        <title>Digital Agency</title>
        <link rel="icon" href="/logo.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
    </Head>
     <NavBar/>
      <main> {children}</main>
    <Footer/>
   
    </>
  );
}

export default Layout;