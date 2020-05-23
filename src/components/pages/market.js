import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress } from '@material-ui/core';
import { usePokemon, PokemonContext } from '../../context/pokemon'
import MarketTemplate from '../template/marketTemplate'
import CardProduct from '../organisms/cardProduct'

const windowHeight = window.innerHeight;
console.log(windowHeight);

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        padding: 0,
    },
    loadingContainer: {
        height: windowHeight - 200,
    },
}));

const Market = (props) => {

    const { pokemon, setPokemon } = usePokemon(PokemonContext);
    console.log(pokemon);
    const classes = useStyles();

    return (
        <>
            <MarketTemplate>
                {pokemon ? (
                    <Grid container spacing={2} className={classes.pokedexContainer}>
                        {Object.keys(pokemon).map((pokemonId) =>
                            // getPokemonCard(pokemonId)
                            <CardProduct pokemonId={pokemonId} />
                        )}
                    </Grid>
                ) : (
                        <Grid container className={classes.loadingContainer} direction="row" justify="center" alignItems="center">
                            <Grid item >
                                <CircularProgress />
                            </Grid>
                        </Grid>
                    )}
            </MarketTemplate>
        </>
    )

}

export default Market;