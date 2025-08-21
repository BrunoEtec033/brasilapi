import { StyleSheet, View, TextInput } from 'react-native';

export const InputDDD = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        placeholder="Digite o DDD"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
}

export const InputCep = ({ onChangeText }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        maxLength={8}
        placeholder='Digite seu cep'
        keyboardType='numeric'
        onChangeText={onChangeText}

      />


    </View>
  )
}

export const InputCNPJ = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={14}
        placeholder="Digite o CNPJ"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );

}
export const InputFeriado = ({onChangeText}) => {
  return(
    <View style={styles.container}>
      <TextInput
       style={styles.input}
        maxLength={4}
        placeholder="Digite o Ano"
        keyboardType="numeric"
        onChangeText={onChangeText}
      
      
      />
    </View >


  );

  
}
export const InputFipe = ({onChangeText}) =>{
  return(
    <View style={styles.container}>
     <TextInput
     placeholder='digite o tipo do veiculo ex: carros '
     keyboardType='default'
     onChangeText={onChangeText}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  }
});
