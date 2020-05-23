import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState();
    const [pokemonDetail, setPokemonDetail] = useState({});

    // Carrega todas os pokemons
    const loadPokemonByType = async () => {
        api.get(`/pokemon?limit=100`)
            .then(function (response) {
                const { data } = response;
                const { results } = data;
                const newPokemonData = [];
                results.forEach((pokemon, index) => {
                    
                    newPokemonData.push({
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                        image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`,
                        price: Math.floor(Math.random() * 100)
                    });
                });
                // console.log(results);
                setPokemon(newPokemonData);
                return true;
            });
    }

    useEffect(() => {
        loadPokemonByType();
        console.log(pokemon);
    }, []);
    // useEffect(() => {
    //     console.log("teste");
    //     // console.log(pokemon);

    //     for(let i  =0; i < pokemon.length; i++)
    //     {
    //         let res = api.get
    //     }

    //     // pokemon.map((obj) => {
    //     //     console.log(obj);
    //     // });

    // }, [pokemon]);

    
    return (
        <PokemonContext.Provider value={{ pokemon, setPokemon }}>
            {children}
        </PokemonContext.Provider>
    )
};

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    const { pokemon, setPokemon } = context;
    return { pokemon, setPokemon };
}

export default PokemonProvider;