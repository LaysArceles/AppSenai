import { Image } from 'expo-image';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { View, Text } from "react-native";
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [count, Setcount] = useState(0)
  // useEffect(()=>{
  //   const Time = Setcount (()=>{
  //     Setcount = 
  //   }
  //   )}
  // );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#484478" }}>
      <View style={styles.linha0}  >

      </View>
      <View style={styles.linha1}  >
        <TouchableOpacity>
          <Image style={{ height: 35, width: 35, marginRight: 10, marginLeft: 10, borderRadius: 10 }} source={require('../assets/images/menu.png')}></Image>
        </TouchableOpacity>

        <Text style={styles.caixinha}>Studying</Text>

        <TouchableOpacity>
          <Image style={{ height: 30, width: 30, marginRight: 10, borderRadius: 10, marginLeft: 50 }} source={require('../assets/images/Cronometro.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={{ height: 30, width: 30, marginRight: 10, borderRadius: 10, marginLeft: 10 }} source={require('../assets/images/Cadeado.png')}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.linha2}>
        <Text style={styles.text1}>Timer Mode</Text>

      </View>
      <View style={styles.linha3}>
        <Image style={{ height: 200, width: 200, borderRadius: 10, marginTop: -90 }} source={require('../assets/images/veigh.png')}></Image>
      </View>
      <View style={styles.linha4}>
        <Text style={{ fontSize: 40, marginTop: -100, marginLeft: 70 }}>01:00:00</Text>
        <Text style={styles.Timeop}></Text>
      </View>
      <View style={styles.linha5}>
        <TouchableOpacity>
          <Image style={{ width: 40, height: 40, borderRadius: 50, marginTop: 10, marginRight: 50 }} source={require('../assets/images/nota.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.conterner}> FOCUS </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ width: 50, height: 50, borderRadius: 50, marginTop: 10, marginLeft: 50 }} source={require('../assets/images/papel.jpg')}></Image>
        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  linha0: {
    height: "1%"
  },
  linha1: {
    display: "flex",
    flexDirection: 'row',
    marginTop: 10,
    height: "5%"
  },
  caixinha: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    borderColor: "#574ede",
    marginLeft: 50,
    color: '#bdbae0'
  },
  linha2: {
    display: "flex",
    height: "10%",
    flexDirection: 'row',

  },
  text1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    fontFamily: "",
    fontSize: 25,
    color: '#bdbae0'
  },
  linha3: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    height: "50%"
  },
  Timeop: {
    height: 10,
    width: 300,
    backgroundColor: "#574ede",
    borderRadius: 10

  },
  Linha4: {
    display: "flex",
    height: "10%"
  },
  linha5: {
    display: "flex",
    height: "15%",
    flexDirection: "row"

  },
  conterner: {
    justifyContent: "center",
    alignItems: "flex-end",
    fontSize: 20,
    padding: 20,
    backgroundColor: "#d685b3",
    borderRadius: 100

  }
});
