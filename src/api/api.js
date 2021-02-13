import axios from "axios"

const instance = axios.create({
    // baseURL: "http://comma-api.eba-2tnypy8y.ap-northeast-2.elasticbeanstalk.com/"
    baseURL: "http://localhost:3000/"
});

export default instance;