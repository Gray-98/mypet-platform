import App from 'next/app'
import '../styles/global.css'
import Layout from '../components/Layout'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


class MyApp extends App {
	static async getInitialProps({Component, ctx}) {
		if (ctx.req && ctx.req.url === '/') {
			ctx.res.writeHead(302, {Location: '/home'})
			ctx.res.end()
		}

		return {
			pageProps: Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {},
		}
	}

	render() {
		const {Component, pageProps} = this.props
		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		)
	}
}

export default MyApp
