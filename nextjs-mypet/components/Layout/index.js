import Head from 'next/head'
import styles from './styles'

const Layout = ({ children }) => (
	<>
		<Head>
			<meta name="viewport" content="initial-scale=1, width=device-width" />
		</Head>
		<div className='main-container'>
			{children}
			<style jsx>{styles}</style>
		</div>
	</>
)

export default Layout