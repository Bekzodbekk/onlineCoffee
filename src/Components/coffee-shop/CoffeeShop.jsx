import React from 'react'
import "./coffeeShop.scss"
import CoffeeCard from '../coffee-card/CoffeeCard'
import coffee from '../../db/coffee'

const CoffeeShop = () => {
  console.log(coffee);

  return (
    <div className='shopping-coffee'>
      <h3 className="title">Nossos cafés</h3>

      <div className="coffee-items">
        {
          coffee.map((element, idx) => (

            <CoffeeCard
              key={idx}
              coffeeImage={element.image}
              coffeeProducts={element.products}
              desc={element.desc}
              name={element.name}
              price={element.price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default CoffeeShop