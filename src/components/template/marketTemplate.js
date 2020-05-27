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
	Search as SearchIcon,
	Menu as MenuIcon,
} from '@material-ui/icons';
import { fade, makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Logo from '../../assets/images/PokeStoreLogo.png'
import ScrollTop from '../atoms/scrollTop'
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
	search: {
		position: 'relative',
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
		borderRadius: 100,
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '0',
			'&:focus': {
				width: '20ch',
			},
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

	const top100Films = [
		{ title: 'The Shawshank Redemption', year: 1994 },
		{ title: 'The Godfather', year: 1972 },
		{ title: 'The Godfather: Part II', year: 1974 },
		{ title: 'The Dark Knight', year: 2008 },
		{ title: '12 Angry Men', year: 1957 },
		{ title: "Schindler's List", year: 1993 },
		{ title: 'Pulp Fiction', year: 1994 },
		{ title: 'The Lord of the Rings: The Return of the King', year: 2003 },
		{ title: 'The Good, the Bad and the Ugly', year: 1966 },
		{ title: 'Fight Club', year: 1999 },
		{ title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
		{ title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
		{ title: 'Forrest Gump', year: 1994 },
		{ title: 'Inception', year: 2010 },
		{ title: 'The Lord of the Rings: The Two Towers', year: 2002 },
		{ title: "One Flew Over the Cuckoo's Nest", year: 1975 },
		{ title: 'Goodfellas', year: 1990 },
		{ title: 'The Matrix', year: 1999 },
		{ title: 'Seven Samurai', year: 1954 },
		{ title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
		{ title: 'City of God', year: 2002 },
		{ title: 'Se7en', year: 1995 },
		{ title: 'The Silence of the Lambs', year: 1991 },
		{ title: "It's a Wonderful Life", year: 1946 },
		{ title: 'Life Is Beautiful', year: 1997 },
		{ title: 'The Usual Suspects', year: 1995 },
		{ title: 'Léon: The Professional', year: 1994 },
		{ title: 'Spirited Away', year: 2001 },
		{ title: 'Saving Private Ryan', year: 1998 },
		{ title: 'Once Upon a Time in the West', year: 1968 },
		{ title: 'American History X', year: 1998 },
		{ title: 'Interstellar', year: 2014 },
	];

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar} >
				<Toolbar>
					<div className={classes.logoContainer}>
						<img src={Logo} alt="PokeStore" className={classes.logoImage} />
					</div>


					<Autocomplete
						id="search-pokemon"
						style={{ width: 300 }}
						options={top100Films}
						getOptionLabel={(option) => option.title}
						renderInput={(params) => (
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<TextField {...params} classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									variant="outlined"
									label="Caçar Pokémon..."
									placeholder="Escolha alguns Pokémon ..."
								/>
							</div>
						)}
						renderOption={(option, { inputValue }) => {
							const matches = match(option.title, inputValue);
							const parts = parse(option.title, matches);

							return (
								<div>
									{parts.map((part, index) => (
										<span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
											{part.text}
										</span>
									))}
								</div>
							);
						}}
					/>


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
