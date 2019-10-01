import React from 'react';


//adding data function for grabbing data from api

export default function CharacterCard(props) {
    return(
        <section className="card">
            <h1 className="char-name">{props.name}</h1>

            <div className="char-info">
                <ul className="list">
                    <li>{"Year Born: " + props.year}</li>
                    <li>{"Height: " + props.height}</li>
                    <li><a href={props.films}>{"Films I've been in."}</a></li>
                    <li>{"Mass: " + props.mass}</li>
                </ul>
            </div>
        </section>
    )


}

