import styled from 'styled-components'

const EntropiyaLogo = () => {
	return (
		<StyledLogo>
			<a href='/'>
				<span className='symbol'>{'<'}</span>
				<span className='Vc'>Entropiya </span>
				<span className='symbol'>{'/>'}</span>
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
