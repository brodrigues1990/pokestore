import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, Typography, Grid, Button } from '@material-ui/core';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/core/styles';
import { usePokemon, PokemonContext } from '../../context/pokemonContext';
import { useCart, CartContext } from '../../context/cartContext';
import { ToastsStore } from 'react-toasts'
import Price from '../atoms/price';
import {
    defaultTheme,
    waterTheme,
    grassTheme,
    fireTheme
} from '../../styles/themes/pokeTheme';


const useStyles = makeStyles((theme) => ({
    cardContainer: {
        margin: theme.spacing(0, 0, 5, 0),
    },
    //mudar 
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


const CardType = ({ xs, sm, md, lg, typePokemon }) => {
    const classes = useStyles();
    const history = useHistory();
    const [typeTheme, setTypeTheme] = useState({});
    // 
    const handleLinkTypePage = () => {
        history.push({
            pathname: `/pokestore/type=${typePokemon}`,
        });
    }

    const handleTypeTheme = async () => {
        switch (typePokemon) {
            case 'water':
                setTypeTheme(waterTheme)
                break
            case 'grass':
                setTypeTheme(grassTheme)
                break
            case 'fire':
                setTypeTheme(fireTheme)
                break
            default:
                setTypeTheme(defaultTheme)
                return
        }
    }

    useEffect(() => {
        handleTypeTheme()
    }, [typePokemon]);

    return (
        <ThemeProvider theme={typeTheme}>
            <Grid item xs={xs} sm={sm} md={md} lg={lg} className={classes.cardContainer}>
                <Card >
                    {/* <CardMedia className={classes.cardMedia} image={image} /> */}
                    <CardActions className={classes.cardActions} aligh="center">
                        <Button className={classes.cardButton} onClick={() => handleLinkTypePage(typePokemon)} startIcon={<AddShoppingCartIcon />} color="primary">
                            {`Tipo Pokemon ${typePokemon}`}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </ThemeProvider>
    );
};

export default CardType;