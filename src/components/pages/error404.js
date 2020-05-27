import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import {
    Paper,
    Grid,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import MarketTemplate from '../template/marketTemplate'
import Error404Image from '../../assets/images/Error404.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid404: {
        margin: theme.spacing(2, 2),
    },
}));

const Error404 = () => {

    const location = useLocation();
    let history = useHistory();
    const classes = useStyles();

    return (
        <>
            <MarketTemplate>
                <Paper elevation={2} className={classes.root}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item xs={12} >
                            <img src={Error404Image} />
                        </Grid>
                        <Grid item xs={12} >
                            Nenhum resultado para <strong>{location.pathname}</strong>
                        </Grid>
                        <Grid item xs={12} >
                            <Link onClick={e => history.goBack()}>
                                <CloseIcon color="action" style={{ fontSize: 30 }} />
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </MarketTemplate>
        </>
    );
}

export default Error404;