import React, { useEffect, useRef, useState, Fragment } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton/FavButton'
import { useMuationToogleLike } from '../container/ToggleLikeMutation'
import propTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const Photocard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()

  const [show, ref] = useNearScreen()

  const HandleFavClick = (id) => {

    mutation({
      variables: {
        input: {id}
      }
    });
  }

  return (
    <Article ref={ref}>
      {show && <div>
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>

        </a>

        <FavButton liked={liked} likes={likes} onClick={() =>HandleFavClick(id)} />
      </div>}

    </Article>
  )
}

Photocard.propTypes = {
  id: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
