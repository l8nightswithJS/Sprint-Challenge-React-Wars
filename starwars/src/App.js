import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import './styles.css';
import styled from 'styled-components';

const App = () => {
  const [people, setPeople] = useState([])

  const Wrapper = styled.section`
  padding: 2em;
  background: black;
  width: 100%;
`;

  const Container = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #c3c3c3;
  display: -webkit-flex; /* Safari */
  -webkit-flex-flow: row-reverse wrap; /* Safari 6.1+ */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  `;

  const People = styled.section`
    width: 25%;
    margin: 2%;
    border: 2px black solid;
    background-color: beige;
    `; 

  const Header = styled.h1`
    color: grey;
  `

  const Footer = styled.h4`
    color: grey;
    background-color: black;
    padding: 2em;
    width: 100%;
    margin: 0 auto;
  `

  

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

    },[people])

    return (
      <div className="App">
        <Wrapper><Header>StarWars Characters</Header></Wrapper>

        <Container>

          {people.map(person => {

            return(
              <People>

                <CharacterCard 
                  name={person.name} 
                  year={person.birth_year} 
                  height={person.height} 
                  films={person.films} 
                  mass={person.mass} />

              </People>

                )
            })}

        </Container>
        <Footer><h4>{'Page Created by: Eduardo Jimenez'}</h4></Footer>

        </div>
    )
  }

export default App;


// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.