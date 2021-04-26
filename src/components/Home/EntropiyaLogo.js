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
	> a {
		text-decoration: none;
		> img {
			height: 5.5rem;

      &:hover {
        opacity: 0.9;
      }

			@media (max-width: 30rem) {
				height: 4.25rem;
			}
		}
	}
`

export default EntropiyaLogo
