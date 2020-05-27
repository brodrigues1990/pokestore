import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress } from '@material-ui/core';
import { usePokemon, PokemonContext } from '../../context/pokemonContext'
import MarketTemplate from '../template/marketTemplate'
import CardPokemon from '../molecules/cardPokemon'

const windowHeight = window.innerHeight;

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        padding: 0,
    },
    loadingContainer: {
        height: windowHeight - 200,
    },
}));

const PokemonByType = (props) => {

    const { pokemon, setPokemon } = usePokemon(PokemonContext);
    // console.log(pokemon);
    const classes = useStyles();

    return (
        <>
            <MarketTemplate>
                {pokemon ? (
                    <Grid container spacing={2} className={classes.pokedexContainer}>
                        {Object.keys(pokemon).map((pokemonId) =>
                            // getPokemonCard(pokemonId)
                            <CardPokemon pokemonId={pokemonId} key={pokemonId} />
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

export default PokemonByType;