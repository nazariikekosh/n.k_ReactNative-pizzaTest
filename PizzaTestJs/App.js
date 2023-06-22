import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from  'react-native';
import React from 'react';
import { CardItem } from './src/components/CardItem';

const pizzaData = [
  {
      id: 1,
      name: "Гавайська Вчорашня",
      price: 250,
      image: require('./assets/gavaja.webp'),
  },
  {
      id: 2,
      name: "Пеппероні Позавчорашня",
      price: 270,
      image: require('./assets/peperoni.webp'),
  },
  {
      id: 3,
      name: "Барбек'ю Зранку була ще свіжа",
      price: 275,
      image: require('./assets/barberq.webp'),
  },
  {
    id: 1,
    name: "Гавайська Зранку була ще свіжа",
    price: 250,
    image: require('./assets/gavaja.webp'),
},
{
    id: 2,
    name: "Пеппероні",
    price: 270,
    image: require('./assets/peperoni.webp'),
},
{
    id: 3,
    name: "Барбек'ю",
    price: 275,
    image: require('./assets/barberq.webp'),
},
{
  id: 1,
  name: "Гавайська Вчорашня",
  price: 250,
  image: require('./assets/gavaja.webp'),
},
{
  id: 2,
  name: "Пеппероні Вчорашня",
  price: 270,
  image: require('./assets/peperoni.webp'),
},
{
  id: 3,
  name: "Барбек'ю Зранку була ще свіжа",
  price: 275,
  image: require('./assets/barberq.webp'),
},

]

const App = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
        <ScrollView style={styles.container}>
          <Text style={styles.text}>
            Магазин Вчорашніх Піц
          </Text>
          <Text style={styles.textDes}>
            Недороблений  магазин, {'\n'}недопечених піц
          </Text>
          <View style={styles.imgContainer}>
            {pizzaData.map((pizza, index) =>(
              <CardItem text={pizza.name} img={pizza.image} price={pizza.price } key={index}/>
            ))}
          </View>
          <TouchableOpacity onPress={()=> Alert.alert("Дякую за замовлення. Термін доставки 4 дні")} style={styles.orderBtn}>
            <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontWeight: '500'}}>Зробити замовлення</Text>
          </TouchableOpacity>
            
        </ScrollView>
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
  orderBtn: {
    marginTop: 15,
    marginBottom: 30,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: 'orange',
    borderRadius: 8,
  }

});


export default App;