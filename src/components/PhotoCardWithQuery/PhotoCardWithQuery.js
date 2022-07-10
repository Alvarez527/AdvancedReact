
import React from 'react'
import { Photocard } from '../Photocard'
import { gql, useQuery } from '@apollo/client'

const getQuery = (id) => (gql`
  query getSinglePhoto($id:ID!) {
  photo(id: $id) {
    id
    categoryId
    src
    likes
    liked
    userId
  }
 }
`);

  const PhotoCardWithQuery = ({id}) => {



  console.log('este es el query' + id);

  const query = getQuery(id);

 
  const {loading, error, data } = useQuery(query, {
    variables: { id }
  })

  if (error) {
    return <h2> Internal Server Error</h2>
  }
  if (loading) {

    return <h2>Loading...</h2>
  }

  console.log('este es el data:')
  console.log(data.photo)

  return (
   <Photocard
    {...data.photo} 
   />
    
  )
}

export {PhotoCardWithQuery}