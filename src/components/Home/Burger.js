import { useState } from 'react'
import styled from 'styled-components'
import RightNav from './RightNav'

const Burger = () => {
	const [open, setOpen] = useState(false)
	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
			<RightNav open={open} />
		</>
	)
}

// const minLarge = '76em'
// const primaryColor = '#0082e6';

const StyledBurger = styled.div`
	@media (min-width: 55rem) {
		display: none;
	}

	width: 2rem;
	z-index: 20;

	> div {
		cursor: pointer;
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? 'steelBlue' : '#0082e6')};
		border-radius: 10px;
		&:not(:last-child) {
			margin-bottom: 6px;
		}

		transform-origin: 2px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		&:nth-child(2) {
			transform: ${({ open }) => (open ? 'translateX(70%)' : 'translateX(0)')};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`

export default Burger
