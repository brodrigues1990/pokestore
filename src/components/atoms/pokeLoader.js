import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mixins: {

        boxSizing: 'border-box',
        // -moz-box-sizing: border-box,
        //      box-sizing: border-box,
    },
    wrapper: {
        transform: 'translate(-50%, -50%)'
    },
    pokeball: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: '50%',
        position: 'relative',
        overflow: 'hidden',
        border: '3px solid',
        animation: 'frames .8s  linear 0s infinite',
        '&::after': {
            content: '""',
            position: 'absolute',
            width: 60,
            height: 30,
            backgroundColor: '#ff0000ad',
            borderBottom: '4px solid',
            top: 0
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            backgroundColor: '#fff',
            width: 19,
            height: 19,
            border: '4px solid',
            borderRadius: '50%',
            bottom: 17,
            right: 18,
            zIndex: 1,

        },

    },
    '@keyframes frames': {
        '0%': {
            opacity: 1
        },
        '100%': {
            opacity: 0.7
        },
    },


}));

const PokeLoader = () => {
    const classes = useStyles();
    return (
        <>
            <div className={[classes.mixins, classes.wrapper]} >
                <div className={classes.pokeball} />
            </div>
        </>
    )

}

export default PokeLoader;