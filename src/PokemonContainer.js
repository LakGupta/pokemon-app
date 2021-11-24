import React from 'react'
import "./PokemonContainer.css"

export default function PokemonContainer({id, name, type, image}) {
    console.log(name);
    return (
        <div className="pokemon-container align-items-center">
            <div>
                <h5>{id}</h5>
            </div>
            <img src={image}></img>
            <div className="details">
                <h3>{name}</h3>
                <h5>{type}</h5>

            </div>

        </div>
    )
}
