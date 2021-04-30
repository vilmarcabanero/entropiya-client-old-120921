import EntropiyaLogo from './EntropiyaLogo'
import {Link} from 'react-router-dom'

const Header = () => {
	return (
		<div className='header'>
			<Link to='/signin' className='button'>Sign in</Link>
		</div>
	)
}
export default Header
