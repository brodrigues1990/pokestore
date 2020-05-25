import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, Typography, Grid, Button } from '@material-ui/core';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';
import { usePokemon, PokemonContext } from '../../context/pokemonContext';
import { useCart, CartContext } from '../../context/cartContext';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts'

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        width: "130px",
        height: "130px",
        margin: "auto",
        marginTop: '10px'
    },
    cardContent: {
        textAlign: "center",
    },
    cardActions: {
        padding: 0,
    },
    cardButton: {
        width: "100%",
    },
}));


const CardPokemon = ({ pokemonId }) => {
    const classes = useStyles();
    const { pokemon } = usePokemon(PokemonContext);
    const { cartList, setCartList } = useCart(CartContext);
    const { id, name, image, price, types } = pokemon[pokemonId];
    //console.log(cartList);

    // adiciona pokemon ao carrinho
    const handleAddCart = (id) => {
        const pokeItem = [];

        if(cartList){
            pokeItem.push(...cartList,pokemon[id - 1]);
        }else{
            pokeItem.push(pokemon[id - 1]);
        }
        setCartList(pokeItem);
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card >
                <CardMedia className={classes.cardMedia} image={image} />
                <CardContent className={classes.cardContent}>
                    <Typography>{`${id}. ${name}`}</Typography>
                    <Typography>{`R$ ${price},00`}</Typography>
                    <strong>{types}</strong>
                </CardContent>
                <CardActions className={classes.cardActions} aligh="center">
                    <Button className={classes.cardButton} onClick={() => handleAddCart(id)} startIcon={<AddShoppingCartIcon />} color="primary" href="#contained-buttons">
                        Capturar Pokemon
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardPokemon;