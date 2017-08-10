/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class ScrollViewComponent extends Component {
	_onScroll(){
		//在滚动的过程中，每帧最多调用一次此回调函数。
	    // 调用的频率可以用scrollEventThrottle属性来控制。
	    console.log(13);
	}

  	render() {
    	return (
	      <ScrollView
	      	removeClippedSubviews={true}
	      	showsVerticalScrollIndicator={false}>
	      	<Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	        <Text style={ScrollViewTestStyle.scroll_item}>我是可以滚动的ScrollView</Text>
	      </ScrollView>
	    );
	}
}



const ScrollViewTestStyle = StyleSheet.create({
  	scroll_item: {
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2,},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        elevation: 3,
        overflow: 'hidden',
    },
})