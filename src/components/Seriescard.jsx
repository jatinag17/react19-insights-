export const SeriesCard=({data})=>{
    const {id,img_url,name,rating,description,cast,genre,watch_url}=data; //destructuring props
           return ( 
           <li>
                  <div>
                    <img
                      src={img_url}
                      alt="curElem.name"
                      style={{ width: "40%", height: "auto" }}
                    />
                  </div>
                  <h2>Name:{name}</h2>
                  <h3>Rating:{rating}</h3>
                  <p>Summary:{description}</p>
                  <p>Genre:{genre}</p>
                  <p>Cast:{cast}</p>
                  <a href={watch_url} target="_blank">
                    <button>Watch now</button>
                  </a>
                </li>
              );
};