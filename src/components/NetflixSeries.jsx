export const NetflixSeries = () => {
  const name = "Queen of tears";
  const rating = 5 + 3.2;
  const returnGenre = () => {
    const genre = "Queen";
    return genre;
  };
  const age = 5;
  return (
    <>
      <div>
        <img src="a.jpg" alt="" style={{ width: "40%", height: "auto" }} />
      </div>
      <h2>Name:{name}</h2>
      <h3>Rating:{rating}</h3>
      <p>
        Summary: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
        harum unde nulla doloribus ex qui praesentium cum! Delectus cumque
        exercitationem, maiores eum quia nemo beatae ipsa repellat numquam
        eveniet at.
      </p>
      <p>Genre:{returnGenre()}</p>
      {/* <p>{age>=18 && "you can vote"}</p>  */}
      {/* conditional rendering   */}
      <button>{age >= 18 ? "Watch now" : "Not Available"}</button>
    </>
  );
};

//? Each jsx expression must have one parent element,which means if you try to return multiple elements,React will throw an error.
//?every jsx tag needs to be closed.you can use self-closing tags for elements that don't have children, e.g., <img src="url"/>


// export default NetflixSeries;

export const Footer=()=>{
    return(
        <p>copyright @jatin</p>
    );
};