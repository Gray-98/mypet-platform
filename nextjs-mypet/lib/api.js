import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://cloud.nineteen-cat.top/api',
	withCredentials: true
})


export class Api {

	async getFood({ typeId, page = 1, size = 10 }) {
		let path = `/food?page=${page}&size=${size}`

		if (typeId) {
			path += `&typeId=${typeId}`
		}
		const { data: { food, foodType } } = await instance.get(path)

		return { food, foodType }
	}

	async deleteFood(footId) {
		await instance.delete(`/food/${footId}`)
	}

	async updateFood(foodId, params) {
		await instance.put(`/food/${foodId}`, { data: params })
	}

	async login({ username, password }) {
		await instance.post('/users/login', { name: username, password })
	}

	async registry({ username, password }) {
		await instance.post('/users/registration', { name: username, password })
	}
}

export default instance