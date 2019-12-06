/**
 * @Description:
 * @author Lucas Liu
 * @date 2019/12/6
 * @format
 * @flow
*/
import React, {Component} from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    FlatList,
    RefreshControl,
    Text,
    ScrollView,
    StatusBar,
    ActivityIndicator,
    SectionList
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const CITY_NAMES = [
    {data:['北京','上海','深圳','广州'], title:'一线城市'},
    {data:['杭州','苏州','成都','武汉','郑州'], title:'二三线城市'},
    {data:['珠海','厦门','福州','广西','江西'], title:'四线城市'}
    ];

type Props = {};
export default class SectionListDemo extends Component<Props> {
    _keyExtractor = (item, index) => item.id;
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataArray: CITY_NAMES
        }
    }

    loadData(refreshing) {
        if (refreshing) {
            this.setState({
                isLoading: true
            });
        }
        setTimeout(() => {
            let dataArray = [];
            if (refreshing) {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i]);
                }
            }else{
                dataArray = this.state.dataArray.concat(CITY_NAMES);
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false,
            });
        },2000);
    }

    _renderItem(data) {
        return (
            <View style={styles.item}>
                <Text style={styles.text}>{data.item}</Text>
            </View>
        );
    }

    genIndicator() {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }

    _renderSectionHeader({section}) {
        return <View style={styles.sectionHeader}>
            <Text style={styles.text}>{section.title}</Text>
        </View>
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.dataArray}
                    renderItem={data => this._renderItem(data)}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            colors={['red']}
                            tintColor={'orange'}
                            titleColor={'red'}
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.loadData(true);
                            }}
                        />
                    }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => {
                        this.loadData()
                    }}
                    renderSectionHeader={(data) => this._renderSectionHeader(data)}
                    ItemSeparatorComponent={()=><View style={styles.separator}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    item: {
        // backgroundColor: '#169',
        height: 80,
        // marginRight: 15,
        // marginLeft: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    indicator: {
        color: 'red',
        margin: 10,
    },
    sectionHeader: {
        height: 50,
        backgroundColor: '#93ebbe',
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
        flex: 1
    }
});
