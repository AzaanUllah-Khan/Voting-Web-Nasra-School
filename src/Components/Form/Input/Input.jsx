import React from 'react'
import './Input.css'

const Input = ({id,placeholder}) => {
  return (
    <div className='inp'>
      <label htmlFor={id}>{id}</label>
      <input type="text" id={id} placeholder={placeholder}/>
    </div>
  )
}

export default Input
