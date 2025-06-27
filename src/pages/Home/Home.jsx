import React from 'react'
import CoffeeShop from "../../Components/coffee-shop/CoffeeShop"
import HomePage from "../../Components/Home/Home"

const Home = () => {
  return (
    <div className='home-cont'>
        <div className="home">
          <HomePage />
        </div>
        <div className="coffee-shoppping">
          <CoffeeShop />
        </div>
    </div>
  )
}

export default Home 