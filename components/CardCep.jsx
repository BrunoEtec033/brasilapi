import { View, Text, StyleSheet } from "react-native";

export default function CardCep({ cidade, bairro, rua }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Endereço</Text>
      <Text style={styles.texto}>Bairro: {bairro}</Text>
      <Text style={styles.texto}>Rua: {rua}</Text>
      <Text style={styles.texto}>Cidade: {cidade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginTop: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
    textAlign: 'center'
  },
  texto: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444'
  }
});
