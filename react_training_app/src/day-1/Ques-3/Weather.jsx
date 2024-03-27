import React from 'react'

function Weather(props) {
    let message ='';
    if(props.temp>25)
    message = `It is Sunny today. `
    else if(props.temp<10)
    message = `It is Cold today. `
else
message = `It is pleasant weather today. `
  return (
    <div>
      <h2>{message}</h2>
      <h3>Temperature: {props.temp}</h3>
    </div>
  )
}

export default Weather