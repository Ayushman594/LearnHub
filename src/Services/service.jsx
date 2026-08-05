import axios from "axios";

const API_URL = "http://localhost:5000"; // Replace with your API URL


// get data from the API
const services={
    getData:async(endpoint)=>{
        const response = await axios.get(`${API_URL}/${endpoint}`);
        return response.data;
    }
}
export default services;