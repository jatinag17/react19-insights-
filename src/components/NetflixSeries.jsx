 import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./Seriescard";
 const NetflixSeries = () => {
  return (
    <ul>
        { seriesData.map((curElem)=>(<SeriesCard key={curElem.id} curElem={curElem}/>
            ))}
        
    </ul>
  );
};

//? Each jsx expression must have one parent element,which means if you try to return multiple elements,React will throw an error.
//?every jsx tag needs to be closed.you can use self-closing tags for elements that don't have children, e.g., <img src="url"/>


 export default NetflixSeries;
