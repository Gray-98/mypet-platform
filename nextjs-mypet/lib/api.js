import axios from 'axios'

class CustomError extends Error {
	constructor({status, message}) {
		super(message)
		this.name = 'CustomErrorWithAxios'
		this.status = status
	}
}

const ApiDriver = async (method, url, options) => {
	try {
		const { data } = await axios({
			method,
			baseURL: 'http://cloud.nineteen-cat.top/api',
			url,
			withCredentials: true,
			...options
		})
		return data
	} catch (e) {
		const { status, data } = e.response
		throw new CustomError({ status, message: data.msg })
	}
}

class Api {
	async getHealth() {
		return await ApiDriver('get', '/health?name=Test User')
	}

	async getFood({ typeId, page = 1, size = 10 }) {
		let path = `/food?page=${page}&size=${size}`

		if (typeId) {
			path += `&typeId=${typeId}`
		}
		const { food, foodType } = await ApiDriver('get', path)

		return { food, foodType }
	}

	async deleteFood(footId) {
		await ApiDriver('delete', `/food/${footId}`)
	}

	async updateFood(foodId, params) {
		await ApiDriver('put', `/food/${foodId}`, { data: params })
	}

	async login({ username, password }) {
		const { token } = await ApiDriver('post', '/users/login', { data: { name: username, password } })
		return token
	}

	async registry({ username, password }) {
		await ApiDriver('post', '/users/registration', { data: { name: username, password } })
	}
}

export default new Api()
