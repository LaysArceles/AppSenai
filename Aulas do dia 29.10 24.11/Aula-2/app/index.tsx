import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from "react-native";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from '../firebaseConfig';
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const [ConfirmPassword,setConfirmPassword] = useState("");

  useEffect(()=>{
    console.log(Email,Password,ConfirmPassword)
  },[Email,Password,ConfirmPassword])
 
  const auth = getAuth(app)
  const sigup=()=>{
    if (Password === ConfirmPassword){
      createUserWithEmailAndPassword(auth,Email,Password)
    }
    else{
      return alert("Erro!")
    }

  }
  return (
    // ======================================= LONGIN ==========================================
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <View style={{ height: '10%' }}>
    //     <Text style={styles.halla}> Halla</Text>
    //   </View>
    //   <View style={{ height: '60%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <View style={styles.titulo}>
    //       <Text style={styles.titulo2} > Welcome!</Text>
    //     </View>
    //     <TextInput style={styles.Caixa} placeholder="  Email"></TextInput>
    //     <TextInput style={styles.Caixa} placeholder="  Password"></TextInput>

    //     <TouchableOpacity style={styles.Botao}>
    //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //         <Text style={styles.login}>Login</Text>
    //       </View>
    //     </TouchableOpacity>

    //     <TouchableOpacity style={styles.botaoForgot}>
    //       <View>
    //         <Text style={styles.Forgot}> Forgot Password ?</Text>
    //       </View>
    //     </TouchableOpacity>

    //     <View style={{ flexDirection: 'row', marginTop: 20 }}>
    //       <Text style={styles.botaodont}>Don't have an account?</Text>
    //       <TouchableOpacity>
    //         <Text style={styles.botaoGoo}>Sign Up</Text>
    //       </TouchableOpacity>

    //     </View>
    //     <View style={{ flexDirection: 'row', marginTop: 10, height: "15%" }}>
    //       <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    //         <Image style={{ height: 30, width: 30, marginRight: 10}} source={require('../assets/images/google.png')}></Image>
    //         <Text style={styles.botaoGoo}>Google</Text>
    //       </TouchableOpacity>

    //       <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
    //         <Image style={{ height: 30, width: 30,borderRadius:50, marginLeft: 100 }} source={require('../assets/images/facee.jpg')}></Image>
    //         <Text style={styles.botaoFace}>Facebook</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', height: "15%", position: 'absolute', bottom: -75 }}>
    //     <View style={styles.Smallcircle}></View>
    //     <View style={styles.Bigcircle}></View>
    //   </View>
    // </View>
    //
    // =================================== Register ===================================================
    //
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: '10%' }}>
        <Text style={styles.halla}> Halla</Text>
      </View>
      <View style={{ height: '60%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.titulo}>
          <Text style={styles.titulo2} > Welcome!</Text>
        </View>
        <TextInput style={styles.Caixa} placeholder="  Email" onChangeText={(value)=> setEmail(value)}></TextInput>
        <TextInput style={styles.Caixa} placeholder="  Password" secureTextEntry onChangeText={(value)=> setPassword(value)}></TextInput>
        <TextInput style={styles.Caixa} placeholder="  Confirm Password"secureTextEntry onChangeText={(value)=> setConfirmPassword(value)}></TextInput>

        <TouchableOpacity style={styles.Botao} onPress={sigup}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.login} >Register</Text>
          </View>
          </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginTop: 10, height: "15%" }}>
          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{ height: 30, width: 30, marginRight: 10}} source={require('../assets/images/google.png')}></Image>
            <Text style={styles.botaoGoo}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{ height: 30, width: 30,borderRadius:50, marginLeft: 100 }} source={require('../assets/images/facee.jpg')}></Image>
            <Text style={styles.botaoFace}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', height: "15%", position: 'absolute', bottom: -75 }}>
        <View style={styles.Smallcircle}></View>
        <View style={styles.Bigcircle}></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Botao: {
    display: 'flex',
    color: 'white',
    backgroundColor: '#e37e27',
    borderRadius: 16,
    height: 40,
    width: 340,
    margin: 5,
    textAlign: 'center'
  },
  botaoForgot: {
    display: 'flex',
    color: '#e37e27',
    marginTop: 20,
    marginBottom: 20,
  },
  login: {
    fontWeight: '600',
    color: "#ffffff"
  },
  Forgot: {
    color: '#e37e27',
    fontWeight: '500'
  },
  botaoGoo: {
    color: '#e37e27',
    fontWeight: "500"
  },
  botaoFace: {
    color: 'blue',
    
  },
  botaodont: {
    marginRight: 10,
    marginBottom: 50
  },
  Caixa: {
    display: 'flex',
    color: '#b0b0b0',
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 340,
    margin: 5
  },
  LogarOutroMeio: {
    display: 'contents'
  },
  titulo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  Smallcircle: {
    display: 'flex',
    borderRadius: 80,
    backgroundColor: '#E1B0A8',
    height: 110,
    width: 110,
    marginRight: 80,
  },
  Bigcircle: {
    display: 'flex',
    borderRadius: 100,
    backgroundColor: '#ECD6CB',
    height: 190,
    width: 190,
    marginLeft: 60
  },
  titulo2: {
    fontFamily: "Times New Roman",
    fontWeight: '600',
    fontSize: 20,
  },
  halla: {
    color: '#e37e27',
    fontSize: 20,
    fontFamily: 'Georgia'
  }

})

