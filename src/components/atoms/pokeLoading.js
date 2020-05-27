import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const frames = "frames";

const useStyles = makeStyles({
    mixins: {
        boxSizing: 'border-box',
        // -moz-box-sizing: border-box,
        //      box-sizing: border-box,
    },
    pokeball: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: '50%',
        position: 'relative',
        overflow: 'hidden',
        border: '3px solid',
        animation: `$${frames} .8s linear 0s infinite`,
        '&::after': {
            content: '""',
            position: 'absolute',
            width: 60,
            height: 30,
            backgroundColor: '#ff0000ab',
            borderBottom: '4px solid',
            top: 0,
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            backgroundColor: '#fff',
            width: 20,
            height: 20,
            border: '4px solid',
            borderRadius: '50%',
            bottom: 17,
            right: 17,
            zIndex: 1,
        },

    },
    [`@keyframes ${frames}`]: {
        from: {
            transform: 'rotate(0deg)'
        },
        to: {
            transform: 'rotate(360deg)'
        }
    },
});

const PokeLoading = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes[`pokeball`]} />
        </>
    )

}

export default PokeLoading;