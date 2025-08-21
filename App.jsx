import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Home from './screens/Tela_home'
import Tela_ddd from './screens/Tela_ddd'
import Tela_cep from './screens/Tela_cep'
import Tela_cnpj from './screens/Tela_cnpj'
import Tela_taxa from './screens/tela_taxa'
import Tela_feriados from './screens/Tela_feriados'







const MenuNav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Inicio" component={Home} />
        <MenuNav.Screen name="DDD" component={Tela_ddd} />
        <MenuNav.Screen name="CNPJ" component={Tela_cnpj} />
        <MenuNav.Screen name="CEP" component={Tela_cep} />
        <MenuNav.Screen name="TAXA" component={Tela_taxa} />
        <MenuNav.Screen name="FERIADOS" component={Tela_feriados} />
      
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
