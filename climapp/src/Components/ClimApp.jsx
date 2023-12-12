import React, { useEffect, useState } from 'react'
import ClimaForm from './ClimaForm'
import ClimaMainInfo from './ClimaMainInfo'

const Climapp = () => {
  const [clima, setClima] = useState(null)

  useEffect(()=>{
     climaInfo();
  },[])

  async function climaInfo(city = "san miguel de tucuman") {
    try {
      const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=30d23190075742c2974180328232311&q=${city}`)
      const requestJson = await request.json()
      setClima(requestJson)
      console.log(requestJson)

    } catch (error) {
      console.log(error)
    }
  }
    function handleChangeCity(city) {
      setClima(null)
      climaInfo(city)
    }



  





  return (
    <>
      <ClimaForm onChangeCity={handleChangeCity} />
      <ClimaMainInfo clima= {clima} />

    </>
  )
}

export default Climapp;