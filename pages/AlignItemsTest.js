/**
 * @Description:
 * @author Lucas Liu
 * @date 2019/12/4
 * @format
 * @flow
*/
import React,{
    Component
} from 'react';
import {
    Text,
    View
} from 'react-native';
export default class AlignItems extends Component {
    render() {
        return (
          <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap:'wrap',
              alignItems: 'flex-end'
          }}>
              <Text style={{width:100,backgroundColor:'powderblue'}}>this is blue</Text>
          </View>
        );
    }
}
