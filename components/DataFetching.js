import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {
    const [planets, setPlanets] = useState([])     //Use State Variable, Initialize post to empty array

    useEffect(() => {       // Effect to fetch data from url endpoint
        axios.get('https://swapi.dev/api/starships/')  // Request using axios
            .then(res => {      // Promise return
                console.log(res)
                setPlanets(res.data.results)     // Setting post to render data onto browser, updates post state variable 
            })
            .catch(err => {     // Logging error if any appears
                console.log(err)
            })
    })

    return(
        <div>
            <ul className= "planet-box"> 
                {planets.map(planet => (        // Rendering list onto browser.. mapping over post, 
                <li key={planet.id} className= "planet-names">{planet.name}</li>     // For each post returning list item where key equals post.id & innerhtml is post.title
                                                     // For each post returning list item where key equals post.id & innerhtml is post.title
                ))}
            </ul>
        </div>
    )
}
export default DataFetching;