import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([]);
    const [pokeFilter, setPokeFilter] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [nextPage, setNextPage] = useState(false);


    const fetchPokemon = async (pokemon) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            return await response.json();
        } catch (e) {
            throw new Error(`fetching ${pokemon.name}'s details went wrong`);
        }
    };

    const loadPokemon = async () => {

        let pokemons = [];
    
        await api.get(`/pokemon`)
            .then(response => {
                var next = response.data.next;
                var pokemonData = response.data.results
                console.log(pokemonData)

                pokemonData.map(async pokemon => {
                    const result = await fetchPokemon(pokemon);
                    result.price = Math.floor(Math.random() * 100);
                    //console.log(result)
                    pokemons.push(result);
                })
                console.log(pokemons)
                setPokemon(pokemons)
            })
            .catch(err => {
                console.log(err);
            })

    }


    useEffect(() => {
        //loadPokemon();
    }, []);

    return (
        <PokemonContext.Provider
            value={{
                pokemon,
                pokeFilter,
                setPokeFilter,
                cartList,
                setCartList
            }}>
            {children}
        </PokemonContext.Provider>
    )
};

// export const usePokemon = () => {
//     const context = useContext(PokemonContext);
//     if (!context) throw new Error("usePokemon must be used within a PokemonProvider");
//     const { pokemon, setPokemon } = context;
//     return { pokemon, setPokemon };
// }

export default PokemonProvider;