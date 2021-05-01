import React from 'react'
import styled from 'styled-components'
// import './App.css'
import Products from '../components/Profiles/Profiles'
// import { motion } from 'framer-motion'

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
	width: 40rem;
  height: 40rem;
`

const HomePage = () => {
	return (
		// <motion.div
		// 	initial={{ opacity: 0 }}
		// 	animate={{ opacity: 1 }}
		// 	exit={{ opacity: 0 }}
		// 	transition={{ duration: 0.25 }}
		// >
			<Container>
				<Products />
			</Container>
		// </motion.div>
	)
}

export default HomePage
