import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.header}>
          <Image source = {require('../../../assets/images/logo.png')} style={styles.swiggy} />
        </View>

        <View style={{paddingHorizontal:15}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
             <Text style={[styles.bold, {fontSize:18}]}>MOHD EID</Text>
             <Text style={styles.orange}>EDIT</Text>
          </View>
          <View style={{flexDirection:'row', marginTop:10}}>
             <Text style={[styles.normal, { width:140 }]}>+91 - 7567631975</Text>
             <Text style={[styles.normal, { width:140 }]}>mkeid17@gmail.com</Text>
          </View>

          <View style={styles.bar}></View>
          <Text style={styles.bold}>My Account</Text>
          <Text style={[styles.normal, {marginTop:10}]}>Addresses, Payments, Favorites, ..</Text>

          <View style={[styles.bar, {height:1, backgroundColor:'#888'}]}></View>

          <View style={{flexDirection:"row", marginTop:4}}>
            <MaterialCommunityIcons name="home-outline" size={22} color={'#888'} style={styles.icon} />
            <Text style={{marginLeft:30}}>Manage Addresses</Text>
          </View>

          <View style={{flexDirection:"row", marginTop:20}}>
            <MaterialIcons name="payment" size={22} color={'#888'} style={styles.icon} />
            <Text style={{marginLeft:30}} >Payment</Text>
          </View>

          <View style={{flexDirection:"row", marginTop:20}}>
            <MaterialIcons name="favorite-border" size={22} color={'#888'} style={styles.icon} />
            <Text style={{marginLeft:30}} >Favorites</Text>
          </View>

          <View style={{flexDirection:"row", marginTop:20}}>
            <MaterialIcons name="local-offer" size={22} color={'#888'} style={styles.icon} />
            <Text style={{marginLeft:30}} >Offers</Text>
          </View>

          <View style={[styles.bar, {height:1, backgroundColor:'#888'}]}></View>

          <Text style={styles.bold}>Help</Text>
          <Text style={[styles.normal, {marginTop:10}]}>FAQs and Links</Text>
        </View>

        <View style={{backgroundColor:'#f4f4f6', marginTop:12}}>
          <Text style={{paddingTop:36, paddingBottom:10, paddingLeft:15}}>ACTIVE ORDER</Text>
        </View>

        <View style={{paddingHorizontal:15, marginTop:15}}>
          <Text style={styles.bold}>The Shake Maker</Text>
          <Text style={[styles.normal, {marginTop:5}]}>Bopal</Text>
          <View style={styles.dotbod}>
            <Text style={styles.normal}>113.00 INR</Text>
          </View>
          <Text style={[styles.normal, {marginTop:10}]}>Kit Kat Shake - 1</Text>
          <Text style={[styles.normal, {marginTop:10, fontSize:13}]}>17 Jan 2019, 01:15 pm</Text>
          <View style={{flexDirection:'row', marginTop:16, justifyContent:'space-around'}}>

            <TouchableOpacity style={{backgroundColor:'#fb6f2f', borderRadius:4}}>
              <Text style={{color:'#fff', paddingHorizontal:30, paddingVertical:12}}>TRACK ORDER</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{borderColor:'#fb6f2f', borderWidth:2, borderRadius:4}}>
              <Text style={{color:'#fb6f2f', paddingHorizontal:55, paddingVertical:12}}>HLEP</Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={{backgroundColor:'#f4f4f6', marginTop:12}}>
          <Text style={{paddingTop:36, paddingBottom:10, paddingLeft:15}}>PAST ORDERS</Text>
        </View>

        <Text style={[styles.bold, {paddingTop:30, paddingLeft:15}]}>Sundew - Ramada</Text>

        <View style={{backgroundColor:'#f4f4f6', marginTop:12}}>
          <Text style={{paddingTop:16, paddingBottom:2, paddingLeft:15}}>GIVE YOUR VALUABLE FEEDBACK</Text>
          <Text style={{paddingTop:1, paddingBottom:50, paddingLeft:15}}>How likely are you to recommend Swiggy..</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    flexDirection: 'column', 
    marginTop: 20,
    backgroundColor:'#fff',
 },
 header:{
    backgroundColor:'#0c5160',
    elevation:5,
    height:50
 },
 swiggy:{
    width:40,
    height :40,
    position:'absolute',
    left:10,
    top:16,
 },
 bar:{
   backgroundColor:'#111',
   height:2,
   marginVertical:10
 },
 text:{
   fontSize:13,
   color:'#aaa'
 },
 bold:{
   fontSize:17,
   fontWeight:'600'
 },
 orange:{
   fontSize:16,
   fontWeight:'600',
   color:'#fb6f2f'
 },
 normal:{
   fontSize:14,
   fontWeight:'400',
   color:'#888'
 },
 dotbod:{
  marginTop:12,
  paddingBottom:4,
  borderBottomWidth:1,
  borderBottomColor:'#888'
 }
})