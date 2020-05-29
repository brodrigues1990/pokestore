import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress } from '@material-ui/core';
import { usePokemon, PokemonContext } from '../../context/pokemonContext'
import PokeLoading from '../atoms/pokeLoading'
import CardPokemon from '../molecules/cardPokemon'
import CardType from '../molecules/cardType'
import MarketTemplate from '../template/marketTemplate'

const windowHeight = window.innerHeight;

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        padding: 0,
    },
    loadingContainer: {
        height: windowHeight - 200,
    },
}));

const Home = (props) => {

    const { pokemon, setPokemon } = usePokemon(PokemonContext);
    // console.log(pokemon);
    const classes = useStyles();
    console.log(pokemon.length);
    // if(pokemon.length !== 0){
    //     let lgs = pokemon.reduce((l, i) => {
    //          if (l.indexOf(i.types.type.name) === -1) { 
    //              //l.push(i.type); 
    //              console.log('entra')
    //             }
    //         // return l;
    //         console.log(JSON.stringify(l));
    //         console.log(JSON.stringify(i));
    //     }, []);
    //     console.log(lgs);
    // }
    const pokemonTypes = [
        { 'type': 'water', 'name': 'agua' },
        { 'type': 'fire', 'name': 'fogo' },
        { 'type': 'grass', 'name': 'grama ' }
    ]
    return (
        <>
            <MarketTemplate>
                {pokemon.length !== 0 ? (
                    <>
                        <Grid container spacing={2} className={classes.mainContainer}>
                            {
                                pokemonTypes.map((t) =>
                                    <CardType
                                        typePokemon={t.type}
                                        xs={12}
                                        md={4}

                                    />
                                )
                            }
                        </Grid>
                        <Grid container spacing={2} className={classes.mainContainer}>
                            {Object.keys(pokemon).map((pokemonId) =>
                                // getPokemonCard(pokemonId)
                                <CardPokemon
                                    pokemonId={pokemonId}
                                    key={pokemonId}
                                    xs={12}
                                    md={4}
                                    lg={3}
                                />
                            )}
                        </Grid>
                    </>
                ) : (
                        <Grid container className={classes.loadingContainer} direction="row" justify="center" alignItems="center">
                            <Grid item >
                                {/* <CircularProgress /> */}
                                {/* Novo Loading Pokeball */}
                                <PokeLoading />
                            </Grid>
                        </Grid>

                    )}
            </MarketTemplate>
        </>
    )

}

export default Home;