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


//* 1.Variables
//? you can embed any JavaScript variable withiun jsx by enclosing it in the curly brackets. The Value of the variable will be inserted into the DOM at the respected location.

//* 2. Expressions
//? JSX allows you to write Javascript expressions inside curly braces.This includes operations , function calls, and other Javascript expressions that produce  a value.

//* 3. Function Calls
//? Functions, especially those that return JSX functions,can be invoked directly within your JSX...
const NetflixSeries=()=>{
  const name="Queen of tears";
  const rating=5+3.2;
  const returnGenre=()=>{
    const genre="Queen";
    return genre;
  }
  return(
    <> 
    <div>
      <img src="a.jpg" alt="" style={{width:"40%", height:"auto"}}/>
    </div>
    <h2>Name:{name}</h2>
  <h3>Rating:{rating}</h3> 
  <p>Summary: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, harum unde nulla doloribus ex qui praesentium cum! Delectus cumque exercitationem, maiores eum quia nemo beatae ipsa repellat numquam eveniet at.</p>
  <p>Genre:{returnGenre()}</p>
  </>
  );}

//? Each jsx expression must have one parent element,which means if you try to return multiple elements,React will throw an error.
//?every jsx tag needs to be closed.you can use self-closing tags for elements that don't have children, e.g., <img src="url"/>