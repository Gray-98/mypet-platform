import axios from 'axios'

const ApiDriver = async (method, path, options) => {
	const url = `http://cloud.nineteen-cat.top/api${path}`

	return await axios({ method, url, ...options })
}

class Api {
	async getHealth() {
		const { data } = await ApiDriver('get', '/health?name=Test User')

		return data
	}

	async getFood({ typeId, page = 1, size = 10 }) {
		let path = `/food?page=${page}&size=${size}`

		if (typeId) {
			path += `&typeId=${typeId}`
		}
		const { data } = await ApiDriver('get', path)

		return { food: data.food, foodType: data.foodType }
	}

	async deleteFood(footId) {
		await ApiDriver('delete', `/food/${footId}`)
	}

	async updateFood(foodId, params) {
		await ApiDriver('put', `/food/${foodId}`, { data: params })
	}
}

export default new Api()
