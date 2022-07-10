
import React, {useContext, Fragment} from 'react'
import {AppProvider, AppContext} from '../Context'
import {UserForm} from '../components/userForm/index'
import {useRegisterMutation} from '../components/container/RegisterMutation.js'

function NotRegisteredUser() {

  const { login } = useContext(AppContext)

  const {registerMutation, data, loading, error } = useRegisterMutation();

  const onSubmit = ({email, password}) => {
    const input = {
      email,
      password
    }

    const variable = { input }

    registerMutation({ variables: variable }).then(login)
  }

  const errorMsg = error && 'El usuario ya existe o hay algún problema'

  return (
    <Fragment>
      <UserForm disabled={loading} onSubmit={onSubmit} error={errorMsg} title={'Registrarse'} />
      <UserForm onSubmit={onSubmit} title={'Iniciar Sesión'} />
    </Fragment>
    
  )
}

export { NotRegisteredUser }