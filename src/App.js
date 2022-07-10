import React, {useContext} from 'react'
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { ListOfPhotoCards } from './components/ListOfPhotocard'
import { Logo } from './components/Logo/index'
import {PhotoCardWithQuery} from './components/PhotoCardWithQuery/PhotoCardWithQuery.js'
import { Home } from './pages/Home.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Detail } from './pages/Detail.js'
import { Navbar } from './components/Navbar'
import {Favs} from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { AppContext } from './Context'



export const App = () => {

 // const urlParams = new window.URLSearchParams(window.location.search)

  //const detailId = urlParams.get('detail')
  //console.log(detailId);

  const { isAuth } = useContext(AppContext)


  return(
    <div>
      <BrowserRouter>
    <GlobalStyle />
    <Logo />
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path= '/pet/:id' element={<Home />} />
            <Route path='/detail/:detailId' element={<Detail />} />
            <Route path='/user' element= {isAuth ? <User/> : <NotRegisteredUser/>} />
            <Route path='/favs' element= {isAuth ? <Favs/> : <NotRegisteredUser/>}/>
          </Routes>
          <Navbar/>
    </BrowserRouter>
    </div>
  )
}
