import React from 'react'
import { View, Text ,Image,StyleSheet} from 'react-native';

const PlaceOrderScreen = () => {
    return (
        <View>
            
            <Image source={require('../../../res/assets/success.png')}
            style={styles.img}/>
            <Text style={styles.text}>Order Placed Successfully</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    img: {
        marginLeft:'23%',
        marginTop:'60%',
        height: 200,
        width: 200,
        borderRadius: 100
    },
    text:{
        fontSize:24,
        marginLeft:'11%',
        marginTop:'17%',
        fontWeight:'bold'
    }
});



export default PlaceOrderScreen;

