import * as React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Flex } from 'antd-mobile-rn';
import { colors } from '../common/colors';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { texts } from '../common/texts';
import { Actions } from 'react-native-router-flux';

export default class MainListItem extends React.Component {

  render() {
    const { image, position, money, title, iconColor, fav, sold, urgent } = this.props;
    return (
      <TouchableOpacity onPress={()=>Actions.detail()}>
        <Flex style={{ backgroundColor: colors.WHITE }}>
          <View style={{height:180}}>
            
            <Image
              style={{ width: 100, height: 105, margin:10 }}
              source={{
                uri: image,
              }}
            />

           <Image
                  style={{ width: 35, height: 35, position: 'absolute', right: 8, top: 82 }}
                  source={{ uri: 'https://s3-eu-central-1.amazonaws.com/africancleanenergy-storage-temp/wp-content/uploads/2014/09/unnamed.png' }}
           />
           
          </View>
          <Flex direction="column" align='start'>
            <Flex>
              <Text style={[styles.listText1, {marginLeft:8, fontSize:16}]}>{title}</Text>
            </Flex>
            <Flex>
              <Text style={[styles.listText2, {marginLeft:8, fontSize:13, lineHeight:26}]}>{position}</Text>
            </Flex>
            <Flex>
              <MaterialCommunityIcons
                name="water-percent"
                size={25}
                color={'#935e53'}
                style={{ marginLeft: 2 }}
              />
              <Text style={[styles.listText1, {color:'#935e53', fontSize:12}]}> $ {money}</Text>
            </Flex>
            <View style={{backgroundColor:'#ddd', height:1, width:'100%', marginLeft:8, marginTop:10, marginBottom:12}}></View>
            <View style={{flexDirection:'row'}}>
              <Flex direction="row" align='start'>
                <Ionicons
                  name="md-star"
                  size={20}
                  color="#888"
                  style={{ marginLeft: 10 }}
                />
                <Text style={{width:30, marginTop:2, marginLeft:5, color:'#888'}}>3.8</Text>
              </Flex>

              <Flex direction="row" align='start'>
                <Text style={{width:62, marginTop:2, marginLeft:5, color:'#888'}}>47 mins</Text>
              </Flex>

              <Flex direction="row" align='start'>
                <Text style={{ marginTop:2, marginLeft:5, color:'#888'}}>500$ for two</Text>
              </Flex>
            </View>

          </Flex>
          
        </Flex>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  listText1: texts.LISTTEXT,
  listText2: texts.CAPTION.SECONDARY,
});
