import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, Typography, Grid, Button } from '@material-ui/core';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';
import { usePokemon, PokemonContext } from '../../context/pokemonContext';
import { useCart, CartContext } from '../../context/cartContext';
import { ToastsStore } from 'react-toasts'
import Price from '../atoms/price';

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


const CardPokemon = ({ xs, sm, md, lg, pokemonId }) => {
    const classes = useStyles();
    const { pokemon } = usePokemon(PokemonContext);
    const { cartList, setCartList } = useCart(CartContext);
    const { id, name, image, price, types } = pokemon[pokemonId];
    const pokeItem = [];

    // adiciona pokemon ao carrinho
    const handleAddCart = (id) => {
        let existItem = cartList.find((i) => i === pokemon[id - 1]);
        if (!existItem) {
            pokeItem.push(...cartList, pokemon[id - 1]);
            setCartList(pokeItem);
        } else {
            ToastsStore.warning("Pokemon ja capturado !")
        }
    }

    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            <Card >
                <CardMedia className={classes.cardMedia} image={image} />
                <CardContent className={classes.cardContent}>
                    <Typography>{name}</Typography>
                    <Price type="pokeame" value={price} />
                    <strong>{types}</strong>
                </CardContent>
                <CardActions className={classes.cardActions} aligh="center">
                    <Button className={classes.cardButton} onClick={() => handleAddCart(id)} startIcon={<AddShoppingCartIcon />} color="primary">
                        Capturar Pokemon
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardPokemon;