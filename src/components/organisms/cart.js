import React from 'react';
import {
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Typography,
	Grid,
	ListSubheader,
	Toolbar,
	InputBase,
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
}));

const Cart = (props) => {
    const classes = useStyles();

    function generate(element) {
		return [0, 1, 2, 3, 4, 5].map((value) =>
			React.cloneElement(element, {
				key: value,
			}),
		);
    }
    
    return (
    <>
        <div className={classes.toolbar} />
        <List
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Carrinho
                </ListSubheader>
            }
        >
            <Divider />
            {generate(
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Pokemon" src="https://pokeres.bastionbot.org/images/pokemon/3.png" />
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
                </ListItem>,
            )}
        </List>
        <Box className={classes.resumeBuy}>
            teste
        </Box>
        <Button variant="contained" className={classes.buyButton} color="primary" href="#contained-buttons">
            Finalizar
        </Button>
    </>
    );
};

export default Cart;