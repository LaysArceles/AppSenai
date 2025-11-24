import { Link } from "expo-router"
import { useState } from "react";
import {getAuth} from "firebase/auth"
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from "react-native";
import { app } from "@/firebaseConfig";
import { db } from '../firebaseConfig';
import { serverTimestamp } from "firebase/firestore";


export default function HomeScreen() {
    const {NamePet,setName} = useState('');
    const {NameOwner,setNameOwner } = useState('');
    const {PetBreed,setPetBreed} = useState('');
    const {Weight,setWeight } = useState('');
    const {Age,setAge} = useState('');
    a

    const auth = getAuth(app)
    // const user = 
    const vehicle ={
        NamePet,
        NameOwner,
        PetBreed,
        Weight,
        Age,
        createdAT:serverTimestamp(),
        updadAT:serverTimestamp(),
    }
    

    const sigup = async () => {

    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#c48d97" }}>
            <View> <Text style={{ height: 65, fontSize: 25, color: '#1d0459', fontWeight: '600' }}> Registering your pet

            </Text></View>
            <View>
                <TextInput style={styles.cart} placeholder="  Name pet"></TextInput>
                <TextInput style={styles.cart} placeholder="  Name of the pet owner "></TextInput>
                <TextInput style={styles.cart} placeholder="  Pet breed"></TextInput>
                <TextInput style={styles.cart} placeholder="  Weight"></TextInput>
                <TextInput style={styles.cart} placeholder="  Pet age"></TextInput>
            </View>
            <TouchableOpacity style={styles.boton} onPress={sigup}>
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
        backgroundColor: "#b58490",
        height: 30,
        width: 350,
        margin: 3,
        borderRadius: 30
    },
    register: {
        height: 50,
        width: 350,
        color: "#b58490",
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: '#3705ad',
        borderRadius: 30,
        marginTop:10,
    },
    boton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center",
        marginTop:10,
    }

})
