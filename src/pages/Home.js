
import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotocard'
import {useParams} from 'react-router'

function Home({id}) {
    const params = useParams()
  return (
    
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={params.id}/>
        </Fragment>
  )
}

export { Home }
