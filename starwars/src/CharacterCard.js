import React from 'react';


//adding data function for grabbing data from api

export default function CharacterCard(props) {
    return(
        <section className="card">
            <h1 className="name">{props.name}</h1>
        </section>
    )


}

