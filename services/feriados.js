import * as config from './config_api';

export const getFeriado = async (ano) => {
  const url = `${config.apiBrasil()}/feriados/v1/${ano}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw response.status;
    }

    return await response.json();
  } catch (error) {
    throw error; // repassa o erro original, sem criar outro
  }
};

export async function BuscarCep() {
  const resposta = await getFeriado('2025');
  console.log(resposta);
}
