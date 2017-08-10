/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  ListView,
  StyleSheet,
  View,
  RefreshControl,
  Timer,
} from 'react-native';

export default class ListViewComponent extends Component {
	constructor(props) {
	  super(props);
	  
	  var ds = new ListView.DataSource({
	  	rowHasChanged:(r1,r2) => r1 !== r2,
	  	sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
	  });

	  this.state = {
	  	dataSource:ds,
	  	data:{},
	  	isRefreshing: false,
	  }
	}

	componentDidMount(){
		// this.fetchData();
		this.fetchList();
	}

	componentWillUnmount(){
		this.timer && clearTimeout(this.timer);
	}

	fetchData(){
		const url = 'http://106.14.112.233/app/gold/info/steadyList.do';
		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				let wrapData = responseJson.data;
				this.setState({
					data:wrapData.list,
				});
			})
			.catch((error) => console.error(error));
	}

	async fetchList(){
		try{
			let response = await fetch('http://106.14.112.233/app/gold/info/steadyList.do');
			let json = await response.json();
			if(json){
				this.setState({
					data:json.data.list,
				});
			}
		}catch(e){
			console.log("网络请求失败:" + e);
		}
	}

	_renderRow(rowData,rowId){
		return(
			<View style={[ListViewStyle.item,{justifyContent:'center',alignItems:'center'}]}>
				<Text>{'rowData123132:' + rowData.productInformationName}</Text>
			</View>
		);
	}

	_onRefresh(){
		this.setState({isRefreshing:true});

		if(this.timer){
			clearTimeout(this.timer);
		}
		this.timer = setTimeout(() => {
			this.setState({
				isRefreshing:false,
			});
		},1000);
	}

  	render() {
  		if(this.state.data){
  			return (
				<View>
					<ListView
			    		dataSource = {this.state.dataSource.cloneWithRows(this.state.data)}
			    		renderRow={(rowData,sectionId,rowId) => this._renderRow(rowData,rowId)}
			    		showVerticalScrollIndicator={false}
			    		refreshControl={
			    			<RefreshControl
				    			refreshing={this.state.isRefreshing}
				    			onRefresh={() => this._onRefresh()}
				    			tintColor="#ff0000"
	            				title="Loading..."
	            				titleColor="#00ff00"
	            				colors={['#ff0000', '#00ff00', '#0000ff']}
	            				/>
			    		}
			    	/>
		    	</View>
    		);
  		}else{
  			return(
  				<Text>加载中......</Text>
  			);
  		}
	}
}



const ListViewStyle = StyleSheet.create({
	item:{
		height:100,
	}
})