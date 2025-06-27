import React from 'react'
import "./confirmPage.scss"

const ConfirmPage = () => {
  return (
    <div className='confirm-page'>
      <div className="confirm-info">
        <div className="title">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="info-content">
          <div className="location-info">
            <img src="assets/icons/locationConfirm.png" alt="" />
            <div className="location-data">
              <h1>Entrega em <span>Rua Joao Daniel Martinelli, 102</span></h1>
              <h1>Farrapos - Porto Alegre, RS</h1>
            </div>
          </div>
          <div className="time-info">
            <img src="assets/icons/clock.png" alt="" />
            <div className="time-data">
              <h1>Previsão de entrega</h1>
              <h1><span>20 min - 30 min</span> </h1>
            </div>
          </div>
          <div className="payment-info">
            <img src="assets/icons/usdIcon.png" alt="" />
            <div className="payment-data">
              <h1>Pagamento na entrega</h1>
              <h1><span>Cartão de Crédito</span></h1>
            </div>
          </div>
        </div>
      </div>
      <img src="assets/icons/motobike.png" alt="" />
    </div>
  )
}

export default ConfirmPage