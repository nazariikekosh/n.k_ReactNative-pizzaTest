import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from  'react-native';
import React from 'react';

const App = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
        <View style={styles.container}>
          <Text style={styles.text}>
            Hello World {'\n'} edfwf
          </Text>
        </View>
      </SafeAreaView>
       
    );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  text: {
    fontSize: 24,
    fontWeight: '700',
  }

});


export default App;