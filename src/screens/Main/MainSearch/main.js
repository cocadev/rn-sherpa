import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';
import { Grid } from '@ant-design/react-native';

import { SEARCHITEM, NOTICE } from '../../../common/staticdata'
import { texts } from '../../../common/texts';
import { JOBS } from '../../../common/staticdata';
import MainListItem from '../../../components/MainListItem';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../store/common/actions";
import { colors } from '../../../common/colors';

const width = Dimensions.get("window").width;

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: '#14B1F8',
      content: '',
      location:''
    }
  }

  onValueChange = value => {
    this.state.theme == '#14B1F8'
      ? this.setState({ theme: '#20BF3B' })
      : this.setState({ theme: '#14B1F8' });
  }

  _renderItem = ({ item }) => (
    <MainListItem image={item.image} title={item.title} money={item.money} position={item.position} iconColor={colors.CYAN}></MainListItem>
  );

  _renderImg = ({item}) => (
    <View>
      <Image source={{uri:item.image}} style={{width:300, height:200, margin:10, borderRadius:8}}/>
      <Text style={styles.text1}>{item.text}</Text>
      <Text style={styles.text2}>{item.notice}</Text>
    </View>
  )

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}>

        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:15}}>
          <View style={{flexDirection:'row', justifyContent:'center'}}>
            <Text style={styles.text}>Now</Text>
            <AntDesign
                name="arrowright"
                size={20}
                color={colors.BLACK}
                style={{ marginHorizontal: 5, marginTop:2 }}
              />
            <Text style={styles.text}>Bopal</Text>
          </View>

          <View style={{flexDirection:'row', justifyContent:'center'}}>
             <MaterialCommunityIcons
                name="water-percent"
                size={28}
                color={colors.BLACK}
                style={{ marginLeft: 18, marginTop:-2 }}
              />
            <Text style={styles.text}>Offers</Text>
          </View>
         
        </View>

        <ScrollView horizontal>
          <FlatList
            horizontal
            data={NOTICE}
            keyExtractor={(item, i) => String(i)}
            renderItem={this._renderImg}
          />
        </ScrollView>

        <View style={{ marginHorizontal: 20, marginTop:20 }}>
            <Grid
              data={SEARCHITEM}
              columnNum={4}
              isCarousel
              hasLine={false}
              renderItem={dataItem => (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f0f1f7",
                    marginHorizontal: 3,
                    width: width / 5,
                    height: width / 4.5
                  }}
                >
                  <Image
                    source={{ uri: dataItem.icon }}
                    style={{ width: 32, height: 32 }}
                    alt=""
                  />
                  <Text style={{ textAlign: "center", color:'grey' }}>
                    {dataItem.text}
                  </Text>
                </View>
              )}
            />
         </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text
            style={{
              flex: 1,
              textAlign: "left",
              fontSize: 15,
              color: colors.BLACK,
              lineHeight: 20,
              fontFamily: 'Muli'
            }}>
            54 RESTURANTS
          </Text>
          <Text style={{ textAlign: "right", fontSize: 15, color: colors.CYAN }}>Sort / Filter</Text>
        </View>

        <FlatList
          data={JOBS}
          keyExtractor={(item, i) => String(i)}
          renderItem={this._renderItem}
        />
      </ScrollView>
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
)(Main);

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff'
  },
  content: {
    paddingVertical: 16,
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
    marginVertical: 8,
  },
  sliderText: texts.SLIDERTEXT,
  sliderText2: {
    fontSize: 30,
    position: 'absolute',
    top: 42,
  },
  text:{
    fontSize:18
  },
  text1:{
    fontSize:23,
    color:'#fff',
    position:'absolute',
    fontWeight:'600',
    left:17,
    bottom:34
  },
  text2:{
    fontSize:16,
    color:'#fff',
    position:'absolute',
    left:17,
    bottom:14
  }
});
