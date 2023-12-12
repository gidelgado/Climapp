import React from 'react'

const ClimaMainInfo = ({clima}) => {
  return (
    <div> 
    <div> 
    <div>{clima?.location.name}</div>
    <div>{clima?.location.country}</div>
    </div>
    <div>
      <img 
      src= {`http:${clima?.current.condition.icon} `}
      width="128"
       alt={clima?.current.condition.text} />
    </div>
    <div>
      <div>{clima?.current.condition.text}</div>
      <div>{clima?.current.temp_c}°C</div>
      <div>{clima?.current.uv} Rayos Uv</div>
      <div>Viento {clima?.current.vis_km} Km</div>
    </div>
    </div>
  );
};

export default ClimaMainInfo;