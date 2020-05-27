import React from 'react';
import {
	AppBar,
	Drawer,
	Hidden,
	IconButton,
	Toolbar,
	TextField,
} from '@material-ui/core';
import {
	ShoppingCart as ShoppingCartIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Logo from '../../assets/images/PokeStoreLogo.png'
import ScrollTop from '../atoms/scrollTop'
import SearchBar from '../molecules/searchBar'
import CartPokedex from '../organisms/cartPokedex'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	//header
	logoContainer: {
		flexGrow: 1,
		//display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	logoImage: {
		height: "75px",
		position: 'absolute',
		top: '5px',
		[theme.breakpoints.down('xs')]: {
			position: 'relative',
			paddingRight: 10,
			height: "45px",
		},
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		zIndex: '1000000000000',
		padding: theme.spacing(0),
		[theme.breakpoints.up('sm')]: {
			width: `100%`,
			padding: theme.spacing(0, 2),
		},
	},
	menuButton: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(12, 5, 5, 5),
	},
}));

const MarketTemplate = (props) => {
	const { window, children } = props;
	const classes = useStyles();

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar} >
				<Toolbar>
					<div className={classes.logoContainer}>
						<img src={Logo} alt="PokeStore" className={classes.logoImage} />
					</div>

					<SearchBar />

					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<ShoppingCartIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<main className={classes.content}>
				{children}
				<ScrollTop {...props} />
			</main>

			<nav className={classes.drawer} aria-label="mailbox folders">
				<Hidden smUp implementation="css">
					<SwipeableDrawer
						container={container}
						anchor='right'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						onOpen={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						<CartPokedex />
					</SwipeableDrawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						anchor='right'
						open
					>
						<CartPokedex />
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}

export default MarketTemplate;
