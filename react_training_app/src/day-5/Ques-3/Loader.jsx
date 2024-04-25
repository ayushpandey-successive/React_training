/*Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded.*/

import React, { useEffect, useState } from "react";

const Loader = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(true);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          return setData(result);
        })
        .catch((err) => {
          alert(`Error: ${err.message}`);
        });
        setError(false);
    }, 5000);

    
  }, []);

  return (
    <div>
      {error? (
        <h1>Loading....</h1>
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

export default Loader;
