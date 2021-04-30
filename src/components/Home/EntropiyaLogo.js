import styled from 'styled-components'
import logo from '../../assets/images/header3.png'
import { Link } from 'react-router-dom'

const EntropiyaLogo = () => {
	return (
		<StyledLogo>
			<Link to='/' className='home-logo'>
				<img src={logo} alt='Logo'  />
			</Link>
		</StyledLogo>
	)
}

const StyledLogo = styled.div`
	.home-logo {
		> img {
			height: 3.8rem;
			&:hover {
				opacity: 0.9;
			}

			@media (max-width: 30rem) {
				height: 2.75rem;
			}
		}
	}
`

export default EntropiyaLogo
