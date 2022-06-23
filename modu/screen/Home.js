import { StyleSheet, Text, View, Button, TouchableOpacity,TextInput } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack =  createNativeStackNavigator();

const Home = (props) => 
{

  const navigation = props.navigation;
  return(<View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
       <Text>
        Name:YoshiharuTakemoto
      </Text>
      <Text>
      Number:23
      </Text>
      <Text>
      GroupName:kn-04
      </Text>
  </View>)
}

export default Home;

const styles = StyleSheet.create({

    container: {
      flex:1, 
      backgroundColor:"#fff",
      alignItems:'center',
      justifyContent:'center',
    },

    button:{
      alignItems:'center',
      backgroundColor:'red',
      padding:10,
      marginTop:60,
      color:'white'
    }
  });