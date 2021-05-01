
import { useState } from 'react'
const useLoading = () => {
	const [visible, setVisiblity] = useState(false)


	const InputType = visible ? 'text' : 'password'

	return [InputType]
}

export default useLoading
