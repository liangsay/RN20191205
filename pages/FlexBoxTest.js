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
    Text,
    View,
} from 'react-native';
export default class FlexBoxTest extends Component {
    render() {
        return(
          <View style={{
              flexDirection:'column',
              backgroundColor: 'darkgray',
              marginTop: 0,
              alignItems:'center',
              height:500,
              justifyContent:'center',
              borderWidth:5,
              borderColor:'#066155'
              // flexWrap:'wrap'
          }}>
              <View style={{width: 50, height: 40,backgroundColor: 'darkcyan', margin: 5,alignSelf:'flex-end'}}>
                  <Text style={{fontSize: 16}}>1</Text>
              </View>
              <View style={{width: 50, height: 40, backgroundColor: 'darkcyan', margin: 5, flex:1,position: 'relative',}}>
                  <Text style={{fontSize: 16}}>2</Text>
              </View>
              <View style={{width: 50, height: 40, backgroundColor: 'darkcyan', margin: 5, flex:2}}>
                  <Text style={{fontSize: 16}}>3</Text>
              </View>
              <View style={{width: 50, height: 40, backgroundColor: 'darkcyan', margin: 5, flex:1}}>
                  <Text style={{fontSize: 16}}>4</Text>
              </View>
          </View>
        );
    }
}
