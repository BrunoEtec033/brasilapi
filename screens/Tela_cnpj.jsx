import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import CardCnpj from "../components/CardCnpj";

export default function Tela_cnpj() {
  const [cnpjDigitado, setCnpjDigitado] = useState('');
  const [dados, setDados] = useState({});
  const [erro, setErro] = useState('');

  const buscarCnpj = () => {
    if (cnpjDigitado.length !== 14) {
      setErro('CNPJ inválido Digite 14 números.');
      setDados({});
      return;
    }

    setErro('');
    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjDigitado}`)
      .then(res => res.json())
      .then(data => setDados(data))
      .catch(() => {
        setErro('Não foi possível buscar o CNPJ.');
        setDados({});
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar CNPJ</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CNPJ"
        value={cnpjDigitado}
        onChangeText={setCnpjDigitado}
        keyboardType="numeric"
      />
      <Button title="Buscar" onPress={buscarCnpj} />
      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
      {dados.cnpj && (
        <CardCnpj
          cnpj={dados.cnpj}
          razaoSocial={dados.razao_social}
          nomeFantasma={dados.nome_fantasia}
          cep={dados.cep}
          telefone={dados.ddd_telefone_1}
        />
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

