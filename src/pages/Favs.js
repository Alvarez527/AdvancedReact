import React, {Fragment} from 'react';
import { useGetFavorites } from '../components/container/GetFavorites.js';
import { ListOfFavs } from '../components/ListOfFavs/index.js';
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout/index.js';

export default() => {
    const { data, loading, error } = useGetFavorites()

    if (loading) return 'loading...'
    if (error) return 'error'

    return (

       <Fragment>

        <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>

            <ListOfFavs favs={data.favs} />

        </Layout>

       </Fragment> 
        

    )
}