import React from 'react';
import { View } from 'react-native';
import { MainNavigator } from '../../common/navigator';

export default class Main extends React.Component {

  render() {
    return (
      <View style={{ flexDirection: 'column', flex: 1, paddingTop: 5 }}>
        <View style={{ flex: 1 }}>
          <MainNavigator />
        </View>
      </View>
    );
  }
}
