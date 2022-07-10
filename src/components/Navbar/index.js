import React from 'react'
import {Nav} from './styles'
import {Link} from './styles'
import {MdHome, MdFavoriteBorder, MdPersonOutline} from 'react-icons/md'

const SIZE = '32px'

 function Navbar() {
  return (
    <Nav>
        <Link to='/'><MdHome size={SIZE}/></Link>
        <Link to='/favs'><MdFavoriteBorder size={SIZE}/></Link>
        <Link to='/user'><MdPersonOutline size={SIZE}/></Link>
    </Nav>
  )
}

export {Navbar}
