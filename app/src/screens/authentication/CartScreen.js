import React from 'react'
import { View, Text,StyleSheet ,FlatList,TouchableOpacity} from 'react-native'
import { useState,useEffect } from 'react/cjs/react.development';
import AuthenticationButton from '../../components/AuthenticationButton';
import COLORS from '../../consts/colors';
import {getData} from '../../utility/Utility';


const CartScreen = (props,{route}) => {
    const [cart, setCart] = useState(props.route.params.cartData)    
    
    return (
        <View style ={styles.contain}>
            <View style={styles.container}>
             <Text style={styles.headerTitle}>Cart</Text>
             {cart != undefined && <FlatList
          data={cart}
          renderItem={({ item }) =>
            <View style={styles.data}>
              
                  <Text style={styles.textStyle}>Name :    {item.name}</Text>
                  <Text style={styles.textStyle}>Price :    {item.price}</Text>
                 
            </View>
          } />}

        <AuthenticationButton 
        buttonName={'Place order'}
        container={styles.btn}
        />
        
        </View>
        </View>
       
    );
}

export default CartScreen;
const styles = StyleSheet.create({
    
    data: {
      marginTop:80,
      
      },
    contain:{
        alignItems:'center',
        backgroundColor:COLORS.grey,
        flex:1
    },
    container:{
        alignItems:'center',
        marginTop:"5%",
        marginLeft:'1%',
        justifyContent:'center'
    },
    btn: {
        marginTop:'40%',
        marginBottom:60,
        width:300
            
    },
    headerTitle: {
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        width: '55%',
        lineHeight: 30,
        marginTop:'10%',
        marginLeft:'1%',
              },
    textStyle:{
      color:'black',
      fontSize:20,
      marginTop:10,
              }
})