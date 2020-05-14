import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import api from '../services/api';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableRow: {
        background: grey[100]
    },
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
            <Link to="/add-article">
                <Fab color="primary" aria-label="Adicionar Noticia" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Link>
        </>
    );
}

export default Home;