import React, { useEffect, useRef, useState, Fragment } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton/FavButton'
import { useMuationToogleLike } from '../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const Photocard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()

  const HandleFavClick = (id) => {

    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
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
