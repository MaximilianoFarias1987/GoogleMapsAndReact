import HttpCliente from '../services/HttpClient';

export const getLatLng = (address,province,apikey) => {
    return new Promise((resolve,eject) => {
        HttpCliente.get(`/geocode/json?address=${address}, ${province}&key=${apikey}`).then(response => {
            resolve(response);
        });
    })
}