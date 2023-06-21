import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, Alert} from "react-native";


export const CardItem =({text, img, price}) => {

    return(
        <TouchableOpacity onPress={()=> Alert.alert("Ви вибрали:", text)} style={styles.btn}>
            <Image style={styles.image} source={img}/>
            <Text>{text}</Text>
            <Text>{price}</Text>
        </TouchableOpacity> 
    )
}


const styles = StyleSheet.create({
    btn: {
        width: '50%',
    },

    image: {
      marginTop: 15,
      width: '100%',
      height: 180,
      borderRadius: 14,
    },

  });
  