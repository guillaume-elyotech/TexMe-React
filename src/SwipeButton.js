import React from 'react'
import "./SwipeButton.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

const SwipeButton = () => {
    return (
        <div className="SwipeButton">
            <IconButton className="SwipeButton_repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>

            <IconButton className="SwipeButton_left">
            <CloseIcon fontSize="large"/>
            </IconButton>

            <IconButton className="SwipeButton_star">
            <StarIcon fontSize="large"/>
            </IconButton>

             <IconButton className="SwipeButton_right">
            <FavoriteIcon fontSize="large"/>
            </IconButton>

            <IconButton className="SwipeButton_light">
            <FlashOnIcon fontSize="large"/>
            </IconButton>

        </div>
    )
}

export default SwipeButton;




