 import seriesData from "../api/seriesData.json";
 const NetflixSeries = () => {
  return (
    <ul>
        {
            seriesData.map((curElem)=>{
              return ( <li key={curElem.id}>
                  <div>
                    <img
                      src={curElem.img_url}
                      alt="curElem.name"
                      style={{ width: "40%", height: "auto" }}
                    />
                  </div>
                  <h2>Name:{curElem.name}</h2>
                  <h3>Rating:{curElem.rating}</h3>
                  <p>Summary:{curElem.description}</p>
                  <p>Genre:{curElem.genre}</p>
                  <p>Cast:{curElem.cast}</p>
                  <a href={curElem.watch_url} target="_blank">
                    <button>Watch now</button>
                  </a>
                </li>
              );
            })}
        
    </ul>
  );
};

//? Each jsx expression must have one parent element,which means if you try to return multiple elements,React will throw an error.
//?every jsx tag needs to be closed.you can use self-closing tags for elements that don't have children, e.g., <img src="url"/>


 export default NetflixSeries;
