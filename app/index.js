/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry} from "react-native";

import {
	StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
	Main:{
		screen:xiecheng,
		navigationOptions:({navigation}) => ({
			title:'welcome',
		}),
	},
	Second:{screen:meituan},
});

// import helloWorld from './01_helloworld/helloWorld';
import meituan from './02_flex/flex';
import xiecheng from './03_flex_xiecheng/xiecheng';
// import fetch from './04_fetchdata/fetch';
import ScrollViewComponent from './05_scrollview/scrollview';
import listview from './05_scrollview/listview';

//第一天
import day1 from './30day/day1';
import day1impl from './30day/day1impl';

AppRegistry.registerComponent('ReactNativeFirst', () => day1impl);