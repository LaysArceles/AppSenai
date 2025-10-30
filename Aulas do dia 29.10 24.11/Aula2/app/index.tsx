import { View,TextInput,TouchableOpacity,Text,StyleSheet } from "react-native";


export default function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
      <View>
        <TextInput style={styles.Caixa} placeholder="Email"></TextInput>
        <TextInput style={styles.Caixa}placeholder="Senha"></TextInput>
        <TouchableOpacity>
            <View>
            <Text style={styles.Botao}>Login</Text>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create ({
  Botao:{
    display: 'flex',
    color: '#ffffff',
    backgroundColor:'#e37e27',
    borderRadius: 16,
    justifyContent:'center',
    alignItems: 'center',
    height:40,
    width:350
  },
  Caixa:{
    display: 'flex',
    color:'#b0b0b0',
    backgroundColor:'#e0e0e0',
    borderRadius: 16,
    justifyContent:'center',
    alignItems: 'center',
    height:40,
    width:350,
    margin:10
  }
})

