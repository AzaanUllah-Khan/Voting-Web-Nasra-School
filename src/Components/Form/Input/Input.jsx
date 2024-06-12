import React from 'react'
import './Input.css'

const Input = ({id,placeholder,onChange}) => {
  return (
    <div className='inp'>
      <label htmlFor={id}>{id}</label>
      <input type="text" id={id} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input
