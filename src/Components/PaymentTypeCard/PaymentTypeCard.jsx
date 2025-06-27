import React from 'react'
import "./PaymentTypeCard.scss"

const PaymentTypeCard = ({img, title}) => {
  return (
    <div className='payment-type-card'>
        <img src={img} alt="" />
        <h1>{title}</h1>
    </div>
  )
}

export default PaymentTypeCard