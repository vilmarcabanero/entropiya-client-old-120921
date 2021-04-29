
import React, { useState } from 'react'
const usePasswordToggle = () => {
	const [visible, setVisiblity] = useState(false)

	const Icon = (
		<span onClick={() => setVisiblity(visiblity => !visiblity)}>
			{visible ? 'Hide' : 'Show'}
		</span>
	)

	const InputType = visible ? 'text' : 'password'

	return [InputType, Icon]
}

export default usePasswordToggle
