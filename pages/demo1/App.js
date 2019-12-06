import React,{Component} from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import FlatListDemo from "./FlatListDemo";
import SectionListDemo from "./SectionListDemo";
const instructions = Platform.select({
    ios: 'Press Cmd + R to reload.\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Share or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        const {navigation} = this.props;
        return (
          <View style={styles.container}>
              <Button title={'FlatListDemo点我'} onPress={() => {
                  navigation.navigate('FlatListDemo')
              }}/>
              <Button title={'SectionListDemo点我'} onPress={() => {
                  navigation.navigate('SectionListDemo')
              }}/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   }
});
