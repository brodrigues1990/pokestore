import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dialog, DialogContent, Slide, Grid, Typography } from '@material-ui/core';
import { useCart, CartContext } from '../../context/cartContext';
import Price from '../atoms/price';
import PikachuFace from '../../assets/images/pikachu-face.png'

const useStyles = makeStyles((theme) => ({
    dialogContainer: {
        background: '#f4cd17',
        textAlign: 'center',
    },
    buyButton: {
        position: 'relative',
        bottom: 0,
        right: 0,
        width: '100%',
        textAlign: 'center',
        height: '50px',
        borderRadius: 0,
    },
    pikachuFaceContainer: {
        padding: "20px 25px 10px"
    },
    PikachuFaceImage: {
        width: "40%"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cashBack, setCashBack] = useState(0);
    const { setCartList } = useCart(CartContext);
    var preco = props.resumeBuy;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCartList([]);
    };

    // Calcula valor extornado (CashBack)
    const calcCashBack = async () => {
        const porcentagem = 2;
        let valor = preco * (porcentagem / 100);
        setCashBack(valor);
    }
    useEffect(() => {
        if (preco > 0) {
            calcCashBack()
        }
    }, [props.resumeBuy]);

    return (
        <div>
            {props.resumeBuy ?
                <Button onClick={handleClickOpen} variant="contained" className={classes.buyButton} color="primary" >
                    Finalizar
                </Button>
                :
                <Button disabled onClick={handleClickOpen} variant="contained" className={classes.buyButton} color="primary" >
                    Finalizar
                </Button>
            }

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <div className={classes.dialogContainer}>
                    <Grid container className={classes.pikachuFaceContainer} direction="row" justify="center" alignItems="center">
                        <Grid item >
                            <img src={PikachuFace} alt="PokeStore" className={classes.PikachuFaceImage} />
                        </Grid>
                    </Grid>
                    <DialogContent id="alert-dialog-slide-description">
                        <Typography variant="h6">
                            {`Obrigado !!!`}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom >
                            {`Voce ganhou de volta `}
                        </Typography>
                        <Price value={cashBack} />
                    </DialogContent>
                </div>
            </Dialog>
        </div>
    );
}