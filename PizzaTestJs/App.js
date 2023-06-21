import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from  'react-native';
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
    color: 'grey',
  }

});


export default App;