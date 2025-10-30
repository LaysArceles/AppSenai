
import { useState } from "react";
import { View,Text, StyleSheet, TextInput, TouchableOpacity, Button,Image} from "react-native";

export default function HomeScreen() {
  const [text,setText] = useState("");
  return (
  
    <View style={{flex:1, justifyContent:"center", alignItems:'center'}}>
        <View style={styles.square}>
          <View style={styles.squaree}>
            <View style={styles.squareee}>

           <Text style={styles.colorBlue}> HELL</Text> 
          <Image
          style ={{width:150, height:150, borderRadius:155}} 
          source = {require('../assets/images/f4.webp')}/>
            </View>
          </View>
        </View>
        <TextInput placeholder="Digite Seu caminho..." onChangeText={text => setText(text)}/>
          <TouchableOpacity>
            <View>
            <Text>Botão</Text>
            </View>
          </TouchableOpacity>

          <Button 
          title = "Botão"
          onPress = {()=> console.log('simple buton')} ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  colorBlue:{
    color: "black",
    fontSize: 32,
    textAlign: 'center',
    position:'absolute',
    zIndex: 1
  },
  square: 
  {
    display:'flex',
    height:320,
    width: 320,
    backgroundColor:"#8B0000", 
    borderRadius: 155,
    justifyContent: 'center',
    alignItems: 'center'
  },
  squaree: 
  {
    display:'flex',
    height:260,
    width: 260,
    backgroundColor:"#800000", 
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  squareee: 
  {
    zIndex: 0,
    display:'flex',
    height:160,
    width: 160,
    backgroundColor:"#7A0000", 
    borderRadius: 150,
    justifyContent: 'center',
     alignItems: 'center'
    
  }
})

