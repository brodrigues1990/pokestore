import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { usePokemon } from '../../hooks/usePokemon'
import Price from '../atoms/price';

const useStyles = makeStyles((theme) => ({
    autoComplete: {
        width: 300,
        
    },
    search: {
        // position: 'relative',
        // backgroundColor: fade(theme.palette.common.white, 0.15),
        // '&:hover': {
        //     backgroundColor: fade(theme.palette.common.white, 0.25),
        // },
        // marginLeft: 0,
        // width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(1),
        //     width: 'auto',
        // },
        // borderRadius: 100,
        position: 'relative',
        marginLeft: 8,
        marginRight: 16,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.15)'
    },
    searchIcon: {
        // padding: theme.spacing(0, 2),
        // height: '100%',
        // position: 'absolute',
        // pointerEvents: 'none',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: 72,
        height: '100%',
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        pointerEvents: 'none',
        justifyContent: 'center',

    },
    inputRoot: {
        border: 0,
        //paddingLeft: 60
    },
    inputInput: {
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
        width: 120,
        transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        position: 'absolute',
        top: 0,
        left: 0,
        borderColor: 'transparent',
        boxShadow: 'none',
        opacity: 1,
        background: 'none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)',
        '&:focus': {
            width: 170,
        },

    },
    textFieldContainer: {
        paddingLeft: 60
    }
}));


const SearchBar = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { pokemon, pokeFilter, setPokeFilter } = usePokemon();

    const handleSearch = (d) => {
        
        if (props.fnSearch) {
            props.fnSearch(d);
            console.log(d)
        }
    }

    return (
        <Autocomplete
            id="search-pokemon"
            className={classes.autoComplete}
            options={props.pokemonList}
            getOptionLabel={(option) => option.name}
            onInputChange={(event, newInputValue) => {
                // setPokeFilter(newInputValue);
                // console.log(newInputValue)
                // history.push({
                //     pathname: `/pokestore/search=${newInputValue}`,
                // });
                handleSearch(newInputValue)
            }}
            renderInput={(params) => (
                <div className={classes.search}>
                    {/* <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div> */}

                    <div >
                        <TextField {...params} classes={{
                            root: classes.inputRoot,
                            //input: classes.inputInput,
                        }}
                        // InputProps={{
                        //     classes: {
                        //         ///root: classes.inputRoot,
                        //         focused: classes.textFieldContainer
                        //     }
                        // }}
                            variant="outlined"
                            placeholder="Buscar Pokémon..."
                        />
                    </div>
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