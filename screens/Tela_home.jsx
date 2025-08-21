import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";







export default function Home() {

    const Navigation = useNavigation();
    
    
 

    return (

        <View style={styles.containerPai} >
            <View style={styles.conteiner}>
                <Text>BRASIL API</Text>

            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    containerPai: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fffffff0',
        padding: 20,
        display: 'flex',
        alignItems: 'center',




    },
    conteiner: {
        display: 'flex',
        width: '100%',
        height: '50%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 50



    }
})