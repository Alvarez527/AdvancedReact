import React from 'react'
import { useQuery } from '@apollo/client'
import { Photocard } from '../Photocard/index'
import { useGetPhotos } from '../../hooks/useGetPhotos'



const ListOfPhotoCards = ({ categoryId }) => {

    const withPhotos = useGetPhotos(categoryId)
    
    const { loading, error, data } = useQuery(withPhotos, {
      variables: { categoryId }
    })
  
    if (loading) return <span>loading</span>
    if (error) return <p>Error</p>

  return (

    <ul>
      {data.photos.map((photo) => {
        return (
          <li key={photo.id}>
            <Photocard key={photo.id} {...photo} />
          </li>
        )
      })}
    </ul>

  )
}

export { ListOfPhotoCards }
