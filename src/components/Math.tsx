import React, { Attributes } from 'react'
import {MathComponent} from 'mathjax-react'

interface Props {
  props: string
  m: Attributes
}

export let M: React.FC<Props> = (props) => {
  return <MathComponent tex={props.m} display={false} />
}
export let Mb: React.FC<Props> = (props) => {
  return <MathComponent tex={props.m} display={true} />
}

