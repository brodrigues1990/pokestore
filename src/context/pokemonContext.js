import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([]);

    // Carrega todas os pokemons
    const loadPokemonByType = async () => {

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
                        types:  data.types.map((t) => (
                            t.type.name
                        ))
                    });
                });

        }
        console.log(newPokemonData);
        setPokemon(newPokemonData);
    }

    useEffect(() => {
        loadPokemonByType();
    }, []);

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