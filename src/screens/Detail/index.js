import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Ionicons, EvilIcons, MaterialCommunityIcons, Entypo, MaterialIcons, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { DISHES, REPEAT, MENUS, ADDRESS } from '../../common/staticdata'; 
import * as actions from "../../store/common/actions";

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: '#14B1F8',
      content: '',
      showModal: false,
      showModal2: false,
      location:''
    }
  }

  _renderItem = ({item}) => (
    <View style={styles.list2}>
        <Text style={styles.lightbold}>{item.title}</Text>
        <Text style={[styles.light, {fontSize:14, marginBottom:20}]}>HEllO</Text>
        <Entypo name="chevron-thin-down" size={18} color="green" style={styles.righticon} />
    </View> 
  );

  _renderItem2 = ({item}) => (
    <View style={styles.list2}>
        <Text style={[styles.lightbold, {marginLeft:20}]}>{item.title}</Text>
        <Text style={[styles.light, {fontSize:14, marginBottom:20, marginLeft:20}]}>Sweet Dishes</Text>
        <MaterialCommunityIcons name="circle-slice-8" size={14} color="green" style={[styles.lefticon, {marginTop:5}]} />
        <TouchableOpacity style={[styles.button, {position:'absolute', right:10}]}>
           <Text style={{color:'green', fontSize:16, fontWeight:'600', paddingHorizontal:24, paddingVertical:4}}>ADD</Text>
        </TouchableOpacity>
       
    </View>
  );

  _renderItem3 = ({ item }) => (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5}}>
      <Text style={{fontSize:18, marginHorizontal:20}}>{item.title}</Text>
      <Text style={{marginHorizontal:8}}>{item.count}</Text>
    </View>
  );

  _renderItem4 = ({ item }) => (
    <View style={{flexDirection:'column',  marginVertical:5 }}>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <FontAwesome name='dot-circle-o' size={18} color='green' style={{marginLeft:8,marginTop:4}}/>
          <Text style={{fontSize:18, paddingLeft:3, color:'#688dd2'}}>{item.title}</Text>
        </View>
        <TouchableOpacity style={[styles.button, {marginRight:5}]}>
            <Text style={{color:'green', fontSize:13, fontWeight:'600', paddingHorizontal:20, paddingVertical:3}}>ADD</Text>
        </TouchableOpacity>
      </View>
      <Text style={{paddingHorizontal:20}} numberOfLines={1}>{item.position}</Text>
        <Text style={{paddingHorizontal:20}}>{item.money}</Text>
      <Image source={{uri:item.image}} style={{width:'100%', height:140, margin:6, borderRadius:2}}/>
    </View>
  );

  closeModal() {
    this.setState({showModal:false, showModal2:false});
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
            <FlatList
              data={MENUS}
              keyExtractor={(item, i) => String(i)}
              renderItem={this._renderItem3}
            />      
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

  renderModal2() {
    return (
      <Modal
        visible={this.state.showModal2}
        transparent={true}
        onRequestClose={() => this.closeModal()}

      >
        <View style={styles.modalContainer2}>
          <View style={styles.modal2}>
           
            <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => this.closeModal()}>
              <View style={styles.seperator}></View>
            </TouchableOpacity>
            <Text>Recommended 13/19</Text>
            <FlatList
              data={DISHES}
              keyExtractor={(item, i) => String(i)}
              renderItem={this._renderItem4}
            />
          </View>
          </View>
      </Modal>
    );
  }

  closeModal() {
    this.setState({showModal2:false});
  }

  render() {
    return (
      <View style={{flex:1, flexDirection:'column'}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}>
        
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:8}}>
            <Ionicons name="ios-arrow-round-back" size={42} color="#888" style={{ marginLeft: 10 }} />
            <View style={{flexDirection:'row'}}>
              <EvilIcons name="search" size={35} color="#888" style={{ marginLeft: 10, marginTop:10 }} />
              <EvilIcons name="heart" size={35} color="#888" style={{ marginLeft: 10, marginTop:11 }} />
            </View>
        </View>
        <View style={{alignItems:'center'}}>
           <Text style={styles.bold}>Desert N Shakes</Text>
           <Text style={styles.lightbold}>Deserts, Beverages</Text>
        </View>
        <View style={styles.bar}></View>
        <View style={{justifyContent:'space-around', paddingHorizontal:8, flexDirection:'row'}}>
            <View style={{alignItems:'center'}}>
                <Text>4.5</Text>
                <Text style={styles.light}>100 + ratings</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text>25 MINS</Text>
                <Text style={styles.light}>Delivery Time</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text>INR 350</Text>
                <Text style={styles.light}>For Two Items</Text>
            </View>
        </View>    

        <View style={{borderColor:'#ddd', borderWidth:1, marginVertical:14, marginHorizontal:18}}>
          <View style={{flexDirection:'row', paddingVertical:12, paddingHorizontal:5}}>
            <Entypo name="star" size={20} color="brown" style={{ marginLeft: 10, marginTop:-2, marginRight:6 }} />
            <Text>20% off on all orders</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', paddingHorizontal:8, marginVertical:12}}>
           <MaterialCommunityIcons name="leaf" size={20} color="green" style={{ marginLeft: 10, marginTop:-2, marginRight:6 }} />
           <Text>PURE VEG</Text>
        </View>

        <View style={styles.padding}></View>
        <Text style={[styles.bold]}>Like to Repeat?</Text>

        <FlatList
          data={REPEAT}
          renderItem={({ item }) => (
            <View style={{ flex:1,  flexDirection: 'column', marginHorizontal: 10, marginVertical:22, position:'relative', borderWidth:1, borderColor:'#ddd', padding:6 }}>
             
              <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:6}}>
                <MaterialCommunityIcons name="circle-slice-8" size={13} color="green" style={{ marginLeft: 2, marginTop:1, marginRight:4 }} />
                <Text style={[styles.lightbold, {marginTop:-3}]}>Magic Banana Smoothie</Text>
              </View>
              <Text style={[styles.light, {marginLeft:20}]}>Smoothies</Text>
              <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                <Text style={[styles.light, {marginLeft:14}]}>INR 100</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="minus" size={13} color="green" style={{  marginTop:2 }} />
                </TouchableOpacity>
                <Text style={{color:'green'}}>1</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="plus" size={13} color="green" style={{ marginTop:2 }} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />

        <View style={styles.padding}></View>
        <Text style={[styles.bold]}>Recommended</Text>

        <FlatList
          data={DISHES}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 10, marginVertical:22, position:'relative' }}>
             
              <Image style={styles.imageThumbnail} source={{ uri: item.image }} />
              <View style={{flexDirection:'row', alignItems:'center', marginTop:6}}>
                <MaterialCommunityIcons name="circle-slice-8" size={13} color="green" style={{ marginLeft: 2, marginTop:1, marginRight:4 }} />
                <Text style={styles.light}>ICE CREAMES</Text>
              </View>
              <View style={{position:'absolute', right:0, top:-5}}>
                <Image source={require('../../../assets/images/seller.png')} style={styles.celler}/>
              </View>
              <Text style={styles.lightbold}>Choco Stick Cream Stick</Text>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={[styles.light, {fontSize:15, marginTop:8}]}>INR 100</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:'green', fontSize:16, fontWeight:'600', paddingHorizontal:24, paddingVertical:4}}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
        <View style={styles.padding}></View>
        <Text style={[styles.bold]}>ICECREAMS</Text>

        <FlatList
          data={DISHES}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItem}
        />

        <View style={styles.padding}></View>
        <Text style={[styles.bold]}>Fruisticks</Text>

        <FlatList
          data={DISHES}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItem2}
        />

        <View style={{height:40}}></View>

      </ScrollView>
      <View style={styles.menu}>
         <TouchableOpacity onPress={() => {this.setState({showModal:true})}} style={{flexDirection:'row', width:110, height:40, borderRadius:30, backgroundColor:'#5aa4fd', marginHorizontal:125, justifyContent:'center', alignItems:'center', margin:6}}>
           <MaterialIcons name="restaurant" size={22} color="#fff" />
           <Text style={{color:'#fff', marginHorizontal:6}}>MENU</Text>
         </TouchableOpacity>
         <View style={{backgroundColor:'#5fb344', borderRadius:3, marginHorizontal:10, flexDirection:'row', paddingHorizontal:10, paddingVertical:5, justifyContent:'space-between'}}>
           <View style={{flexDirection:'column'}}>
            <Text style={{color:'#fff'}}> 2 Items | 336</Text>
            <Text style={{color:'#fff', fontSize:9, marginLeft:3}}>Extra charges may apply</Text>
           </View>
           <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#fff', marginRight:12}}>VIEW CART</Text>
            <SimpleLineIcons name="handbag" size={22} color="#fff" />
           </View>

         </View>
         <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => {this.setState({showModal2:true})}}>
           <View style={styles.seperator}></View>
         </TouchableOpacity>
      </View>

    

      {this.renderModal()}
      {this.renderModal2()}

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
)(Detail);

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
      height:120,
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
