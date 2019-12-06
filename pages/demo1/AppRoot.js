import {
    AppRegistry
} from 'react-native';
import {
    createAppContainer
} from 'react-navigation';
import {
    createStackNavigator,
    StackViewTransitionConfigs
} from 'react-navigation-stack';
import FlatListDemo from "./FlatListDemo";
import App from "./App";
import Test from "../Test";
import SectionListDemo from "./SectionListDemo";

/* The screens you add to IOS_MODAL_ROUTES will have the modal transition.  */
const IOS_MODAL_ROUTES = ['Test'];

let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
    const isModal = IOS_MODAL_ROUTES.some(
        screenName =>
            screenName === transitionProps.scene.route.routeName ||
            (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    )
    return StackViewTransitionConfigs.defaultTransitionConfig(
        transitionProps,
        prevTransitionProps,
        isModal
    );
};

const AppRoot = createStackNavigator({
        App: {
            screen: App,
        },
        FlatListDemo: {
            screen: FlatListDemo,
            navigationOptions: {
                title: 'FlatListDemo'
            }
        },
        SectionListDemo: {
            screen: SectionListDemo,
            navigationOptions: {
                title: 'SectionListDemo'
            }
        },
        Test:{
            screen:Test,
        }
    },
    {
        initialRouteName:'App',
        transitionConfig:dynamicModalTransition
    }
);

export default createAppContainer(AppRoot);

