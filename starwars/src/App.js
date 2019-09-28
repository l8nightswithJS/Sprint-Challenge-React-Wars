import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

const App = () => {
  const [people, setPeople] = useState([])
  const [names, setNames] = useState([]);

  useEffect(() => {
    async function fetch(){
        try{
            const people = await Axios.get('https://swapi.co/api/people/')
            
            const name = people.Data;
            setPeople(name);
            console.log(people.data);
            const data = people.data;
            const names = []
            const map = data.map((name) => (
              names.push(name.results)
            ))
            
            setNames(names)
        }
        catch(err){
            console.log(err)
        }
    }
    fetch()

    },[])

    return (
      <div className="App">
        <div className="header-styles">
          <h1 className="Header">React Wars</h1>
        </div>
        {/* <CharacterCard name={people} /> */}
        <Card />
        </div>
      )


  function Card() {
    return(
      // <div className="Card">{people.data.results.map((names) => (
        
      //   <h1 className="header-style">{names.Data}</h1>
      // ))}
      // {console.log(people.data)}
          
      // </div>
<div></div>
      )
      
  }
  
  
  }

export default App;


// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.