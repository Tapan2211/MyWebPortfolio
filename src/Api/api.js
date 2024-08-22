import axios from "axios";

// const BaseURL = 'http://localhost:8082';
const BaseURL = 'https://mywebportfoliobackend.onrender.com';
// const BaseURL = process.env.REACT_APP_API_BASE_URL;


export const getSkill = async (obj) => {
    try {
        const response = await axios.get(`${BaseURL}/skill`);
        return response.data.skillDetails;
    } catch (error) {
        console.log(error);
    }
}

export const sendInformation = async (obj) => {
    try {
        const response = await axios.post(`${BaseURL}/information/create`, obj);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProjectList = async () => {
    try {
        const response = await axios.get(`${BaseURL}/projects`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getEducation = async () => {
    try {
        const response = await axios.get(`${BaseURL}/education`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}