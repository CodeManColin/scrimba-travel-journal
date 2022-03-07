

import React from "react"
import data from "./data"
import Journal from "./components/Journal"

import Header from "./components/Header"



function App() {

  const journal = data.map(item => {
        return (
            <Journal 
               key={item.title}
               item={item}
               />
           )
       })


  return (
    <div className="App">
     <Header />
    
     {journal}
    </div>
  );
}

export default App;
