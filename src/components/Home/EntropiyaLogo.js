import styled from 'styled-components'
import logo from '../../assets/images/header.png'

const EntropiyaLogo = () => {
	return (
		<StyledLogo>
			<a href='/'>
				{/* <span className='symbol'>{'<'}</span>
				<span className='Vc'>Entropiya </span>
				<span className='symbol'>{'/>'}</span> */}
				<img src={logo} alt='Logo' />
			</a>
		</StyledLogo>
	)
}

const lightSkyBlue = 'LightSkyBlue'

const StyledLogo = styled.div`
	/* position: relative; */
	font-weight: 500;
	font-size: 2.5rem;

	&:hover {
		.Vc {
			color: white;
			opacity: 0.75;
		}
	}

	> a {
		text-decoration: none;
		> img {
			height: 5.5rem;

			@media (max-width: 30rem) {
				height: 4.25rem;
			}
		}
	}

	@media (max-width: 35rem) {
		font-size: 2rem;
	}
	.Vc {
		color: ${lightSkyBlue};
	}
	.symbol {
		color: #00cccc;
	}
`

export default EntropiyaLogo
