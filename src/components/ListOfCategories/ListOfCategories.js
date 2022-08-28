import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { List, Item } from './styles'


function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    console.log('hello, esto es el inicio')
    fetch('https://petgram-api-carlosalvarez.vercel.app/categories')
      .then((res) => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

 const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()

  const [showFixed, setShowFixed] = useState(false)

  useEffect(
    function () {
      const onScroll = (e) => {
        const newshowFixed = window.scrollY > 200

        showFixed !== newshowFixed && setShowFixed(newshowFixed)
      }
      document.addEventListener('scroll', onScroll)

      return () => {
        document.removeEventListener('scroll', onScroll)
      }
    },
    [showFixed]
  )

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  )

  if (loading) {
    return 'Cargando...'
  } else {
    return (
      <div>
        {renderList()}
        {showFixed && renderList(true)}
      </div>
    )
  }


}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
