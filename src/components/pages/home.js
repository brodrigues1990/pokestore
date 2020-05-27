import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress } from '@material-ui/core';
import { usePokemon, PokemonContext } from '../../context/pokemonContext'
import MarketTemplate from '../template/marketTemplate'
import CardPokemon from '../molecules/cardPokemon'

const windowHeight = window.innerHeight;

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: 0,
    },
    loadingContainer: {
        height: windowHeight - 200,
    },
}));

const Market = (props) => {

    const { pokemon, setPokemon } = usePokemon(PokemonContext);
    // console.log(pokemon);
    const classes = useStyles();
    console.log(pokemon.length);
    return (
        <>
            <MarketTemplate>
                {pokemon.length !== 0 ? (
                    <Grid container spacing={2} className={classes.mainContainer}>
                        {Object.keys(pokemon).map((pokemonId) =>
                            // getPokemonCard(pokemonId)
                            <CardPokemon
                                pokemonId={pokemonId}
                                key={pokemonId}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                            />
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