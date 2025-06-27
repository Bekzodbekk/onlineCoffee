import React from 'react'
import "./counter.scss"
const Counter = ({counterFunc, count}) => {
    return (
        <div className="counter">

            <div className="coffee-count">
                <span onClick={counterFunc} className='counter' >-</span>
                <span className='counter'>{count}</span>
                <span onClick={counterFunc} className='counter' >+</span>
            </div>
        </div>
    )
}

export default Counter