import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native'
import { WebView } from 'react-native-webview'

interface IProps {

}

interface IState {

}

export class WebComponent extends PureComponent<IProps, IState> {
  render(){
    return(
      <View style={styles.container}>
        <StatusBar 
          barStyle='dark-content' 
          backgroundColor = "#ebedef" 
        />
       <WebView source={{ uri: 'https://deals.planetrent.co.uk/users/sign_in' }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  }
})