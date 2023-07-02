import React from 'react'
import { Container } from './styles'

export default function Button({props, children}) {
  return (
    <Container  {...props}>
      {children}
    </Container>
  )
}
