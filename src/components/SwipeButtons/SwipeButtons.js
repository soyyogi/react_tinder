import React from 'react'
import { IconButton } from '@material-ui/core'
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons'
import './SwipeButtons.css'

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <Replay fontSize="large" />
            </IconButton>
            <IconButton className="swipreButtons_left">
                <Close fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRate fontSize="large" />
            </IconButton>
            <IconButton className="swipreButtons_right">
                <Favorite fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlashOn fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons;