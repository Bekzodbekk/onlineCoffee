import React, { useState } from 'react'
import "./coffeeCard.scss"

const CoffeeCard = ({ coffeeImage, coffeeProducts, name, desc, price }) => {
    let [coffeeCount, setCoffeeCount] = useState(1)
    const counterCoffeeFunc = (e) => {
        if (e.target.innerText === "-"){
            setCoffeeCount(coffeeCount > 1 ? --coffeeCount : 1)
        }else{
            setCoffeeCount(++coffeeCount)
        }
        
    }
    return (
        <div className='coffee-card'>
            <div className="coffee-image">
                <img src={coffeeImage} alt="" />
            </div>
            <div className="coffee-products">
                {coffeeProducts.map((element, idx) => (
                    <div key={idx} className="product-item">
                        <p className='product-name'>{element}</p>
                    </div>
                ))}
            </div>
            <div className="coffee-desc">
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
            <div className="card-actions">
                <div className="coffee-price">
                    <p>R$ <span>{price}</span></p>
                </div>
                <div className="right-action">
                    <div className="coffee-count">
                        <span className='counter' onClick={counterCoffeeFunc}>-</span>
                        <span className='counter'>{coffeeCount}</span>
                        <span className='counter' onClick={counterCoffeeFunc}>+</span>
                    </div>
                    <div className="bucket-btn">
                        <img src={"assets/icons/buck2.png"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard