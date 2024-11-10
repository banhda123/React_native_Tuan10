import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home(props) {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        A premium online store for sporter and their stylish choice
      </Text>
      <Image
        source={require('./assets/bifour_-removebg-preview.png')}
      />

      <Text style={styles.title}>
        POWER BIKE 
        SHOP
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 26,
    fontWeight: 400,
    textAlign: 'center',
    lineHeight:26,
    fontFamily:"VT323",
    marginHorizontal:20
  },
  title:{
    textAlign:'center',
    fontSize:26,
    fontWeight: 700,
    lineHeight: 29.87,
    fontFamily:'ubuntu',
    marginVertical: 50
  },
  button:{
    width:'90%',
    backgroundColor:'#E94141',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    borderRadius:10
  },
  buttonText:{
    color:'white',
    fontWeight:400,
    fontSize:27,
    lineHeight:27,
    fontFamily:"VT323",
  }
});
