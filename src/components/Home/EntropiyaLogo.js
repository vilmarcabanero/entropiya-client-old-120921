import styled from 'styled-components'
import logo from '../../assets/images/header3.png'

const EntropiyaLogo = () => {
	return (
		<StyledLogo>
			<a href='/'>
        <img src={logo} alt='Logo' />
			</a>
		</StyledLogo>
	)
}

const StyledLogo = styled.div`
	> a {
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
