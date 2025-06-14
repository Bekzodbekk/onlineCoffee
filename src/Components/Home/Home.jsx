import React from 'react'
import "./home.scss"

const Home = () => {
    return (
        <div className='home-container'>
            <div className="left-section">

                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                <div className="features">
                    <div className="features-item bucket-feature">
                        <div className="icon">
                            <img src={"assets/icons/buck2.png"} alt="" />
                        </div>
                        <p>Compra simples e segura</p>
                    </div>
                    <div className="features-item box-feature">
                        <div className="icon">
                            <img src={"assets/icons/box.png"} alt="" />
                        </div>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div className="features-item clock-feature">
                        <div className="icon">
                            <img src={"assets/icons/clock.png"} alt="" />
                        </div>
                        <p>Entrega rápida e rastreada</p>
                    </div>
                    <div className="features-item coffe-feature">
                        <div className="icon">
                            <img src={"assets/icons/coffee.png"} alt="" />
                        </div>
                        <p>O café chega fresquinho até você</p>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <img src={"assets/basicImage/coffee.png"} alt="" />
            </div>
        </div>
    )
}

export default Home