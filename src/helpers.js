import axios from 'axios';

// const API_URL = 'http://localhost:2323/'
const API_URL = 'https://api-dev.plushcare.com/'
// 'https://api-dev.plushcare.com/';
//  Hp1Wm4nFzh38aVA4Dr9C32siFeXRXw
const HEADERS = {
    'Authorization': 'Bearer Hp1Wm4nFzh38aVA4Dr9C32siFeXRXw'
}

export const fetchAppointments = (appData) => (
    axios.get(
        `${API_URL}patients/appointments/available/new/`,
        {
            headers: HEADERS,
            params: appData
        },
    )
);

export const createUser = (userData) => (
    axios.post(
        `${API_URL}`,
        {'headers': HEADERS},
        JSON.stringify(userData)
    )
);

export const submitPayment = (paymentData) => (
    axios.post(
        `${API_URL}`,
        {'headers': HEADERS},
        JSON.stringify(paymentData)
    )
);

export const submitInsurance = (insuranceData) => (
    axios.post(
        `${API_URL}`,
        {'headers': HEADERS},
        JSON.stringify(insuranceData)
    )
);
