import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal } from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {MapView} from 'expo'
import * as actions from "../../store/common/actions";

class Address extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: '#14B1F8',
      content: '',
      showModal: false,
      location:''
    }
  }

  renderModal() {
    return (
      <Modal
        visible={this.state.showModal}
        transparent={true}
        onRequestClose={() => this.closeModal()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
          
            <TouchableOpacity onPress={() => this.setState({showModal:false})}>
              <Text>Hide</Text>
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
    let coords = {
        latitude: 43,
        longitude: -82,
      };
    return (
      <View style={{flex:1, flexDirection:'column'}}>
      <MapView
              style={{ width: '100%', flex: 1}}
              region={{
                latitude: 43,
                longitude: -82,
                latitudeDelta: 1,
                longitudeDelta: 1,
              }}
          >
        <MapView.Marker
            coordinate={coords}
            image={require('../../../assets/images/mark.png')}
        >
        </MapView.Marker>
      </MapView>
      <View style={styles.menu}>
         <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => {this.setState({showModal:false})}}>
           <View style={styles.seperator}></View>
         </TouchableOpacity>
         <Text style={{marginLeft:8}}>Set delivery location</Text>
         <Text style={{marginLeft:8}}>location</Text>
         <Text style={{marginLeft:8}}>HOUSE / FLAT NO.</Text>
         <View style={{width:'100%', height:2, backgroundColor:'#fd7f18', marginTop:5}}></View>
         <TextInput placeholder="LANDMARK" style={{padding:8, fontSize:16, marginHorizontal:8, marginTop:10}}/>
         <TextInput placeholder="SAVE AS" style={{padding:8, fontSize:16, marginHorizontal:8, marginTop:10}}/>

         <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', height:50, backgroundColor:'#fd7f18', borderRadius:3, marginHorizontal:12, marginTop:20 }}>
             <Text style={{color:'#fff'}}>SAVE AND PROCEED </Text>
         </TouchableOpacity>
      </View>    

      {/* {this.renderModal()} */}

      </View>
    );
  }
}

export default connect(
  state => ({
      location:state.common.location,
      chat:state.job.chat
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Address);

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    paddingTop:24,
  },
  bar:{
      backgroundColor:'#888',
      marginHorizontal:18,
      height:1,
      marginVertical:16
  },
  padding:{
      backgroundColor:'#f2f2f2',
      height:16,
      marginVertical:16
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  button:{
      borderWidth:1,
      borderColor:'#888',
      width:90,
      justifyContent:'center',
      alignItems:'center'
  },
  celler:{
      width:100,
      height:20
  },
  bold:{
    fontSize:22, 
    color:'#555', 
    paddingVertical:6, 
    paddingHorizontal:16, 
    fontWeight:'600'
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
  righticon:{
    position:'absolute',
    right:8
  },
  lefticon:{
    position:'absolute',
    left:2
  },
  menu:{
    //   position:'absolute',
      height:300,
      backgroundColor:'#fff',
      bottom:0,
      zIndex:-1
  },
  modalContainer: {
    flex: 1,
    width:'100%',
    backgroundColor: "rgba(0, 0, 0,0.5)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modal: {
    height: 220,
    marginBottom:40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation:3,
  },
  seperator:{
    height:5,
    marginVertical:15,
    backgroundColor:'#677080',
    borderRadius:12,
    width:100,
    justifyContent:'center',
  },
  modalContainer2: {
    flex: 1,
    width:'100%',
    backgroundColor: "rgba(0, 0, 0,0.5)",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modal2: {
    height: 470,
    width:'100%',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    elevation:3,
  }
});
