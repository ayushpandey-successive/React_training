/*Build an HOC called withLogger that logs the events of a component (e.g., mounting, unmounting, updating). Apply this HOC to a component and display the logs in the browser console.*/
import React,{useState,useEffect} from 'react'

const WithLogger = (BaseComponent) => {
    
    return function EnhancedComponent(props) {
        const [count,setCount]=useState(0)
        
        useEffect(() =>{
            console.log("Component mounting.... " );

            return () => {
                console.log("Component unmounting.... " );
            }
            
           },[count])
           useEffect(() =>{
            console.log("Component updating.... " );
            
           })
           
       return (
        
         <BaseComponent {...props} setCount={setCount} count={count}/>
       );
    }
}

export default WithLogger