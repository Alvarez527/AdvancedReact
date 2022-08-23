import React, { useContext, Fragment } from 'react'
import { AppContext} from '../Context'
import { SubmitButton } from '../components/SubmitButton/index.js'

 function User() {

  const { removeAuth }  = useContext(AppContext);

  return (
    <Fragment>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
    </Fragment>
    
  )
}

export {User}