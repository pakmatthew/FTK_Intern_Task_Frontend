import axios from 'axios';

axios.interceptors.request.use(async(req) => {
    console.log("req.baseURL", req.baseURL)
    req.headers = {
      'Content-Type': 'application/json',
    }
    return req;
});

export default axios;