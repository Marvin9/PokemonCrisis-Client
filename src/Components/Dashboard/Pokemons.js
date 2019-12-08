import React, { Component } from 'react'

export default class Pokemons extends Component {

    constructor() {
        super()
        this.state = {
            pokemons : [
                { name : 'Bulbasaur', fileName : 'bulbasaur.gif' },
                { name : 'Caterpie', fileName : 'caterpie.gif' },
                { name : "Charmander", fileName : 'charmander.gif' },
                { name : 'Pidgey', fileName : 'pidgey.gif' },
                { name : 'Squitle', fileName : 'squirtle.gif' }
        ]
        }
    }

    render() {
        return (
            <div id="pokemons">
                <div className="pokemon-container d-flex mt-3 justify-content-around pt-2 pb-2" style={pokemonContainer}>
                    { this.state.pokemons.map((pokemon, key) => (
                        <img 
                            alt={pokemon.name} 
                            src={require("../../assets/" + pokemon.fileName)} 
                            className="pokemon-img rounded-circle" 
                            key={key} 
                            style={pokemonImg}
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title={pokemon.name}
                        />
                    )) }

                </div>

            </div>
        )
    }
}

let pokemonImg = {
    width : '35px',
    height : '35px',
    cursor : 'pointer'
},
pokemonContainer = {
    margin : '0 auto',
    width : '70%',
    borderRadius : '0px 0px 10px 10px',
    boxShadow : '0px 5px 20px 1px rgba(0, 0, 0, 0.2)'
}