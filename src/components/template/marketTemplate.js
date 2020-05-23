import React from 'react';
import {
	AppBar,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
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
	Search as SearchIcon,
	Mail as MailIcon,
	MoveToInbox as InboxIcon,
	Menu as MenuIcon,
	ShoppingCart as ShoppingCartIcon,
	Folder as FolderIcon,
	Delete as DeleteIcon
} from '@material-ui/icons';
import { fade, makeStyles } from '@material-ui/core/styles';
import Logo from '../../assets/PokeStoreLogo.png'
import ScrollTop from '../molecules/scrollTop'


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
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
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(13, 5, 5, 5),
	},


	logoContainer: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	logoImage: {
		height: "75px",
		position: 'absolute',
		top: '5px'
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
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
		borderRadius: '100px'
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

	}
}));

const MarketTemplate = (props) => {
	const { window, children } = props;
	const classes = useStyles();

	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	function generate(element) {
		return [0, 1, 2, 3, 4,5,6,7,8,9].map((value) =>
			React.cloneElement(element, {
				key: value,
			}),
		);
	}
	const drawer = (
		<div>
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
			{/* <List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List> */}
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appBar} >
				<Toolbar>
					<div className={classes.logoContainer}>
						<img src={Logo} alt="PokeStore" className={classes.logoImage} />
					</div>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Caçar Pokémon..."
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'Caçar Pokémon...' }}
						/>
					</div>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<main className={classes.content}>
				{children}
				<ScrollTop {...props} />
			</main>
			<nav className={classes.drawer} aria-label="mailbox folders">
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor='right'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
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
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}

export default MarketTemplate;
