import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import WaterIcon from '../../assets/icons/water.svg';
import FireIcon from '../../assets/icons/fire.svg';
import GrassIcon from '../../assets/icons/grass.svg';

const useStyles = makeStyles({
    icon: {
        width: 15,
        height: 15,
    },
});


const TypeIcon = ({ type }) => {
    const classes = useStyles();
    const [typeIcon, setTypeIcon] = useState('');
    const handleTypeIcon = async () => {
        switch (type) {
            case 'water':
                setTypeIcon(WaterIcon)
                break
            case 'grass':
                setTypeIcon(GrassIcon)
                break
            case 'fire':
                setTypeIcon(FireIcon)
                break
            default:
                //setTypeIcon(defaultTheme)
                return
        }
    }

    useEffect(() => {
        handleTypeIcon()
    }, []);

    return (
        typeIcon ? <img color="primary" className={classes[`icon`]} src={typeIcon} alt="waterIcon" /> : ''
    )
}
export default TypeIcon;

