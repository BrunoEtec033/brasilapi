import * as config from './config_api.js';


export const getFeriado = async (ano)=>{
    const url = `${config.apiBrasil()}/feriados/v1/${ano}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };
  try {
    const resposta = await fetch(url, options);
    if (!resposta.ok) {
      throw new Error(resposta.status);
    }
    return await resposta.json();
  } catch (error) {
    console.error('Erro ao buscar taxas:', error);
    throw error;
  }
}
