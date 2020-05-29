import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: '315px',
        [theme.breakpoints.down('xs')]: {
            right: theme.spacing(2)    
        },
    },
    ScrollTopFab: {
        color: '#fff',
        "&:active": {
            color: '#000',
            boxShadow: "none"
        }
    },

}));

const ScrollTop = (props) => {
    const { window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        event.preventDefault();
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger} >
            <div onClick={handleClick} role="presentation" className={classes.root}>
                <Fab className={classes.ScrollTopFab} color="primary" size="medium" aria-label="de volta ao inicio">
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        </Zoom>
    );
}
export default ScrollTop;