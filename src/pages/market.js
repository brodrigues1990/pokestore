import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Fab, IconButton } from '@material-ui/core';
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
    const [pokemon, setPokemon] = useState([]);

    // Carrega todas as noticias
    const loadPokemonByType = async () => {
        await api.get("articles")
            .then(res => {
                setPokemon(res.data);
            })
    }

    useEffect(() => {
        loadPokemonByType();
    }, []);

    return (
        <>
            {pokemon.map((pokemon) => (
                <TableRow key={pokemon.id}>
                    <TableCell component="th" scope="row">{pokemon.title}</TableCell>
                    <TableCell align="left">{pokemon.content}</TableCell>
                    <TableCell align="right">
                        <IconButton color="primary" component="span" onClick={() => null}>
                            <EditIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
}

export default Home;