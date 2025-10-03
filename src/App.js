import React from 'react'
import About from './components/about'
import Pricing from './components/pricing'
import Products from './components/products'
import Banner from './components/banner'


const App = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Products/>
      <Pricing/>
    </div>
  )
}

export default App
