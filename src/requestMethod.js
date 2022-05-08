import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ3ZDg4Y2Y2M2I2ZjhlN2UyNTBjMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDM3Nzc2NSwiZXhwIjoxNjUwNjM2OTY1fQ.iFW8rtCpH25ukNtcBzy1XAWeVeZ7vxuT9ZxsYolNJ9M";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
});