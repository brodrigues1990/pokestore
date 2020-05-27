import React, { useEffect, useState } from 'react';
import {
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    ListItemAvatar,
    ListItemSecondaryAction,
    Avatar,
    Button,
    Grid,
    Typography
} from '@material-ui/core';
import {
    ShoppingCart as ShoppingCartIcon,
    Delete as DeleteIcon
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useCart, CartContext } from '../../context/cartContext';
import CashBackButton from './cashBackButton.js';
import { ToastsStore } from 'react-toasts'
import emptyCartImage from '../../assets/images/pokeLazyPB.png'

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    //'calc(100% - 85px)'
    resumeBuy: {
        position: 'absolute',
        bottom: '55px',
        right: 0,
        width: '100%',
        height: '30px',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',
        padding: '0 16px'
    },
    avatarContainer: {
        borderRadius: 0
    },
    CartIcon: {
        top: 5,
        height: 20,
        position: 'relative',
        marginRight: 10
    },
    emptyCartContainer: {
        marginTop: '45%'
    },
    emptyCartImage: {
        height: "135px",
    },
    emptyCartText: {
        color: 'rgba(0, 0, 0, 0.4)'
    }
}));

const CartPokedex = (props) => {
    const classes = useStyles();
    const { cartList, setCartList } = useCart(CartContext);
    const [totalCart, setTotalCart] = useState(0);

    // Deleta pokemon selecionado
    const handleRemovePokemonCart = async (id, name) => {
        try {
            await setCartList(cartList.filter(cartItem => cartItem.id !== id));
            ToastsStore.warning(`${name} deletado !`)
        } catch (error) {
            ToastsStore.error(`Erro ao deletar !`)
        }

    }

    // Calcula preco total do Carrinho
    const totalPrice = async () => {
        await setTotalCart(cartList.reduce((acumulador, item) => acumulador + item.price, 0));
    }

    useEffect(() => {
        totalPrice()
    }, [cartList]);

    return (
        <>
            <div className={classes.toolbar} />
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <ShoppingCartIcon className={classes.CartIcon} />Carrinho
                    </ListSubheader>
                }
            >
                <Divider />

                {cartList.length !== 0 ? (
                    cartList.map((cartItem, index) => (

                        <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar className={classes.avatarContainer} alt="Pokemon" src={cartItem.image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={cartItem.name}
                                secondary={`R$ ${cartItem.price},00`}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => handleRemovePokemonCart(cartItem.id, cartItem.name)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                    ))
                ) : (
                        <Grid container className={classes.emptyCartContainer} direction="column" justify="space-between" alignItems="center">
                            <Grid item >
                                <img src={emptyCartImage} alt="carrinho vazio" className={classes.emptyCartImage} />
                            </Grid>
                            <Grid item >
                                <Typography className={classes.emptyCartText} variant="h6">
                                    Carrinho Vazio . . .
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography className={classes.emptyCartText} variant="caption" >
                                   Para encher, basta capturar alguns pokemon.
                                </Typography>
                            </Grid>
                        </Grid>

                    )}

            </List>
            {totalCart ?
                <Grid container className={classes.resumeBuy} direction="row" justify="space-between" alignItems="center">
                    <Grid item >
                        <Typography>
                            {`Total: `}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography>
                            {`R$ ${totalCart},00`}
                        </Typography>
                    </Grid>
                </Grid>
                : ``}

            <CashBackButton resumeBuy={totalCart} />
        </>
    );
};

export default CartPokedex;