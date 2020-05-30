import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { usePokemon, PokemonContext } from '../../context/pokemonContext';
import { usePokeFilter, PokeFilterContext } from '../../context/pokeFilterContext';
import Price from '../atoms/price';

const useStyles = makeStyles((theme) => ({
    // search: {
    //     position: 'relative',
    //     backgroundColor: fade(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: fade(theme.palette.common.white, 0.25),
    //     },
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //         marginLeft: theme.spacing(1),
    //         width: 'auto',
    //     },
    //     borderRadius: 100,
    // },
    // searchIcon: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // inputRoot: {
    //     color: 'inherit',
    // },
    // inputInput: {
    //     padding: theme.spacing(1, 1, 1, 0),
    //     // vertical padding + font size from searchIcon
    //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //     transition: theme.transitions.create('width'),
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //         width: '0',
    //         '&:focus': {
    //             width: '20ch',
    //         },
    //     },
    // },
}));


const SearchBar = ({ value }) => {
    const classes = useStyles();
    const history = useHistory();
    const { pokemon } = usePokemon(PokemonContext);
    const { pokeFilter, setPokeFilter } = usePokeFilter(PokeFilterContext);

    useEffect(() => {
        console.log(pokeFilter)
    }, [pokeFilter]);

    return (
        <Autocomplete
            id="search-pokemon"
            style={{ width: 300 }}
            options={pokemon}
            getOptionLabel={(option) => option.name}
            onInputChange={(event, newInputValue) => {
                setPokeFilter(newInputValue);
                history.push({
                    pathname: `/pokestore/`,
                });
            }}
            renderInput={(params) => (
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <TextField {...params} classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                        variant="outlined"
                        label="Caçar Pokémon..."
                        placeholder="Escolha alguns Pokémon ..."
                    />
                </div>
            )}
            renderOption={(option, { inputValue }) => {
                const matches = match(option.name, inputValue);
                const parts = parse(option.name, matches);

                return (
                    <div>
                        {parts.map((part, index) => (
                            <span key={index} style={{ fontWeight: part.highlight ? 800 : 400 }}>
                                {/* {console.log(part)} */}
                                {part.text}
                            </span>
                        ))}
                    </div>
                );
            }}
        />
    );
};

export default SearchBar;