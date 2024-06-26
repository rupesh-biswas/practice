import '@/styles/globals.css'
import React from 'react'
import Navbar from '../../components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  )
}
