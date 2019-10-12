import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop:18}}>
          <EvilIcons
            name="search"
            size={30}
            color={'#888'}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder='Search for resturants of food'
            underlineColorAndroid="transparent"
          />
        </View>
        <Text style={styles.bold}>Recent Searches</Text>
        <View style={{flexDirection:'row', marginTop:10}}>
          <EvilIcons
            name="search"
            size={30}
            color={'#888'}
            style={styles.inputicon}
          />
          <TextInput
            style={styles.searchinput}
            placeholder='Whatta Waffle'
            // underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    marginTop: 20,
    paddingHorizontal:20,
    backgroundColor:'#fff',

  },
  bold:{
    fontWeight:'600',
    fontSize:18,
    marginTop:30
  },
  input:{
    borderWidth:1,
    borderColor:'#888',
    padding:6,
    fontSize:18
  },
  searchinput:{
    borderBottomWidth:1,
    borderBottomColor:'#888',
    marginLeft:3,
    width:'90%',
    paddingVertical:8,
    paddingLeft:0,
    fontSize:18
  },
  icon:{
    position:'absolute',
    right:6,
    top:8
  },
  inputicon:{
    marginTop:12,
    marginLeft:-8
  }
})