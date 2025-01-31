// import React from "react";

export const App = () => {
  // return React.createElement("h1", null, "Hello, world!"); // a simple js
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
  // a jsx means html within a js file...
};

const NetflixSeries=()=>{
  return(
    <div> 
    <div>
      <img src="a.jpg" alt="" style={{width:"40%", height:"auto"}}/>
    </div>
    <h2>Name:Queen of tears</h2>
  <h3>Rating:8.2</h3> 
  <p>Summary: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, harum unde nulla doloribus ex qui praesentium cum! Delectus cumque exercitationem, maiores eum quia nemo beatae ipsa repellat numquam eveniet at.</p>
  </div>
  );}

//? Each jsx expression must have one parent element,which means if you try to return multiple elements,React will throw an error.
//?every jsx tag needs to be closed.you can use self-closing tags for elements that don't have children, e.g., <img src="url"/>