import { SafeAreaView, ScrollView, StyleSheet, Text, View } from  'react-native';
import React from 'react';

const App = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        {/* {<statusbar barStyle={isDarckMode ? 'light-content' : 'dark-content'} />}  */}
        <View style={styles.container}>
          <View style={styles.view1} />
          <View style={[styles.view1,{backgroundColor: 'green'}]} />
          <View style={[styles.view1,{backgroundColor: '#000'}]} />
        </View>
      </SafeAreaView>
       
    );
};


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },

  view1: {
    width: "30%",
    height: 150,
    borderRadius: 8,
    backgroundColor: "red",
  }

});


export default App;