import { Link } from "expo-router"
import { useState } from "react";
import {getAuth} from "firebase/auth"
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import { db } from '../firebaseConfig';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function HomeScreen() {
   
    const [NamePet,setName] = useState('');
    const [NameOwner,setNameOwner]  = useState('');
    const [PetBreed,setPetBreed]= useState('');
    const [Weight,setWeight]  = useState('');
    const [year,setyear] = useState('');
   

     async function registerpets() {
        try {

        // const auth = getAuth();
        // const user = auth.currentUser;

        // if (!user) {
        //     console.log("Usuário não está logado.");
        //     return;
        // }

        if (!NamePet || !NameOwner || !PetBreed) {
            console.log("Please fill in the owner's name, pet's name, and pet's breed.");
            return;
        }
    const pets ={
        NamePet,
        NameOwner,
        PetBreed,
        Weight:Number(Weight),
        year: Number(year),
        // userId: user.uid,
        createdAT:serverTimestamp(),
        updadAT:serverTimestamp(),
    }
    await addDoc(collection(db, "pets"), pets);
      console.log("Pet cadastrado!");

    } catch (err) {
      console.log("Erro ao cadastrar:", err);
    }
  }
    
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5ebe4" }}>
            <View> <Text style={{ height: 65, fontSize: 25, color: '#1d0459', fontWeight: '600' }}> Registering your pet</Text>

                <TextInput style={styles.cart} placeholder="Name pet" onChangeText={setName}></TextInput>
                <TextInput style={styles.cart} placeholder="Name of the pet owner " onChangeText={setNameOwner}></TextInput>
                <TextInput style={styles.cart} placeholder="Pet breed" onChangeText={setPetBreed}></TextInput>
                <TextInput style={styles.cart} placeholder="Weight" onChangeText={setWeight}></TextInput>
                <TextInput style={styles.cart} placeholder="Pet year"onChangeText={setyear}></TextInput>
            </View>
            <TouchableOpacity style={styles.boton} onPress={registerpets}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.register}>{' Register'}</Text>
                </View>
            </TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({
    cart: {
        display: 'flex',
        color: '#1d0459',
        backgroundColor: "#e0e0e0",
        height: 30,
        width: 350,
        margin: 3,
        borderRadius: 30,
        padding: 10
    },
    register: {
        height: 35,
        width: 350,
        color: "#ffffff",
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: '#e37e27',
        borderRadius: 30,
        marginTop:10,
        padding:5,
    },
    boton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center",
        marginTop:10,
    }

})
