/**
 * @Description:
 * @author Lucas Liu
 * @date 2019/12/4
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const CITY_NAMES = [
  '北京',
  '上海',
  '深圳',
  '广州',
  '南京',
  '香港',
  '杭州',
  '厦门',
  '澳门',
];

type Props = {};
export default class FlatListDemo extends Component<Props> {
  _renderItem(data) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{data.item}</Text>
      </View>
    );
  }
  render() {
      return (
          <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={styles.scrollView}>
              <View style={styles.container}>
                  <FlatList
                      data={CITY_NAMES}
                      renderItem={data => this._renderItem(data)}
                  />
              </View>
          </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#169',
    height: 200,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});
