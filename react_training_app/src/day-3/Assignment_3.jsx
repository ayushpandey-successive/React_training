import Child from "./Ques-1/Child";
import ParentProvider from "./Ques-1/Parent";
import { ThemeProvider } from "./Ques-2/Parent2";
import ParentProvider2 from "./Ques-2/Parent2";
import Child2 from "./Ques-2/Child2";
import Ques3_Router from "./Ques-3/Ques3_Router";
import Ques4_Router from "./Ques-4-5/Ques4_Router"
import React from "react";
import AuthProvider from "./Ques-4-5/AuthProvider";
import Ques6_Routes from "./Ques-6/Ques6_Routes";
import { Route } from "react-router-dom";

const Assignment_3 = () => {
  return (
    <div>
      {/* <ParentProvider>
        <Child />
      </ParentProvider>
      <ParentProvider2>
        <ThemeProvider>
          <Child2 />
        </ThemeProvider>
      </ParentProvider2> */}

      {/* <Ques3_Router/> */}
    
      {/* <Ques4_Router/> */}
      <Ques6_Routes/>
      
      

      

      
      
    </div>
  );
};

export default Assignment_3;
