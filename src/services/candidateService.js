import axios from 'axios'

export default class CandidateService {

    add() {
        return axios.post("http://localhost:8080/api/candidate/add")
    }

    getCandidateCvById() {
        return axios.get("http://localhost:8080/api/candidate/getCandidateCvById")
    }

    getCandidates() {
        return axios.get("http://localhost:8080/api/candidate/getallcandidatescv")
    }


}

