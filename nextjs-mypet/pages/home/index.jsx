import Api from '../../lib/api'
import Head from 'next/head'
import { TextField, Autocomplete, Stack, Box } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import FoodItem from './FoodItem'
import { useState } from 'react'

const Home = ({ food, foodType }) => {
	const [feed, setFeed] = useState(food)
	const [page, setPage] = useState(1)
	const [value, setValue] = useState(null)

	const [isLoading, setIsLoading] = useState(false)

	const handleChange = async (e, newValue) => {
		setValue(newValue)
		setPage(1)
		const params = { page: 1 }
		newValue && Object.assign(params, { typeId: newValue.id })
		const { food } = await Api.getFood(params)
		food && setFeed(food)
	}

	const handleClickMore = async () => {
		setIsLoading(true)
		setPage(page + 1)
		const params = { page: page + 1 }
		value && Object.assign(params, { typeId: value.id })
		const { food } = await Api.getFood(params)
		food && setFeed(feed.concat(food))
		setIsLoading(false)
	}

	const handleDelete = (id, count) => async () => {
		if (count > 1) {
			await Api.updateFood(id, { count: --count })
			setFeed(feed.reduce((newFeed, cru) => {
				if(cru.id === id) {
					newFeed.push(Object.assign(cru, { count }))
				} else {
					newFeed.push(cru)
				}
				return newFeed
			}, []))
		} else {
			await Api.deleteFood(id)
			setFeed(feed.filter(item => item.id !== id))
		}
	}

	return (
		<>
			<Head><title>Nineteen And Big Head </title></Head>
			<Box sx={{ margin: '0 auto', padding: '20px 20px 0' }}>
				<Autocomplete
					value={value}
					onChange={handleChange}
					disablePortal
					id="combo-box"
					options={foodType}
					sx={{ width: '100%', marginBottom: '6px' }}
					renderInput={(params) => <TextField {...params} label="Type" />}
				/>
				<Box sx={{ marginBottom: '20px', border: '1px solid #7a8a9a78', borderRadius: '4px' }}>
					{feed.map(({ id, name, remark, birthDate, endDate, count }, index) => {
						return <FoodItem
							key={index}
							id={id}
							name={name}
							remark={remark}
							birthDate={birthDate}
							endDate={endDate}
							count={count}
							isLastChild={index === feed.length - 1}
							handleDelete={handleDelete}
						/>
					})}
				</Box>
				<Stack sx={{ mb: '36px' }}>
					<LoadingButton
						loading={isLoading}
						variant="outlined"
						onClick={handleClickMore}
					>
						显示更多
					</LoadingButton>
				</Stack>
			</Box>
		</>
	)
}

Home.getInitialProps = async () => {
	const { food, foodType } = await Api.getFood({ page: 1 })
	return { food, foodType: foodType.map(fType => ({ id: fType.id, label: fType.name })) }
}

export default Home
