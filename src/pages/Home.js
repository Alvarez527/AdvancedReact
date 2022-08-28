
import React, {memo} from 'react'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotocard'
import { Layout } from '../components/Layout'
import {useParams} from 'react-router-dom'




function HomeElement({id}) {

 console.log('esta es la direccion:' + id);
  return (
    
          <Layout title= 'Petgram - Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos'>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={id}/>
          </Layout>

  )
}

const HomePage = memo(HomeElement, (prevProps, props) => {

  return prevProps.id === props.id;
})

function HomeBuilder() {
    const {id} = useParams();
    return(
      <HomePage id={id}/>
    )

}

export function Home(){

  return <HomeBuilder/>
}