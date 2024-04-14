/*Create a React component that fetches data from a public API (e.g., JSONPlaceholder) using Axios and displays it on the page.*/

import React,{useEffect} from 'react'
import axios from 'axios'

const FetchAxio = () => {
    const [data, setData] = React.useState([]);
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res => setData(res.data)).catch((err) => {
        console.log(err)
        })
        
       },[])
    
  return (
    <div>
      <h3>Api Data</h3>
      {
        data.map((item, index) => {
          return (
            <div key={index}>
                <p>{item.id}</p>
              <p>title: {item.title}</p>
              <p>body: {item.body}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default FetchAxio
