// import React from "react";
// a jsx means html within a js file...
export const App = () => {
  // return React.createElement("h1", null, "Hello, world!"); // a simple js
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );

  return[<NetflixSeries/>, <NetflixSeries/>];//array with key  
};


// *1.Variables
//? you can embed any JavaScript variable withiun jsx by enclosing it in the curly brackets. The Value of the variable will be inserted into the DOM at the respected location.


const NetflixSeries=()=>{
  const name="Queen of tears";
  return(
    <> 
    <div>
      <img src="a.jpg" alt="" style={{width:"40%", height:"auto"}}/>
    </div>
    <h2>Name:{name}</h2>
  <h3>Rating:8.2</h3> 
  <p>Summary: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, harum unde nulla doloribus ex qui praesentium cum! Delectus cumque exercitationem, maiores eum quia nemo beatae ipsa repellat numquam eveniet at.</p>
  </>
  );}

//? Each jsx expression must have one parent element,which means if you try to return multiple elements,React will throw an error.
//?every jsx tag needs to be closed.you can use self-closing tags for elements that don't have children, e.g., <img src="url"/>