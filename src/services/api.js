import Axios from 'axios'

const api = Axios.create({
  baseURL: ' https://pokeapi.co/api/v2',
})

export const berryApi = {
  async getBerries() {
    const response = await api.get(`/berry`)
    return response.data
  },
  async getBerry(name) {
    const response = await api.get(`/berry/${name}`)
    return response.data
  },
  // async getFilms(param) {
  //   const currentParam = param.join(',')
  //   const response = await swApi.get(`/films/${currentParam ? `?id__in=${currentParam}` : ''}`)
  //   return response.data
  // },
  // async getStarships(param) {
  //   const response = await swApi.get(`/starships/${param ? `?pilots=${param}` : ''}`)
  //   return response.data
  // },
}
