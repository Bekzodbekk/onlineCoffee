import React, { useState } from 'react'
import "./bucketItem.scss"

const BucketItem = () => {
    let [counterCoffee, setCounterCoffee] = useState(1)
    const counterCoffeeFunc = (e) => {
        if (e.target.innerText === "-"){
            setCounterCoffee(counterCoffee > 1 ? --counterCoffee : 1)
        }else{
            setCounterCoffee(++counterCoffee)
        }
        
    }
    return (
        <div className="bucket-item">
            <div className="coffee-image">
                <img src="assets/cofe/Coffee.png" alt="" />
                <div className="desc">
                    <h1 className="name">Expresso Tradicional</h1>
                    <h4 className="price">12.5$</h4>
                </div>
            </div>
            <div className="coffee-counter">
                <span onClick={counterCoffeeFunc}>-</span>
                <span>{counterCoffee}</span>
                <span onClick={counterCoffeeFunc}>+</span>
            </div>
        </div>
    )
}

export default BucketItem