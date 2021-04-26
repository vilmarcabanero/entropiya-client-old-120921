import React from 'react'
import chevronRight from '../../assets/images/chevron-right.png'
import styled from 'styled-components'

const OptForm = ({ children, ...restProps}) => {
  return (
    <Container { ...restProps}> {children} </Container>
      
  )
}

export default OptForm

OptForm.Input = function OptFormInput({ ...restProps}) {
  return <Input { ...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps}) {
  return (
    <Button { ...restProps}>
      {children} <img src={chevronRight} alt='Try Now' />
    </Button>
  )
}

OptForm.Text = function OptFormText({ children, ...restProps}) {
  return <Text { ...restProps}>{children}</Text>
}

const Container = styled.div`

`
const Input = styled.input`
  
`

const Button = styled.button`
  
`

const Text = styled.p`
  
`