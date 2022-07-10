
import React from 'react'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery/PhotoCardWithQuery'
import {useParams} from 'react-router'

function Detail({detailId}) {

    console.log('este es el detail Id:' + detailId)
    const params = useParams()

  return (
    <PhotoCardWithQuery id={params.detailId} />
  )
}

export { Detail }
