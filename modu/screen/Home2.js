import { StyleSheet, Text, View, Button, TouchableOpacity,TextInput } from 'react-native';
import React,{useState} from 'react';

const Home2 = (props) =>{
    const [list, setList] = useState([]);
    const [text, setText] = useState('');
    
    return(    
    
    <View style={styles.container}>
        <TextInput 
          style={styles.Inputer} 
          onChangeText={setText}
          />
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => setList([...list, text])}>
            <Text>
              Add
            </Text>
        </TouchableOpacity>
        <View>
          {list.map((value, index) => (
            <Text key={index}>
              {value}
            </Text>
          ))}
        </View>
      </View>
    )}
  
  export default Home2;

  const styles = StyleSheet.create({

    container: {
      flex:1, 
      backgroundColor:"#fff",
      alignItems:'center',
      justifyContent:'center',
    },

    Inputer:{
        borderColor:'black',
        borderWidth:2,
        width:290,
        height:50,
    },

    button:{
      alignItems:'center',
      backgroundColor:'red',
      padding:10,
      marginTop:30,
      color:'white'
    }
  });