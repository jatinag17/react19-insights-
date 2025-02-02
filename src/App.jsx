import NetflixSeries from "./components/NetflixSeries";
export const App = () => {
  // return React.createElement("h1", null, "Hello, world!"); // a simple js
  return (
    <div>
      <NetflixSeries />
     
    </div>
  );

  // return[<NetflixSeries/>, <NetflixSeries/>];//array with key  
};


