import { MathComponent } from 'mathjax-react'

export let M = props => {
	return <MathComponent tex={props.m} display={false} />
}
export let Mb = props => {
	return <MathComponent tex={props.m} display={true} />
}
