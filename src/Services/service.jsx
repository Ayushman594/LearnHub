import axios from "axios";

const API_URL = "http://localhost:8083"; // Replace with your API URL


// get data from the API
const services={
    getData:async(endpoint)=>{
        const response = await axios.get(`${API_URL}/${endpoint}`);
        return response.data;
    },
    addData:async(endpoint,data)=>{
       const response=await axios.post(`${API_URL}/${endpoint}`,data);
       return response.data;
    },
    editData:async(endpoint,id,data)=>{
      const response=await axios.put(`${API_URL}/${endpoint}/${id}`,data);
      return response.data;  
    },
    deleteData:async(endpoint,id)=>{
        const response=await axios.delete(`${API_URL}/${endpoint}/${id}`);
        return response.data;
    },
       searchData: async (title, endpoint) => {
    const response = await axios.get(
        `${API_URL}/${endpoint}/search?name=${encodeURIComponent(title)}`
    );

    return response.data;
}
};

export default services;