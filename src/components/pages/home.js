import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { usePokemon } from '../../hooks/usePokemon'
import PokeLoading from '../atoms/pokeLoading'
import ButtonType from '../atoms/buttonType'
import CardPokemon from '../molecules/cardPokemon'
import MarketTemplate from '../template/marketTemplate'
import { LaptopWindows } from '@material-ui/icons';
import PokeApi, { EPokemonType } from "../../services/PokeApi";

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


const Home = (props) => 
{
    // const { pokemon, pokeFilter, setPokeFilter } = usePokemon();
    const [api]                       = useState(new PokeApi());
    const [carregando, setCarregando] = useState(true);
    const [montado, setMontado]       = useState(true);

    
    const [pokemonCards, setPokemonCards] = useState([]);
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const classes = useStyles();
    const newPokemonData = [];

    const pokemonTypesTranslate = [
        { 'type': 'water', 'name': 'agua' },
        { 'type': 'fire', 'name': 'fogo' },
        { 'type': 'grass', 'name': 'grama ' }
    ]

    async function fnLoad()
    {
        const lstPokemonDetalhe = await api.getLista();
        console.log(lstPokemonDetalhe);

        if(montado) 
        {
            if(props.match.params.type){
                setPokemonCards(api.filterFromCacheByType(props.match.params.type))
            }else{
                setPokemonCards(lstPokemonDetalhe)
            }
            setPokemonTypes(
                //traz todos os tipos de pokemon
                //api.lstTipos.map(item => { return {type: item, name: item} })
                pokemonTypesTranslate
            )
            setCarregando(false);
        }
    }

    // onLoad
    useEffect( () => {
        console.log(montado)
        window.pokeApi = api;
        setMontado(true);

        if(montado) fnLoad();
        
        return () => {
            setMontado(false);
        }
    }, []);

    //Filtra Busca
    useEffect(() => {
        
        if(props.match.params.search){
            console.log('Filtro Busca ' + props.match.params.search)
            setPokemonCards(api.handlePokemonSearch(props.match.params.search))
        } 
        
    },[props.match.params.search])

    //Reseta Filtro de Tipo
    useEffect(() => {
        
        if(!props.match.params.type){
            console.log('Filtro Tipo ' + props.match.params.type)
            setPokemonCards(api.lstPokemon)
        }
        
    },[props.match.params.type])
    
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



  
    return (
        <>
            <MarketTemplate pokemonList={pokemonCards}>
                {!carregando ? (
                    <>
                        <Grid container spacing={2} className={classes.mainContainer}>
                            {
                                pokemonTypes.map((t, index) =>
                                    <ButtonType
                                        typePokemon={t}
                                        key={index}
                                        xs={12}
                                        md={4}
                                        fnClicou={(tipo)=>{
                                            setPokemonCards(api.filterFromCacheByType(tipo))
                                        }}
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