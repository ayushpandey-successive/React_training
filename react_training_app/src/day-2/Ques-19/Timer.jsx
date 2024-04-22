import React from 'react'
import useTimer from './useTimer'

const Timer = () => {
    const [timer,active,pauseTimer,playTimer,resetTimer]=useTimer(10);
  return (
    <div>
        <h2>Timer</h2>
        <h3>{timer}</h3>
        <button onClick={playTimer} disabled={active}>Play Timer</button>
        <button onClick={pauseTimer} disabled={!active}>Pause Timer</button>
        
        <button onClick={resetTimer} >Reset Timer</button>
      
    </div>
  )
}

export default Timer
