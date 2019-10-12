import React from 'react'

import {
  Text,
  View,
  Dimensions,
} from 'react-native'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  }
}

export default class Test extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container} >
        <Text> This is demo</Text>
      </View>
    )
  }
}