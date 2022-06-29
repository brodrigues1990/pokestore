import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { usePokemon } from '../../hooks/usePokemon'
import PokeLoading from '../atoms/pokeLoading'
import CardPokemon from '../molecules/cardPokemon'
import CardType from '../molecules/cardType'
import MarketTemplate from '../template/marketTemplate'
import { LaptopWindows } from '@material-ui/icons';

const windowHeight = window.innerHeight;

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: theme.spacing(0, 0, 1, 0),
    },
    loadingContainer: {
        height: windowHeight - 200,
    },
    sentinel: {
        width: '100%',
        height: '3px',
        background: 'red'
    },
}));

const Home = (props) => {

    const { pokemon, pokeFilter, setPokeFilter } = usePokemon();
    const [pokemonCards, setPokemonCards] = useState([]);
    const classes = useStyles();
    const newPokemonData = [];

    //Observer ScrollInfinito
    useEffect(() => {
        const sentinela = document.querySelector('#sentinela');
        const options = {};
        const observer = new IntersectionObserver((entries) => {
            if (entries.some(entry => entry.isIntersecting)) {
                console.log("elemento visivel");
            }
        }, options);

        observer.observe(sentinela);

        return () => observer.disconnect();
    }, []);

    //Traz o pokemon pelo Filtro
    const handlePokemonCards = () => {
        console.log(pokemon.length)

        console.log(pokeFilter.length)
        if (pokeFilter.length !== 0) {
            pokemon.filter((elem) => {
                if (elem.name === pokeFilter) { return newPokemonData.push(elem) }
            });
            console.log(newPokemonData)
            setPokemonCards(newPokemonData)
        } else {
            console.log('entrou')
            setPokemonCards(pokemon)
        }
    }

    window.testDumb = handlePokemonCards;

    useEffect(() => {
        //if (pokemon.length !== 0) {
            handlePokemonCards()
            console.log(pokemon);
       // }
        //setPokemonCards(pokemon);
        console.log(pokemonCards);
    }, [pokemon, pokeFilter]);

    useEffect(() => {

        console.log(pokemonCards);
    }, [pokemonCards]);


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
                                pokemonTypes.map((t, index) =>
                                    <CardType
                                        typePokemon={t.type}
                                        key={index}
                                        xs={12}
                                        md={4}
                                    />
                                )
                            }
                        </Grid>
                        <Grid container spacing={2} className={classes.mainContainer}>
                            {
                                pokemonCards.map((p) =>
                                    //console.log(p)
                                    <CardPokemon
                                        pokeCard={p}
                                        key={p.id}
                                        xs={12}
                                        md={4}
                                        lg={3}
                                    />
                                )
                            }
                        </Grid>
                    </>
                ) : (
                    <Grid container className={classes.loadingContainer} direction="row" justify="center" alignItems="center">
                        <Grid item >
                            <PokeLoading />
                        </Grid>
                    </Grid>
                )}
                <div id="sentinela" className={classes.sentinel}></div>
            </MarketTemplate>
        </>
    )

}

export default Home;