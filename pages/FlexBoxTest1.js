/**
 * @Description:
 * @author Lucas Liu
 * @date 2019/12/4
 * @format
 * @flow
*/

import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class FlexBoxTest extends Component {
    render() {
        return(
          <View style={{flexDirection:'column', backgroundColor: 'darkgray', marginTop: 20, flexWrap:'wrap', justifyContent:'space-around', height: 400}}>
              <View style={{width: 50, height: 40, backgroundColor: 'darkcyan', margin: 5}}>
                  <Text style={{fontSize: 16}}>1</Text>
              </View>
              <View style={{width: 50, height: 40, backgroundColor: 'darkcyan', margin: 5}}>
                  <Text style={{fontSize: 16}}>2</Text>
              </View>
              <View style={{width: 50, height: 40, backgroundColor: 'darkcyan', margin: 5}}>
                  <Text style={{fontSize: 16}}>3</Text>
              </View>
              <View style={{width: 50, height: 40, backgroundColor: 'darkcyan', margin: 5}}>
                  <Text style={{fontSize: 16}}>4</Text>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        marginTop: 50,
    }
})
