import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState([]);

    // Carrega todas os pokemons
    const loadPokemonByType = async () => {
        //codigo antigo
        // await api.get(`/pokemon?limit=20000`)
        //     .then(function (response) {
        //         const { data } = response;
        //         const { results } = data;
        //         const newPokemonData = [];
        //         //const results = response.data.results;
        //         console.log(results);

        //         results.forEach((pokemon, index) => {

        //             newPokemonData.push({
        //                 id: index + 1,
        //                 name: pokemon.name,
        //                 sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        //                 image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`,
        //                 price: Math.floor(Math.random() * 100)
        //             });
        //         });
        //         console.log(results);
        //         setPokemon(newPokemonData);
        //         return true;
        //     });

        //codigo novo
        const qtdPokemon = 151;
        const newPokemonData = [];
        
        for (let i = 1; i <= qtdPokemon; i++) {
            await api.get(`/pokemon/${i}`)
                .then(function (response) {
                    const { data } = response;
                   // console.log(data);
                    newPokemonData.push({
                        id: i,
                        name: data.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
                        image: `https://pokeres.bastionbot.org/images/pokemon/${i}.png`,
                        price: Math.floor(Math.random() * 100),
                        type: data.types[0].type.name,
                    });
                });

        }
        //console.log(newPokemonData);
        setPokemon(newPokemonData);
    }

    useEffect(() => {
        loadPokemonByType();
    }, []);

    useEffect(() => {
        
    }, [pokemon]);


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