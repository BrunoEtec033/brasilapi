

import * as config from './config_api.js'

export const getCnpj = async (cnpj) => {
    const url = `${config.apiBrasil()}/cnpj/v1/${cnpj}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'

        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`http error! status: ${response.status}`)
            return
        }

        return response.json();

    } catch (error) {
        console.error('erro', error);

    }
}


