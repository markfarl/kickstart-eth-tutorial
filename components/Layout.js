import React from 'react'
import {Container} from 'semantic-ui-react'
import Header from './Header'
import Head from 'next/head' //Next header for moving link tag into html head tags


export default props => {
  return (
    <Container>
      <Head> //Will be pushed up into head tag
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
      </Head>
      <div>
        <Header />
        {props.children}
      </div>
    </Container>
  )
}