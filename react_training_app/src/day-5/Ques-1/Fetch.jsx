/*1.Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.*/

import React, { useEffect } from 'react'

const Fetch = () => {
    const [data, setData] = React.useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json()).then((result) => setData(result)).catch((err) => {
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

export default Fetch
