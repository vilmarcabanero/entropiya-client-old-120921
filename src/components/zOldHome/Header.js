import NavBar from './NavBar'
import styled from 'styled-components'

// import './logic/header.js'

const Header = () => {
	return (
		<StyledHeader>
			<NavBar />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	/* box-shadow: 0 6px 4px -5px #888888; */
	box-shadow: 0 3px 5px rgba(0,0,0,0.19);
	position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export default Header
