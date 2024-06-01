import App from 'next/app'
import Layout from '../components/Layout'
import api from '../lib/api'
import Router from 'next/router'

import '../styles/global.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

api.interceptors.response.use(
	res => res,
	(e) => {
		if (e.response.status === 401) {
			Router.push('/auth')
			return null
		} else {
			return Promise.reject(e)
		}
	})

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {},
		}
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		)
	}
}

export default MyApp
