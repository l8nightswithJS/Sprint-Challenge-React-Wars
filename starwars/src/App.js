import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

const App = () => {
  const [people, setPeople] = useState([])
  

  useEffect(() => {
    async function fetch(){
        try{
            const character = await Axios.get('https://swapi.co/api/people/')
            setPeople(character.data.results);
            console.log(people);
        }
        catch(err){
            console.log(err)
        }
    }
    fetch()

    },[])

    return (
      <div className="App">
        {people.map(person => {
          return(
            <CharacterCard name={person.name} year={person.birth_year} height={person.height} films={person.films} mass={person.mass} />
          )
        })}
        </div>
    )
  
  
  }

export default App;


// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.