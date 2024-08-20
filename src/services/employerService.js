import axios from 'axios'

export default class EmployerService {
    add() {
        return axios.post("http://localhost:8080/api/employer/add")
    }

    add() {
        return axios.post("http://localhost:8080/api/employer/getall")
    }


}