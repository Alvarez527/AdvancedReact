
import React, {useContext, Fragment} from 'react'
import {AppProvider, AppContext} from '../Context'
import {UserForm} from '../components/userForm/index'
import {useRegisterMutation} from '../components/container/RegisterMutation.js'
import {useLoginMutation} from '../components/container/LoginMutation.js'
import { Helmet } from 'react-helmet'

function NotRegisteredUser() {

  const { login: activateAuth } = useContext(AppContext);

  const {registerMutation, dataRegister, loadingRegister, errorRegister } = useRegisterMutation();

  const {loginMutation, dataLogin, loadingLogin, errorLogin} = useLoginMutation();


  const onSubmitRegister = ({email, password}) => {
    const input = {
      email,
      password
    }

    const variable = { input }

    registerMutation({ variables: variable }).then(
      ({data}) => {
        const {signup} = data;
        activateAuth(signup);
      }
      
      )
  }

  const errorMsgRegister = errorRegister && 'El usuario ya existe o hay algún problema';

  const onSubmitLogin = ({email, password}) => {
    const input = {
      email,
      password
    }

    const variable = { input }

    loginMutation({ variables: variable }).then(
      ({data}) => {
        const {login} = data;
        console.log("this is the token: ");
        console.log(login);

        activateAuth(login);
      }
      )
  }

  const errorMsgLogin = errorLogin && 'Contrasena Incorrecta o Usuario no Existe'

  return (
    <Fragment>
        <Helmet>
            <title>
              Petgram - Ingresar
            </title>
            <meta name='description' content='Registrese o Ingrese a su Cuenta'/>
        </Helmet>
      <UserForm disabled={loadingRegister} onSubmit={onSubmitRegister} error={errorMsgRegister} title={'Registrarse'} />
      <UserForm didabled={loadingLogin} onSubmit={onSubmitLogin} error={errorMsgLogin} title={'Iniciar Sesión'} />
    </Fragment>
    
  )
}

export { NotRegisteredUser }