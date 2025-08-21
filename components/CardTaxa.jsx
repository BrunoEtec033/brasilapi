import { View, Text, StyleSheet } from 'react-native';

export default function CardTaxa({ nome, valor }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.valor}>{valor}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  valor: {
    fontSize: 16,
    color: '#333',
    marginTop: 5
  }
});
