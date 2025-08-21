import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import CardCep from "../components/CardCep";

export default function Tela_cep() {
  const [cepDigitado, setCepDigitado] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [erro, setErro] = useState('');

  const buscarCep = () => {
    if (cepDigitado.length !== 8) {
      setErro('CEP inválido escreve 8 números.');
      setCidade('');
      setBairro('');
      setRua('');
      return;
    }

    setErro('');
    fetch(`https://brasilapi.com.br/api/cep/v1/${cepDigitado}`)
      .then(res => res.json())
      .then(data => {
        setCidade(data.city || '');
        setBairro(data.neighborhood || '');
        setRua(data.street || '');
      })
      .catch(err => {
        console.log(err);
        setErro('Não foi possível buscar o CEP.');
        setCidade('');
        setBairro('');
        setRua('');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cepDigitado}
        onChangeText={setCepDigitado}
        keyboardType="numeric"
      />

      <Button title="Buscar" onPress={buscarCep} />

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      {cidade !== '' && (
        <CardCep cidade={cidade} bairro={bairro} rua={rua} />
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

