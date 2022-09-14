import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calculator from '../credit__calculator'
import PaymentMethod from '../payment__method'
import { Container } from './style'
const Root = () => {

  return (
    <Container>
        <Routes>
            <Route path='/' element={<Calculator/>} />
            <Route path={'/annuited__table'} element={<PaymentMethod/>} />
            <Route path={'/differ__table'} element={<PaymentMethod/>} />
        </Routes>
    </Container>
  )
}

export default Root