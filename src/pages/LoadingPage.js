import React, { Component } from 'react'
import axios from 'axios'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { motion } from 'framer-motion'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			loading: true,
		}
	}
	async getUsersData() {
		/* With Timeout */
		// return await setTimeout(async () => {
		// 	const res = await axios.get('http://jsonplaceholder.typicode.com/users')
		// 	const users = res.data.slice(0, 4)
		// 	this.setState({ users, loading: false })
		// }, 5000)

		return await setTimeout(async () => {
			const res = await axios.get('http://jsonplaceholder.typicode.com/users')
			const users = res.data.slice(0, 4)
			this.setState({ users, loading: false })
		}, 3000)

		/* Without Timeout (Comment out if you don't want to use setTimeout) */
		// const res = await axios.get('http://jsonplaceholder.typicode.com/users')
		// const users = res.data.slice(0, 4)
		// this.setState({users, loading:false})
	}
	componentDidMount() {
		this.getUsersData()
	}
	render() {
		const { users } = this.state

		if (this.state.loading) {
			return (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						<SkeletonTheme color='#202020' highlightColor='#444'>
							<div className='usercard'>
								<div className='cards'>
									<Skeleton height={20} count={4} /> <Skeleton height={100} />
								</div>
							</div>
							<div className='usercard'>
								<div className='cards'>
									<Skeleton count={4} /> <Skeleton height={100} />
								</div>
							</div>
							<div className='usercard'>
								<div className='cards'>
									<Skeleton count={4} /> <Skeleton height={100} />
								</div>
							</div>
							<div className='usercard'>
								<div className='cards'>
									<Skeleton count={4} /> <Skeleton height={100} />
								</div>
							</div>
						</SkeletonTheme>
					</motion.div>
				</>
			)
		}
		return (
			<div className='usercard'>
				{users.map(u => (
					<div key={u.id} className='cards'>
						<h3>{u.name}</h3>
						<p>{u.username}</p>
						<p>
							<a href={`mailto:${u.email}`}>{u.email}</a>
						</p>
						<p>
							<a href={u.website}>{u.website}</a>
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis id
							eaque delectus quis. Voluptatum cum minus nemo aliquam,
							necessitatibus accusantium quia maxime ab nesciunt! Sapiente
							voluptatibus vero nobis autem quasi.
						</p>
					</div>
				))}
			</div>
		)
	}
}
