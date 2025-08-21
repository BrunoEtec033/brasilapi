import { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import CardFeriado from "../components/CardFeriado";
import {InputFeriado} from '../components/Inputs';


export default function Tela_feriados() {
  const [ano, setAno] = useState('');
  const [feriados, setFeriados] = useState([]);

  const buscarFeriados = () => {
    if (!ano) return;
    fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
      .then(res => res.json())
      .then(data => setFeriados(data || []))
      .catch(() => setFeriados([]));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pesquisar Feriados</Text>
      <InputFeriado
        style={styles.input}
        placeholder="Digite o ano"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />
      <Button title="Buscar" onPress={buscarFeriados} />
      <FlatList
        data={feriados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CardFeriado nome={item.name} data={item.date} tipo={item.type} />}
        style={{ marginTop: 20 }}
      />
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

