import axios from 'axios';

const API_URL = 'https://api-dev.plushcare.com/';
const HEADERS = {

}

export const fetchAppointments = async (appData) => (
    await axios.get(`${API_URL}`, {'headers': HEADERS}, JSON.stringify(appData))
);

export const createUser = async (userData) => (
    await axios.post(`${API_URL}`, {'headers': HEADERS}, JSON.stringify(userData))
);

export const submitPayment = async (paymentData) => (
    await axios.post(`${API_URL}`, {'headers': HEADERS}, JSON.stringify(paymentData))
);

export const submitInsurance = async (insuranceData) => (
    await axios.post(`${API_URL}`, {'headers': HEADERS}, JSON.stringify(insuranceData))
);
