import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { ADDRESS } from '../../common/staticdata'; 
import { Actions } from 'react-native-router-flux';

export default class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      showModal: false,
      empty:null
    };
  }

  _renderItem3 = ({ item }) => (
    <View style={{flexDirection:'row', alignItems:'center', marginVertical:5}}>
      <Ionicons name={item.icon} size={32}  style={{padding:20}}/>
      <View>
        <Text style={{fontSize:18, paddingHorizontal:20, color:'#688dd2'}}>{item.title}</Text>
        <Text style={{paddingHorizontal:20}} numberOfLines={1}>{item.address}</Text>
        <Text style={{paddingHorizontal:20}}>{item.time}</Text>
      </View>
    </View>
  );

  renderModal() {
    return (
      <Modal
        visible={this.state.showModal}
        transparent={true}
        onRequestClose={() => this.closeModal()}

      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
           
            <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => this.closeModal()}>
              <View style={styles.seperator}></View>
            </TouchableOpacity>
            <Text>Choose a delivery address</Text>
            <FlatList
              data={ADDRESS}
              keyExtractor={(item, i) => String(i)}
              renderItem={this._renderItem3}
            />
            <TouchableOpacity onPress={()=>{ this.closeModal(); Actions.address()}} style={{flexDirection:"row", marginVertical:12, alignItems:'center'}}>
              <MaterialCommunityIcons name="plus" size={24} color='#fd7d16'/>
              <Text style={{color:'#fd7d16'}}>ADD NEW ADDRESS</Text>
            </TouchableOpacity>
            </View>
          </View>
      </Modal>
    );
  }

  onModal(){
    this.setState({showModal: !this.state.showModal})
  }

  closeModal() {
    this.setState({showModal:false});
  }

  render() {
    if(this.state.empty){
      return (
        <View style={styles.container}>
          
          <Image source = {require('../../../assets/images/pan.png')} resizeMode='contain' style={{width:'100%', height :320}} />
          <Text style={styles.bold}>GOOD FOOD IS ALWAYS COOKING</Text>
          <Text style={styles.text}>Your cart is empty. Add something from the menu</Text>
  
        </View>
      );
    }

    return(
      <ScrollView style={styles.container}>

      <View style={{paddingHorizontal:15}}>
        <View style={{flexDirection:'row', marginTop:20}}>
            <Image source={require('../../../assets/images/pan.png')} style={{width:50, height:50, borderColor:'#ddd', borderWidth:1, marginRight:12}}/>
            <View>
              <Text style={[styles.bold, {fontSize:18}]}>Drunken Monkey</Text>
              <Text >Vaspature</Text>
           </View>
        </View>        

        <View style={styles.bar}></View>
        <Text style={{marginVertical:8}} >Any Suggestions? We will pass it on ...</Text>

        <View style={{height:15, backgroundColor:'#e9e9eb', marginTop:10}}></View>

          <View style={{flexDirection:"row", marginVertical:12, alignItems:'center'}}>
            <MaterialCommunityIcons name="water-percent" size={24} />
            <Text >APPLY COUPON</Text>
          </View>

        <View style={{height:15, backgroundColor:'#e9e9eb'}}></View>

        <Text style={[styles.bold, {fontSize:18, marginTop:10}]}>Restaurant Bill</Text>

        <View style={{flexDirection:"row", justifyContent:'space-between', marginTop:4}}>
          <Text >Item Total</Text>
          <Text >259.00</Text>
        </View>

        <View style={{flexDirection:"row", justifyContent:'space-between', marginTop:4}}>
          <Text >Offers Discount</Text>
          <Text >51.80</Text>
        </View>

        <View style={{flexDirection:"row", justifyContent:'space-between', marginTop:4}}>
          <Text >GST</Text>
          <Text >10.36</Text>
        </View>

        
        <View style={[styles.bar, {height:1, backgroundColor:'#888'}]}></View>

        <View style={{flexDirection:"row", justifyContent:'space-between', marginTop:4}}>
          <Text style={{color:'green'}}>Delivery Charges</Text>
          <Text style={{color:'green'}}>FREE</Text>
        </View>

        <View style={[styles.bar, {height:1, backgroundColor:'#888'}]}></View>

        <View style={{flexDirection:"row", justifyContent:'space-between', marginTop:4}}>
          <Text >To Pay</Text>
          <Text >218.00</Text>
        </View>
      </View>

      <View style={{flexDirection:"row", marginTop:20, marginHorizontal:15, padding:12, alignItems:'center', borderColor:'#27a7a5', borderWidth:1}}>
          <MaterialIcons name="favorite-border" size={16} color={'#27a7a5'} />
          <Text style={{marginLeft:10, color: '#27a7a5'}} >Saving of 66.8 on the bill</Text>
      </View>

      <View style={{paddingHorizontal:15, marginTop:15}}>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image source={require('../../../assets/images/address.png')} style={{width:40, height:40, marginRight:10, marginTop:10}}/>
          <View>
            <Text style={[styles.bold, {marginTop:10}]}>Multiple addresses in this location</Text>
            <Text style={[styles.normal, {marginTop:10, fontSize:13}]}>Home, Other, Work</Text>
          </View>
        </View>

      

        <View style={{flexDirection:'row', marginTop:16, justifyContent:'space-around', marginBottom:12}}>

          <TouchableOpacity style={{borderColor:'#5fb344', borderWidth:1, borderRadius:4}}>
            <Text style={{color:'#5fb344', paddingHorizontal:28, paddingVertical:12}}>ADD ADDRESS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:'#5fb344', borderRadius:4}}>
            <Text style={{color:'#fff', paddingHorizontal:20, paddingVertical:12}}>SELECT ADDRESS</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => {this.setState({showModal:true})}}>
           <View style={styles.seperator}></View>
        </TouchableOpacity>

        {this.renderModal()}

      </View>

    </ScrollView>
    )
   
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
  },
  seperator:{
    height:5,
    marginVertical:15,
    backgroundColor:'#677080',
    borderRadius:12,
    width:100,
    justifyContent:'center',
  },
  lightbold:{
    fontSize:17, 
    color:'#777', 
    fontWeight:'300'
  },
  light:{
      fontSize:13,
      color:'#999'
  },
  list2:{
    flex: 1, 
    flexDirection: 'column', 
    marginHorizontal: 10, 
    marginVertical:12,
    borderBottomWidth:1,
    borderBottomColor:'#ddd'
  },
  modalContainer: {
    flex: 1,
    width:'100%',
    backgroundColor: "rgba(0, 0, 0,0.5)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modal: {
    height: 360,
    marginBottom:62,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation:3,
  }
 })