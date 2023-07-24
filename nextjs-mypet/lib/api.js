import axios from 'axios'

const ApiDriver = async (method, path, options) => {
	const url = `http://43.138.161.53:8080${path}`

	return await axios({method, url, ...options})
}

class Api {
	async getHealth() {
		const {data} = await ApiDriver('get', '/health?name=Test User')

		return data
	}
}

export default new Api()
