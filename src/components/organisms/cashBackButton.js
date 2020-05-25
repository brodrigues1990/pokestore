import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useCart, CartContext } from '../../context/cartContext';


const useStyles = makeStyles((theme) => ({
    buyButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        textAlign: 'center',
        height: '50px',
        borderRadius: 0,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cashBack, setCashBack] = useState(0);
    const { setCartList } = useCart(CartContext);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCartList([]);
    };

    // Calcula valor extornado (CashBack)
    const calcCashBack = async () => {
        var preco = props.resumeBuy;
        //var porcentagem = parseFloat('1.3') ;
        var porcentagem = 3;
        setCashBack(preco * (porcentagem / 100));
    }
    useEffect(() => {
        calcCashBack()
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
                <DialogTitle id="alert-dialog-slide-title">
                    {`Obrigado !!!`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {`Voce ganhou de volta R$ ${cashBack}`}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}