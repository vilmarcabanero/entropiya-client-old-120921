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

const lightSkyBlue = 'LightSkyBlue'

const StyledLogo = styled.div`
	> a {
		text-decoration: none;
    .Vc {
      color: #1b9ff3;
      font-size: 3rem;
      font-weight: 500;
    }
		> img {
			height: 4rem;

      &:hover {
        opacity: 0.8;
      }

			@media (max-width: 30rem) {
				height: 2.75rem;
			}
		}
	}
`

export default EntropiyaLogo
