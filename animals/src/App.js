import {useState} from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal(){
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    
    return animals[Math.floor(Math.random() * animals.length)];
}
console.log(getRandomAnimal());

function App(){
    const [animals, setAnimals] = useState([]);

    const handleClick = () =>{
        setAnimals([...animals, getRandomAnimal()]);
    }

    return(
        <div>
            <button onClick={handleClick}>Add Animas!</button>
            <div>{animals}</div>
        </div>
    )
}

export default App;
