import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet} from "react-native";


export const CardItem =({text, img}) => {

    return(
        <TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/image/pizza.jpg')} />
            <Text>{text}</Text>
        </TouchableOpacity> 
    )
}


const styles = StyleSheet.create({
    image: {
      marginTop: 15,
      width: '45%',
      height: 180,
      borderRadius: 14,
    },
  
  });
  