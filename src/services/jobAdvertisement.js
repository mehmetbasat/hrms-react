import axios from 'axios'

export default class JobAdvertisement {
    add() {
        return axios.post("http://localhost:8080/api/employer/add")
    }

    getall() {
        return axios.get("http://localhost:8080/api/employer/getall")
    }

    getByJobName() {
        return axios.get("http://localhost:8080/api/employer/getByJobName")
    }

    getByJobAdvertisementByStatusTrue() {
        return axios.get("http://localhost:8080/api/employer/getByJobAdvertisementByStatusTrue")
    }

    getAllEndDateAsc() {
        return axios.get("http://localhost:8080/api/employer/getAllEndDateAsc")
    }

    getAllEndDateDesc() {
        return axios.get("http://localhost:8080/api/employer/getAllEndDateDesc")
    }

    getByCompanyName() {
        return axios.get("http://localhost:8080/api/employer/getByCompanyName")
    }

    updateJobAdvertisementStatus() {
        return axios.put("http://localhost:8080/api/employer/updateJobAdvertisementStatus")
    }
}