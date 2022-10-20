import axios from "axios";

axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api';


// Operaciones para consultas al servidor

const requestGenerico = {
    get: (url) => axios.get(url),
    post: (url,data) => axios.post(url, data),
    put: (url,data) => axios.put(url, data),
    delete: (url) => axios.delete(url)
}

export default requestGenerico;