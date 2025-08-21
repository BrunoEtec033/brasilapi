import * as config from './config_api.js'

export const getCep = async (cep) => {
    const url = `${config.apiBrasil()}/cep/v2/${cep}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            return
        }
        return await response.json();

    } catch (error) {
        console.error('error fetching cep number:', error);
        throw error;

    }

   
}




