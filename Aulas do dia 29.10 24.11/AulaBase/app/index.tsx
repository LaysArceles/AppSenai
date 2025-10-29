import { Background } from "@react-navigation/elements";
import { View,Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
      <View style = {{flex:1, justifyContent:"center", alignItems:'center'}}>
      <View style ={styles.square}>
        <Text style ={styles.colorBlue}> HEll </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colorBlue:{
    color: "blue",
    fontSize: 32,
    textAlign: 'center'
  },
  square: 
  {
    height:320,
    width: 320,
    backgroundColor:"red", 
    borderRadius: 155,
    justifyContent: 'center'
  }
})
