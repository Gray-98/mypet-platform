import Head from 'next/head'
import styles from './styles'

const Layout = ({ children }) => (
	<>
		<Head>
			<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
			<link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
		</Head>
		<div className='main-container'>
			{children}
			<style jsx>{styles}</style>
		</div>
	</>
)

export default Layout