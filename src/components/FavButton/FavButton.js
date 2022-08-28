
import React from 'react'
import { FaRegThumbsUp, FaRegSmile } from 'react-icons/fa'
import {Button} from './styles'
import propTypes from 'prop-types'

function FavButton({liked, likes, onClick}) {

    return(
    <Button onClick={onClick}>
    {liked && <FaRegSmile size='32px' />}
    {(!liked) && <FaRegThumbsUp size='32px'/> } {likes} <p>likes!!</p>
    </Button>
    )
}

FavButton.propTypes = {
    liked: propTypes.bool.isRequired,
    likes: propTypes.number.isRequired,
    onClick: propTypes.func.isRequired
}

export {FavButton}