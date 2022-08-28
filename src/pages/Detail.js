
import React from 'react'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery/PhotoCardWithQuery'
import {useParams} from 'react-router-dom'
import { Layout } from '../components/Layout/index.js'

function Detail() {

    const {detailId} = useParams();
    console.log('este es el detail Id:' + detailId)
   

  return (
    <Layout title={`Fotografia ${detailId}`} >
      
      <PhotoCardWithQuery id={detailId} />
    </Layout>
    
  )
}

export { Detail }
