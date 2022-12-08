import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress } from '@material-ui/core';
import { usePokemon } from '../../hooks/usePokemon'
import PokeLoading from '../atoms/pokeLoading'
import CardPokemon from '../molecules/cardPokemon'
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

const Type = (props) => {

    const { pokemon } = usePokemon();
    const [pokemonByType, setPokemonByType] = useState([]);
    console.log('entrou na pagina Type');
    const classes = useStyles();
    console.log(pokemon.length);
    const newPokemonData = [];
    const typePokemon = props.match.params.type;

    //Traz os pokemon por Tipo 
    const handlePokemonByType = () => {
        if (pokemon.length !== 0) {
            pokemon.map((p, key) => {
                p.types.filter((elem) => {
                    if (elem === typePokemon) { return newPokemonData.push(p) }
                });
            })
            console.log(newPokemonData)
            setPokemonByType(newPokemonData)
        }
    }

    useEffect(() => {
        handlePokemonByType()
        console.log(pokemonByType)
    }, [pokemon]);

    return (
        <>
            <MarketTemplate>
                {pokemonByType.length !== 0 ? (
                    <>
                        <Grid container spacing={2} className={classes.mainContainer}>
                            {pokemonByType.map((p) =>
                                <CardPokemon
                                    pokeCard={p}
                                    key={p}
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                />
                            )}
                        </Grid>
                    </>
                ) : (
                        <Grid container className={classes.loadingContainer} direction="row" justify="center" alignItems="center">
                            <Grid item >
                                {/* Novo Loading Pokeball */}
                                <PokeLoading />
                            </Grid>
                        </Grid>

                    )}
            </MarketTemplate>
        </>
    )

}

export default withRouter(Type);