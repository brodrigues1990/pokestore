import React, { createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';

export const PokeFilterContext = createContext();

const PokeFilterProvider = ({ children }) => {
    const [pokeFilter, setPokeFilter] = useState([]);

    return (
        <PokeFilterContext.Provider value={{ pokeFilter, setPokeFilter }}>
            {children}
        </PokeFilterContext.Provider>
    )
};

export const usePokeFilter = () => {
    const context = useContext(PokeFilterContext);
    if(!context) throw new Error("usePokeFilter must be used within a PokeFilterProvider");
    const { pokeFilter, setPokeFilter } = context;
    return { pokeFilter, setPokeFilter };
}

export default PokeFilterProvider;