import React from 'react';
import { useGetFavorites } from '../components/container/GetFavorites.js';
import { ListOfFavs } from '../components/ListOfFavs/index.js';

export const Favs = ()=> {
    const { data, loading, error } = useGetFavorites()

    if (loading) return 'loading...'
    if (error) return 'error'

    return <ListOfFavs favs={data.favs} />
}