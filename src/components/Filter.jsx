import { useEffect } from "react"; 



function Filter({setActiveGenre, activeGenre, setFiltered, popular, setTitle}) {

useEffect(() => {

  switch (activeGenre) {
    case 0:
      setTitle("All");
      break;
    case 35:
      setTitle("Comedy");
      break;
    case 28:
      setTitle("Action");
      break;
    case 16:
      setTitle("Animation");
      break;
    case 27:
      setTitle("Horror");
      break;
    case 878:
      setTitle("Sci-Fi");
      break;
  }

if(activeGenre === 0){
    setFiltered(popular);
    return;
} 
const filtered = popular.filter((movie) => 
movie.genre_ids.includes(activeGenre) 
);

setFiltered(filtered);

}, [activeGenre, popular, setFiltered]);



  return (
    <div className="filterContainer">
    <button className={activeGenre === 0 ? "active" : "" } 
    onClick={() => setActiveGenre(0)}>All</button>

    <button className={activeGenre === 35 ? "active" : "" } 
    onClick={() => setActiveGenre(35)}>Comedy</button>
    
    <button className={activeGenre === 28 ? "active" : "" }
     onClick={() => setActiveGenre(28)}>Action</button>

     <button className={activeGenre === 16 ? "active" : "" }
     onClick={() => setActiveGenre(16)}>Animation</button>

    <button className={activeGenre === 27 ? "active" : "" }
     onClick={() => setActiveGenre(27)}>Horror</button>

    <button className={activeGenre === 878 ? "active" : "" }
     onClick={() => setActiveGenre(878)}>Sci-Fi</button>

    </div>
  );
}

export default Filter