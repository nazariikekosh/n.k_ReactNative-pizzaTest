import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image } from  'react-native';
import React from 'react';
import { CardItem } from './src/components/CardItem';


const App = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
        <View style={styles.container}>
          <Text style={styles.text}>
            Магазин Піци
          </Text>
          <Text style={styles.textDes}>
            Босяцький магазин, {'\n'}але піца смачна
          </Text>
          <View style={styles.imgContainer}>
            <CardItem text={'Гавайська'} img={require('./assets/gavaja.webp')} />
            <CardItem text={'Пеппероні'} img={require('./assets/peperoni.webp')} />
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
  
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    flexWrap: 'wrap',
  },

});


export default App;