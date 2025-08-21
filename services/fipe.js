
import * as config from './config_api.js'

export async function getFipe(tipoVeiculo){
    const url = `${config.apiBrasil()}/fipe/marcas/v1/${tipoVeiculo}`;
    const options = {
        method: 'GET' ,
        headers: {
            accept: 'application/json'
        }
    };

    try{
        const resposta = await fetch(url,options);
        if(!resposta.ok){                             
            throw new Error(resposta.status)
        }
        return await resposta.json();
        
    }catch(error){
       console.error('Erro ao buscar dados da FIPE:', error);
    }
}

export async function BuscarCep(){
   try {
    const dados = await getFipe('carros');
    console.log(dados);
} catch (err) {
    console.error('Erro na busca de FIPE:', err);
}
}
