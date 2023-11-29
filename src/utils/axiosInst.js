import axios from 'axios';

//  base URL 
const axiosInst = axios.create({
        baseURL: "https://api.themoviedb.org/3"
})
export default axiosInst;