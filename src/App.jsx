import {NetflixSeries,Footer }from "./components/NetflixSeries";
export const App = () => {
  // return React.createElement("h1", null, "Hello, world!"); // a simple js
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <Footer/>
    </div>
  );

  // return[<NetflixSeries/>, <NetflixSeries/>];//array with key  
};


