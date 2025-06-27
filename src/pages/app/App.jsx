import React, { useState } from 'react'
import "./app.scss"
import Navbar from '../../Components/Navbar/Navbar'
import Home from '../../pages/Home/Home'
import CoffeeShop from '../../Components/coffee-shop/CoffeeShop'
import BucketSection from '../../Components/bucketSection/BucketSection'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import TransactionPage from '../transaction/TransactionPage'
import ConfirmPage from '../confirmPage/ConfirmPage'

const App = () => {
  let [bucketShow, setBucketShow] = useState(false)
  const bucketShowCheck = () => {
    setBucketShow(!bucketShow)
    console.log(bucketShow);

  }
  return (
    <BrowserRouter>
      <div className='app'>

        <div className="container">
          <BucketSection bucketShowCheck={bucketShow} bucketShowCheckFunc={bucketShowCheck} />
          <div className="navbar">
            <Navbar bucketShowCheck={bucketShowCheck} />
          </div>
          <Routes>
            <Route path='/' element={<Navigate to={"/home"} replace />} />
            <Route path='/home' element={<Home />} />
            <Route path='/transaction' element={<TransactionPage />} />
            <Route path='/confirm-page' element={<ConfirmPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App