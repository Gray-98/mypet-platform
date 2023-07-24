import Api from '../../lib/api'
import Head from 'next/head'
import {Button} from '@material-ui/core'

const Home = ({data}) => (
	<>
		<Head><title>My pet</title></Head>
		<div className='homepage-container'>
			<h1>Welcome to use my pet website ~</h1>
			<h1>我也爱你 我的伟～～～</h1>
			<div>Home Page</div>
			<h1>Get Information Test</h1>
			<div>{data}</div>
			<Button variant='contained' color='primary'>
          Hello world
			</Button>
		</div>
		<style jsx>{`
			.homepage-container {
    		text-align: center;
  		}`
			}
		</style>
	</>
)

Home.getInitialProps = async () => {
	const data = await Api.getHealth()

	return {data}
}

export default Home
