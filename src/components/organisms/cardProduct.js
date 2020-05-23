import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, Typography, Grid, Button } from '@material-ui/core';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';
import { usePokemon, PokemonContext } from '../../context/pokemon'

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


const CardProduct = ({ pokemonId }) => {
    const classes = useStyles();
    const { pokemon, setPokemon } = usePokemon(PokemonContext);
    const { id, name, image, price } = pokemon[pokemonId];
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={pokemonId}>
            <Card >
                <CardMedia className={classes.cardMedia} image={image} />
                <CardContent className={classes.cardContent}>
                    <Typography>{`${id}. ${name}`}</Typography>
                    <Typography>{`R$ ${price},00`}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions} aligh="center">
                    <Button className={classes.cardButton} startIcon={<AddShoppingCartIcon />} color="primary" href="#contained-buttons">
                        Capturar Pokemon
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardProduct;