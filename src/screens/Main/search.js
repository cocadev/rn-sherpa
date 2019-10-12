import React from 'react';
import { View } from 'react-native';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../store/common/actions";
import Main from './MainSearch/main';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: '#14B1F8',
      content: '',
      location:''
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Main />
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
)(Search);
