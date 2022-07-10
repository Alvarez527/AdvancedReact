import React, { useState, Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import {Form, Input, Button, Title, Error} from './styles'


const UserForm = ({ onSubmit, title, error, disabled }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: email.value, password: password.value });
    }
 
  return (
    <Fragment>
        <Title>{title}</Title>
        <Form onSubmit= { handleSubmit } disabled={disabled}>
        <Input placeholder='Email' value={email.value} onChange={email.onChange} disabled={disabled} />
        <Input placeholder='Password' type='password' value={password.value} onChange={password.onChange} disabled={disabled} />
        <Button disabled={disabled} >{title}</Button>
        </Form>
        {error && <Error>{error}</Error>}
    </Fragment>
    

  )
}


export { UserForm }