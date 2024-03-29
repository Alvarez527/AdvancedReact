import React, {Fragment} from 'react'
import {Helmet} from 'react-helmet'
import { Subtitle, Title, Div } from './styled'

export const Layout = ({children, title, subtitle}) => {

    return(

        <Fragment>
            <Helmet>
                {title && <title>{title} | Petgram </title>}
                {subtitle && <meta name='description' content={subtitle} />}         
            </Helmet>
            <Div>
                {title && <Title>{title}</Title>}
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {children}
            </Div>
         </Fragment>

    )

    
}