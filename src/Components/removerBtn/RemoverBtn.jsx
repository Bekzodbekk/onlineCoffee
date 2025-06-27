import React from 'react'
import "./removerBtn.scss"

const RemoverBtn = () => {
  return (
    <button className='remover-btn'>
        <img src="assets/icons/trash.png" alt="Remove item" />
        <h1>Remover</h1>
    </button>
  )
}

export default RemoverBtn