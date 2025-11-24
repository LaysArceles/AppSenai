
import { Link } from "expo-router"
import { StyleSheet, Text, View,Image, TouchableOpacity } from "react-native"


export default function HomeScreen() {
    return(
    <View style = {styles.texto}>
        <Image style={{ height: 350, width: '100%', marginRight: 10 }} source={require('../assets/images/gato.jpg')}></Image>
        <TouchableOpacity> 
            <Link href={'/pets'} style={styles.titulo2}> Register your pet </Link>
        </TouchableOpacity>
    </View>
)}
const styles = StyleSheet.create({
    texto: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',   

    },
    titulo2: {
        fontFamily: "Times New Roman",
        fontWeight: '600',
        fontSize: 50,
    }

    })