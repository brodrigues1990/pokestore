import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemon, setPokemon] = useState([]);
    const [pokeFilter, setPokeFilter] = useState([]);
    const [cartList, setCartList] = useState([]);

    // Carrega todas os pokemons
    const loadPokemonByType = async () => {

        const qtdPokemon = 10;
        const newPokemonData = [];

        for (let i = 1; i <= qtdPokemon; i++) {
            await api.get(`/pokemon/${i}`)
                .then(function (response) {
                    const { data } = response;
                    console.log(data)
                    // console.log(data);
                    newPokemonData.push({
                        id: data.id,
                        name: data.name,
                        sprite: data.sprites.front_default,
                        //image: data.image,
                        price: Math.floor(Math.random() * 100),
                        types: data.types.map((t) => (
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