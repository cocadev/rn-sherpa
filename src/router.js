import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { Font } from 'expo';
import Main from './screens/Main';
import Detail from './screens/Detail';
import Address from './screens/Address';

export default class App extends PureComponent {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await this._loadAssets();
  }

  async _loadAssets() {
    await Font.loadAsync({
      'Muli-Bold': require('../assets/fonts/Muli-Bold.ttf'),
      'Muli-SemiBold': require('../assets/fonts/Muli-SemiBold.ttf'),
      Muli: require('../assets/fonts/Muli.ttf'),
      Princess: require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'evilicons' : require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'foundation' : require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'material-community' : require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'material' : require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'entypo' : require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'ionicons' : require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'simple-line-icons' : require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'anticon' : require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'feather' : require('../assets/fonts/PrincessSofia-Regular.ttf'),
      'FontAwesome' : require('../assets/fonts/PrincessSofia-Regular.ttf'),

    });
    console.log('fonts loaded!');
    this.setState({ fontLoaded: true });
  }
  render() {
    const scenes = Actions.create(
      <Scene key="root">
        <Scene key="main" component={Main} hideNavBar />
        <Scene key="detail" component={Detail} hideNavBar initial={false}/>
        <Scene key="address" component={Address} hideNavBar initial={false}/>

      </Scene>
    );

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{ flex: 1 }}>
        {this.state.fontLoaded == true ? <Router scenes={scenes} /> : null}
      </KeyboardAvoidingView>
    );
  }
}
