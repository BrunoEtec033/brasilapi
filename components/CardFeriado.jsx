import { View, Text, StyleSheet } from 'react-native';

export default function CardFeriado({ nome, data, tipo }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text>Data: {data}</Text>
      <Text>Tipo: {tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  nome: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 }
});
