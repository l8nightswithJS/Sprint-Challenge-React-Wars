import React from 'react';
import './styles.css';
import styled from 'styled-components';

//adding data function for grabbing data from api
// const People = styled.section`
//     width: 40%;
//     margin: 2%;
//     border: 2px black solid;
//     padding: 1% 0 1% 0;
//     background-color: beige;
//     `; 

const List = styled.ul`
    list-style-type:none;
    padding: 0;
    `;

const ListItem = styled.li`
    margin: 2% 0 2% 0;
    font-size: 1.62rem;
    `;



export default function CharacterCard(props) {
    return(
        <div>    
            <h2 className="char-name">{props.name}</h2>
            
            <div className="char-info">
                <List>
                    <ListItem>{"Year Born: " + props.year}</ListItem>
                    <ListItem>{"Height: " + props.height}</ListItem>
                    <List>{"Mass: " + props.mass}</List>
                </List>
            </div>
        </div>        
    )


}

