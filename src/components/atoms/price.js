import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    priceSpan: {
        whiteSpace: 'nowrap',
        color: 'rgb(51, 51, 51)',
        fontSize: '18px',
    },
}));

const Price = ({ value }) => {
    const classes = useStyles();
    const [price, setPrice] = useState(0);
    useEffect(() => {
        setPrice(value.toFixed(2).replace(".", ","));
    }, [value]);
    return (
        <>
            <span className={classes.priceSpan}>
                {`R$ ${price}`}
            </span>

        </>
    )

}

export default Price;


