import React, { useState } from 'react'
import "./app.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Home from '../../Components/Home/Home'
import CoffeeShop from '../../Components/coffee-shop/CoffeeShop'
import BucketSection from '../../Components/bucketSection/BucketSection'

const App = () => {
  let [bucketShow, setBucketShow] = useState(false)
  const bucketShowCheck = () =>{
    setBucketShow(!bucketShow)
    console.log(bucketShow);
    
  }
  return (
    <div className='app'>
      <div className="container">
        <BucketSection bucketShowCheck={bucketShow} bucketShowCheckFunc={bucketShowCheck}/>
        <div className="navbar">
          <Navbar bucketShowCheck={bucketShowCheck}/>
        </div>
        <div className="home">
          <Home />
        </div>
        <div className="coffee-shoppping">
          <CoffeeShop />
        </div>
      </div>
    </div>
  )
}

export default App