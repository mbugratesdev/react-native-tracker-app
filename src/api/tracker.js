import axios from 'axios'

export default axios.create({
    baseURL: 'https://tracker-api-mba.herokuapp.com',
})
