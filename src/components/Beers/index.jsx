import { useEffect, useState } from "react";

function Beers(){
  const [beerList, setBeerList] = useState();
  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/ale`) //ale, stouts, red-ale
      .then(response => response.json())
      .then(beers => setBeerList(beers))
      .catch(alert);
  }, []);
  if(!beerList){
    return <h2>Loading...</h2>
  }
  return(
    <>
      <ul>
        {beerList.map(beer => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </>
  )

}

export default Beers;