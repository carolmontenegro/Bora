import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import png from './src/img/png.jpg'
import {Routes} from './src/routes'



function App(...props) {

  
  return (

 <View style = {styles.container}>
 
      
    <TouchableOpacity>
        
       <Image style= {styles.img} source = {png} />
     
     
    </TouchableOpacity>   
  
     
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#df0d75',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    justifyContent: 'center',
     
  },  
    
  })

  export default App