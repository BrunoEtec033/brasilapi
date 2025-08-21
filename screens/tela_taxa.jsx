import { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import CardTaxa from "../components/CardTaxa";

export default function Tela_taxa() {
  const [taxas, setTaxas] = useState([]);

  useEffect(() => {
    fetch('https://brasilapi.com.br/api/taxas/v1')
      .then(res => res.json())
      .then(data => setTaxas(data)) 
      .catch(() => setTaxas([])); 
  }, []);
  



  return (
    <View style={styles.container}>
      {taxas.map((t, i) => (
        <CardTaxa key={i} nome={t.nome} valor={t.valor} />
      ))}
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

