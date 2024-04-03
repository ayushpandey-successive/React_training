/*Build a custom hook named useTimer for creating countdown timers.
Create a useTimer hook that takes a countdown duration as a parameter.
Use setInterval to decrement the timer at regular intervals.
Return the current timer value and methods to start, pause, and reset the timer.
Develop a component that utilizes the useTimer hook to display and control a countdown.*/

import React,{useState,useEffect} from "react";

export default function useTimer(initial){
    const [timer,setTimer]= useState(initial)
    const [active,setActive]= useState(false);
    useEffect(()=>{
        let d;
        if(!active || timer<=0)
        {
            clearInterval(d);
        }
        else{
           d= setInterval(()=>{
                setTimer((pre)=> pre-1);
            },1000)
        }

        return ()=>clearInterval(d);
    },[timer,active])

    const pauseTimer=()=>{
        setActive(false);
    }
    const playTimer=()=>{
        setActive(true)
    }
    const resetTimer=()=>{
        setTimer(10);
    }
    return [timer,active,pauseTimer,playTimer,resetTimer]
}