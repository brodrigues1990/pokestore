import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import PokeAmeLogo from '../../assets/images/pokeAmeLogo.png'

const useStyles = makeStyles((theme) => ({
    priceSpan: {
        whiteSpace: 'nowrap',
        color: 'rgb(51, 51, 51)',
        fontSize: '18px',
    },
    pokeAmeLogo: {
        height: 24,
        paddingRight: 10,
        top: 7,
        position: 'relative'

    },
    percent: {
        textAlign: 'left',
        lineHeight: 1.2,
        fontSize: '12px',
    }
}));

const Price = ({ type, value }) => {
    const classes = useStyles();
    const [price, setPrice] = useState(0);
    const [pricePokeAme, setPricePokeAme] = useState(0);
    const maskPrice = (priceToMask) => (
        `R$ ${priceToMask}`
    )

    useEffect(() => {
        setPrice(value.toFixed(2).replace(".", ","));
        if (type === 'pokeame') {
            const porcentagem = 2;
            let valor = value * (porcentagem / 100);
            setPricePokeAme(valor.toFixed(2).replace(".", ","));
        }

    }, [value]);
    return (
        <>
            <Grid container className={classes.emptyCartContainer} direction="column" justify="space-between" alignItems="center">
                <Grid item >
                    <Typography className={classes.priceSpan} variant="span" >
                        {maskPrice(price)}
                    </Typography>
                </Grid>
                {type === 'pokeame' ?
                    <>
                        <Grid item >
                            <Typography className={classes.emptyCartText} variant="caption" >
                                {`com  PokeAme`}
                            </Typography>
                        </Grid>
                        <Grid item >
                            <img className={classes.pokeAmeLogo} src={PokeAmeLogo} />
                            <Typography className={classes.emptyCartText} variant="caption" >
                                {`Receba ${maskPrice(pricePokeAme)} `}
                            </Typography>
                            <Typography className={classes.percent} variant="caption" color="primary">
                                {`(2% de volta)`}
                            </Typography>
                        </Grid>
                    </>
                    : null}
            </Grid>
        </>
    )

}

export default Price;


