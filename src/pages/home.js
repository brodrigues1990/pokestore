import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import api from '../services/api';
import { ThemeProvider } from '@material-ui/core/styles';
import defaultTheme from '../styles/themes/pokeTheme';

const useStyles = makeStyles((theme) => ({

    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

const Home = (props) => {

    const classes = useStyles();
    let history = useHistory();
    const [articles, setArticle] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <>
           
                <Link to="/market">
                    <Fab color="primary" aria-label="Adicionar Noticia" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
    
        </>
    );
}

export default Home;