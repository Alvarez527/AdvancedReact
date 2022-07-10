
import React from 'react'
import { FaRegThumbsUp, FaRegSmile } from 'react-icons/fa'
import {Button} from './styles'

function FavButton({liked, likes, onClick}) {

    return(
    <Button onClick={onClick}>
    {liked && <FaRegSmile size='32px' />}
    {(!liked) && <FaRegThumbsUp size='32px'/> } {likes} <p>likes!!</p>
    </Button>
    )
}

export {FavButton}