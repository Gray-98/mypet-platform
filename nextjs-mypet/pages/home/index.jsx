import Api from '../../lib/api'
import Head from 'next/head'
import { IconButton, List, ListItem, ListItemText } from '@mui/material'
import { TextField, Autocomplete } from '@mui/material'
import { Delete as DeleteIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import * as React from 'react'

const CustomizedListItemText = styled(ListItemText)`
	& .MuiListItemText-primary {
    	font-size: 0.9rem
  	}
`

const Home = ({ data, tableData }) => (
	<>
		<Head><title>Nineteen And Big Head </title></Head>
		<div className='homepage-container'>
			<Autocomplete
				disablePortal
				id="combo-box"
				options={data}
				sx={{ width: '100%', marginBottom: '36px' }}
				renderInput={(params) => <TextField {...params} label="Type" />}
			/>
			{tableData.map((data, i) => {
				return (
					<List key={data.id}>
						{
							<>
								<ListItem
									divider={i % 2 !== 0}
									secondaryAction={
										<IconButton>
											<DeleteIcon />
										</IconButton>
									}
								>
									<ListItemText
										primary={data.name}
										secondary={`${data.startDate} ~ ${data.endDate}`}
									/>
									<ListItemText
										primary={`剩余：${data.count}`}
										sx={{ textAlign: 'center' }}
									/>
								</ListItem>
								{i % 2 === 0 &&
									<ListItem divider sx={{ paddingTop: '0', marginTop: '-16px' }}>
										<CustomizedListItemText primary={`备注：${data.mark}`} />
									</ListItem>}
							</>
						}
					</List>

				)
			})}
		</div>
		<style jsx>{`
				.homepage-container {
					margin: 60px auto 100px;
					padding: 0 20px
				}
  			`
		}
		</style>
	</>
)

Home.getInitialProps = async () => {
	// const data = await Api.getHealth()
	const data = [{
		label: '主食冻干'
	}, {
		label: '零食冻干'
	}, {
		label: '主食餐包'
	}, {
		label: '零食餐包'
	}]

	const tableData = [
		{ id: 1, name: '爱立方主食冻干', count: 3, startDate: '2020-12-1', endDate: '2022-12-1' },
		{ id: 2, name: '爱立方主食冻干', count: 3, startDate: '2020-12-1', endDate: '2022-12-1' },
		{ id: 3, name: '爱立方主食冻干', count: 3, startDate: '2020-12-1', endDate: '2022-12-1' },
		{ id: 4, name: '爱立方主食冻干', count: 3, startDate: '2020-12-1', endDate: '2022-12-1' },
		{ id: 5, name: '爱立方主食冻干', count: 3, startDate: '2020-12-1', endDate: '2022-12-1' },
		{ id: 6, name: '爱立方主食冻干', count: 3, startDate: '2020-12-1', endDate: '2022-12-1' },
		{ id: 7, name: '爱立方主食冻干', count: 3, startDate: '2020-12-1', endDate: '2022-12-1' },
	]

	return { data, tableData }
}

export default Home
