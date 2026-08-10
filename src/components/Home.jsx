import React from 'react'
import Header from './Header'
import MovieSlider from './MovieSlider'
import MovieItems from './MovieItems'
import Trailers from './Trailers'
import Latestnew from './Latestnew'
import Footer from './Footer'

function Home() {
  return (
    <>
        <MovieSlider />
        <MovieItems />
        <Trailers />
        <Latestnew />
    </>
  )
}

export default Home
