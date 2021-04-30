import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
const usePasswordToggle = () => {
	const [visible, setVisiblity] = useState(false)

	const Icon = (
		<div onClick={() => setVisiblity(visiblity => !visiblity)}>
			<i class="fa fa-spinner fa-spin"></i>
			{visible ? <FontAwesomeIcon className='eye' icon={faEye} /> : <FontAwesomeIcon  className='eye' icon={faEyeSlash} />}
		</div>
	)

	const InputType = visible ? 'text' : 'password'

	return [InputType, Icon]
}

export default usePasswordToggle
