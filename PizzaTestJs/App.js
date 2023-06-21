import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image } from  'react-native';
import React from 'react';


const App = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
        <View style={styles.container}>
          <Text style={styles.text}>
            Магазин Піци
          </Text>
          <Text style={styles.textDes}>
            Опис магазину довжиною {'\n'}в дві строчки:)))
          </Text>
          <View style={styles.imgContainer}>
          <Image style={styles.image} source={require('./assets/image/pizza.jpg')}/>
          <Image style={styles.image} source={require('./assets/image/pizza.jpg')}/>
          <Image style={styles.image} source={require('./assets/image/pizza.jpg')}/>
          <Image style={styles.image} source={require('./assets/image/pizza.jpg')}/>
          </View>
        </View>
      </SafeAreaView>
       
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },

  text: {
    fontSize: 24,
    fontWeight: '700',
  },

  textDes: {
    fontSize: 16,
    marginTop: 15,
    color: 'grey',
  },
  image: {
    marginTop: 15,
    width: '45%',
    height: 180,
    borderRadius: 14,
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    flexWrap: 'wrap',
  },

});


export default App;