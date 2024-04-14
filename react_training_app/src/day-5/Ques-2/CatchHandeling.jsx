/*Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.*/

import React, { useEffect, useState } from "react";

const CatchHandeling = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [url, setUrl] = useState("https://jsonpaceholder.typicode.com/posts");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return setData(result);
      })
      .catch((err) => {
        alert(`Error: ${err.message}`);
        setError(true);
      });
  }, [url]);

  return (
    <div>
      {error === true ? (<>
        <h1>Error</h1>
        <button onClick={()=>{setUrl("https://jsonplaceholder.typicode.com/posts") 
        setError(false)}}>redirect to correct page</button>
        </>
      ) : (
        data.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.id}</p>
              <p>title: {item.title}</p>
              <p>body: {item.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CatchHandeling;
