import React from 'react';
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
    Box
} from '@material-ui/core';
import {
    ShoppingCart as ShoppingCartIcon,
    Delete as DeleteIcon
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useCart, CartContext } from '../../context/cartContext';
import PokedexImg from '../../assets/Pokedex.png'

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    buyButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        textAlign: 'center',
        height: '50px',
        borderRadius: 0,
    },
    resumeBuy: {
        position: 'absolute',
        bottom: '55px',
        right: 0,
        width: '100%',
        height: '30px',
        borderTop: '1px solid rgba(0, 0, 0, 0.12)',

    },
    avatarContainer: {
        borderRadius: 0
    },
    pokedexImage: {
        top: 5,
        height: 25,
        position: 'relative',
        paddingRight: 10
    }
    

}));

const Cart = (props) => {
    const classes = useStyles();
    const { cartItem, setCartItem } = useCart(CartContext);
    console.log(cartItem);

    // function generate(element) {
    //     return [0, 1, 2, 3, 4, 5].map((value) =>
    //         React.cloneElement(element, {
    //             key: value,
    //         }),
    //     );
    // }

    return (
        <>
            <div className={classes.toolbar} />
            <List
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <img src={PokedexImg} alt="PokeStore" className={classes.pokedexImage} />Carrinho
                    </ListSubheader>
                }
            >
                <Divider />

                {cartItem ? (
                    //  Object.keys(cartItem).map(() => (

                    <ListItem key={cartItem.id}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatarContainer} alt="Pokemon" src={cartItem.image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Pokemon"
                            secondary={'R$ XX,XX'}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                    //  ))
                ) : (
                        'Carrinho Vazio'
                    )}

            </List>
            {/* <Box className={classes.resumeBuy}>
                teste
            </Box> */}
            <Button variant="contained" className={classes.buyButton} color="primary" href="#contained-buttons">
                Finalizar
            </Button>
        </>
    );
};

export default Cart;