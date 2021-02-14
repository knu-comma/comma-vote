import axios from "axios"

const instance = axios.create({
    // baseURL: "http://comma-api.eba-2tnypy8y.ap-northeast-2.elasticbeanstalk.com/"
    baseURL: "https://121.158.146.119:443/"
});

export default instance;