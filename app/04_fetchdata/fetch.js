/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
<script src="http://192.168.10.187:8097"/>

import React, {Component} from "react";
import {
	AppRegistry,
	Text,
	View,
} from "react-native";

export default class fetchData extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	user:null,
	  };
	}

	fetchList(){
		const url = 'http://106.14.112.233/app/gold/info/steadyList.do';
		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				var users = responseJson;
				console.log(users);
				this.setState({
				});
			})
			.catch((error) => console.error(error));
	}

	componentDidMount(){
		this.fetchList();
	}

	render(){
		let item = this.state.user;
		if(item){
			return this.renderItem(item);
		}

		return (
			<Text>加载中.....</Text>
		);
	}

	renderItem(item){
		return (
			<Text>{item.id + item.type}</Text>
		);
	}
}