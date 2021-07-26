import axios from 'axios';

class ApiService {
  constructor(route) {
    this.resource = axios.create({
      baseURL: 'http://localhost:3000/api'
    })
    this.route = route
  }
  all() {
    return this.resource.get(this.route)
  }
  getById(id) {
    return this.resource.get(`${this.route}/${id}`)
  }
  save(model) {
    return this.resource.post(`${this.route}/create`, model)
  }
  update(id, model) {
    return this.resource.put(`${this.route}/${id}`, model)
  }
  delete(id) {
    return this.resource.delete(`${this.route}/${id}`)
  }
}

export default ApiService