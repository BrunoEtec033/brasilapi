import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useState } from 'react';
import CardCidade from '../components/CardCidade';
import * as dddService from '../services/ddd';

export default function Tela_ddd() {
  const [cidades, setCidades] = useState([]);
  const [uf, setUf] = useState('');

  const exibirCidadesDoDDD = async (digito) => {
    if (!digito || digito.length !== 2) {
      setCidades([]);
      setUf('');
      return;
    }

    try {
      const resposta = await dddService.getDDD(digito);
      if (resposta && resposta.cities) {
        setCidades(resposta.cities);
        setUf(resposta.state || '');
      } else {
        setCidades([]);
        setUf('');
      }
    } catch (error) {
      console.error('Erro ao buscar DDD:', error);
      setCidades([]);
      setUf('');
    }
  };

  return (
    <View style={styles.container}>
      <InputDDD onChangeText={(digito) => exibirCidadesDoDDD(digito.trim())} />

      {cidades.length > 0 ? (
        <ScrollView style={styles.scroll}>
          {cidades.map((cidade, index) => (
            <CardCidade key={index} nome={cidade} uf={uf} />
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.semResultado}>Nenhuma cidade encontrada</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  scroll: {
    marginTop: 20,
    width: '100%',
  },
  semResultado: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
