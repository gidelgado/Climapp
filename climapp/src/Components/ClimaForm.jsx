import React, { useState } from 'react'

const ClimaForm = ({onChangeCity}) => {
    const [city, setCity] = useState('')

    function onChangeInput(e){
        const value = e.target.value
        setCity(value)
    }
    function handleSubmit(e){
        e.preventDefault()
        onChangeCity(city)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' onChange={onChangeInput}/>
    </form>
  )
}

export default ClimaForm