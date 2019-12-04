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
    StyleSheet,
    View,
} from 'react-native';
import FlexBoxTest from './FlexBoxTest';
import AlignItems from './AlignItemsTest';
export default class Setup extends Component {
    constructor(props){
        super(props);
        this.state=({
            remove:false,
            size:0
        })
    }

    render() {
        var params={name:'WorldUnion', age:25, sex:'boy'};
        var {name, sex}=params;
        return <View style={styles.container}>
            <FlexBoxTest/>
            {/*<AlignItems/>*/}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5fcff',
        marginTop: 50
    }
})
