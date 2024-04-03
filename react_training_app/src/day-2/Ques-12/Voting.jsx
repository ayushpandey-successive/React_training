/*.Create a simple voting application using the useReducer hook.
Set up a reducer to manage the votes for different options.
Create buttons representing voting options.
Use the useReducer hook to access the votes state and dispatch actions.
Allow users to vote for their preferred options.
Display the current vote count for each option.*/

import React, { useState, useReducer } from "react";

const voteReducer = (state, action) => {
    //console.log(state[1]);
  switch (action.type) {
    
    case "increment":
        const newState =state.map((ele)=>{
            if(ele.name === action.name){
                ele.votes = ele.votes + 1;
            }
            return ele;
        })
        return newState; 
        
      
    
    default:
      return state;
  }
};
const initialState =[
    {
        name:"BJP",
        votes:0,
    },
    {
        name:"Congress",
        votes:0,
    }
];

const Voting = () => {
    const [votes, dispatch] = useReducer(voteReducer, initialState);
    return (
        <div className="voting">
            <h2>Voting</h2>
            <button onClick={() => dispatch({ type: "increment",name:"BJP" })}>
                BJP
            </button>
            <button onClick={() => dispatch({ type: "increment", name:"Congress" })}>
                Congress
            </button>
            <h3>BJP: {votes[0].votes}</h3>
            <h3>Congress: {votes[1].votes}</h3>
        </div>
    );
}

export default Voting;
    
  