/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import Swiper from 'react-native-swiper'

let Image_url = 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png';
var sliderImgs = [
    'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var Slider = React.createClass({
    render: function(){
	    return (
	      <Swiper height={90} 
	      	autoplay={true} 
	      	showsPagination={true}>
	        <Image style={[styles.flex1]} source={{uri: sliderImgs[0]}}/>
	        <Image style={[styles.flex1]} source={{uri: sliderImgs[1]}}/>
	        <Image style={[styles.flex1]} source={{uri: sliderImgs[2]}}/>
	      </Swiper>
	    );
  }
});

export default class XieCheng extends Component {
  render() {
    return (
    	<ScrollView style={{backgroundColor:'#ECECEC'}}>
	      	<Slider/>

	      	<View style={[styles.height90,styles.row,{backgroundColor:'skyblue'}]}>
	      		<View style={{flex:1,borderColor:'white',borderRightWidth:0.5,alignItems:'center',paddingTop:10}}>
	      			<Text style={[styles.font_normal]}>酒店</Text>
	      			<Image style={[styles.sub_icon_img]} source={{uri:Image_url}}/>
	      		</View>
	      		<View style={[styles.row,{flex:2,borderColor:'white',borderLeftWidth:0.5}]}>
	      			<View style={[styles.flex1,styles.border_fff]}>
	      				<View style={[styles.flex1,styles.border_fff,styles.center,{borderBottomWidth:0.5}]}>
	      					<Text style={[styles.font_normal]}>海外</Text>
	      				</View>
		      			<View style={[styles.flex1,styles.border_fff,styles.center,{borderTopWidth:0.5}]}>
		      				<Text style={[styles.font_normal]}>周边</Text>
		      			</View>
		      		</View>
	      			<View style={[styles.flex1,styles.border_fff,{borderLeftWidth:1}]}>
	      				<View style={[styles.flex1,styles.border_fff,styles.center,{borderBottomWidth:0.5}]}>
	      					<Text style={[styles.font_normal]}>团购.优惠</Text>
	      				</View>
		      			<View style={[styles.flex1,styles.border_fff,styles.center,{borderTopWidth:0.5}]}>
		      				<Text style={[styles.font_normal]}>客栈.公寓</Text>
		      			</View>
	      			</View>
	      		</View>
	      	</View>

	      	<View style={[styles.height90,styles.row,{backgroundColor:'gray'}]}>
	      		<View style={{flex:1,borderColor:'white',borderRightWidth:0.5,alignItems:'center',paddingTop:10}}>
	      			<Text style={[styles.font_normal]}>机票</Text>
	      			<Image style={[styles.sub_icon_img]} source={{uri:Image_url}}/>
	      		</View>
	      		<View style={[styles.row,{flex:2,borderColor:'white',borderLeftWidth:0.5}]}>
	      			<View style={[styles.flex1,styles.border_fff]}>
	      				<View style={[styles.flex1,styles.border_fff,styles.center,{borderBottomWidth:0.5}]}>
	      					<Text style={[styles.font_normal]}>火车票</Text>
	      				</View>
		      			<View style={[styles.flex1,styles.border_fff,styles.center,{borderTopWidth:0.5}]}>
		      				<Text style={[styles.font_normal]}>接收机</Text>
		      			</View>
		      		</View>
	      			<View style={[styles.flex1,styles.border_fff,{borderLeftWidth:1}]}>
	      				<View style={[styles.flex1,styles.border_fff,styles.center,{borderBottomWidth:0.5}]}>
	      					<Text style={[styles.font_normal]}>汽车票</Text>
	      				</View>
		      			<View style={[styles.flex1,styles.border_fff,styles.center,{borderTopWidth:0.5}]}>
		      				<Text style={[styles.font_normal]}>自驾.专车</Text>
		      			</View>
	      			</View>
	      		</View>
	      	</View>

	      	<View style={[styles.height90,styles.row,{backgroundColor:'blue'}]}>
	      		<View style={{flex:1,borderColor:'white',borderRightWidth:0.5,alignItems:'center',paddingTop:10}}>
	      			<Text style={[styles.font_normal]}>旅游</Text>
	      			<Image style={[styles.sub_icon_img]} source={{uri:Image_url}}/>
	      		</View>
	      		<View style={[styles.row,{flex:2,borderColor:'white',borderLeftWidth:0.5}]}>
	      			<View style={[styles.flex1,styles.border_fff]}>
	      				<View style={[styles.flex1,styles.border_fff,styles.center,{borderBottomWidth:0.5}]}>
	      					<Text style={[styles.font_normal]}>门票.玩乐</Text>
	      				</View>
		      			<View style={[styles.flex1,styles.row,styles.border_fff,styles.center,{borderTopWidth:0.5}]}>
		      				<Text style={[styles.font_normal]}>出镜</Text>
		      				<Text style={[styles.font_normal,{fontWeight:'bold'}]}>WiFi</Text>
		      			</View>
		      		</View>
	      			<View style={[styles.flex1,styles.border_fff,{borderLeftWidth:1}]}>
	      				<View style={[styles.flex1,styles.border_fff,styles.center,{borderBottomWidth:0.5}]}>
	      					<Text style={[styles.font_normal]}>游轮</Text>
	      				</View>
		      			<View style={[styles.flex1,styles.border_fff,styles.center,{borderTopWidth:0.5}]}>
		      				<Text style={[styles.font_normal]}>签证</Text>
		      			</View>
	      			</View>
	      		</View>
	      	</View>

	      	<View style={[styles.height90,styles.row,{backgroundColor:'red'}]}>
	      		<View style={{flex:1,borderColor:'white',borderRightWidth:0.5,alignItems:'center',paddingTop:10}}>
	      			<Text style={[styles.font_normal]}>攻略</Text>
	      			<Image style={[styles.sub_icon_img]} source={{uri:Image_url}}/>
	      		</View>
	      		<View style={[styles.row,{flex:2,borderColor:'white',borderLeftWidth:0.5}]}>
	      			<View style={[styles.flex1,styles.border_fff]}>
	      				<View style={[styles.flex1,styles.border_fff,styles.center,{borderBottomWidth:0.5}]}>
	      					<Text style={[styles.font_normal]}>周末游</Text>
	      				</View>
		      			<View style={[styles.flex1,styles.border_fff,styles.center,{borderTopWidth:0.5}]}>
		      				<Text style={[styles.font_normal]}>礼品卡</Text>
		      			</View>
		      		</View>
	      			<View style={[styles.flex1,styles.border_fff,{borderLeftWidth:1}]}>
	      				<View style={[styles.flex1,styles.border_fff,styles.center,{borderBottomWidth:0.5}]}>
	      					<Text style={[styles.font_normal]}>美食.购物</Text>
	      				</View>
		      			<View style={[styles.flex1,styles.border_fff,styles.center,{borderTopWidth:0.5}]}>
		      				<Text style={[styles.font_normal]}>更多</Text>
		      			</View>
	      			</View>
	      		</View>
	      	</View>

	      	<View style={[styles.height90,{height:160,backgroundColor:'white',marginBottom:10}]}>
	      		<View style={[styles.row,{height:55}]}>
	      			<View style={[styles.flex1,styles.border_right,styles.border_bottom,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>自由行</Text>
	      			</View>
	      			<View style={[styles.flex1,styles.border_right,styles.border_bottom,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>微领队</Text>
	      			</View>
	      			<View style={[styles.flex1,styles.border_right,styles.border_bottom,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>一日游</Text>
	      			</View>
	      			<View style={[styles.flex1,styles.border_bottom,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>高端游</Text>
	      			</View>
	      		</View>

	      		<View style={[styles.row,{height:55}]}>
	      			<View style={[styles.flex1,styles.border_right,styles.border_bottom,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>酒店+景点</Text>
	      			</View>
	      			<View style={[styles.flex1,styles.border_right,styles.border_bottom,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>海外玩乐</Text>
	      			</View>
	      			<View style={[styles.flex1,styles.border_right,styles.border_bottom,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>行李管家</Text>
	      			</View>
	      			<View style={[styles.flex1,styles.border_bottom,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>加盟合作</Text>
	      			</View>
	      		</View>

	      		<View style={[styles.row,{height:55}]}>
	      			<View style={[styles.flex1,styles.border_right,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>外币兑换</Text>
	      			</View>
	      			<View style={[styles.flex1,styles.border_right,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>当季去哪</Text>
	      			</View>
	      			<View style={[styles.flex1,styles.border_right,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>机场停车</Text>
	      			</View>
	      			<View style={[styles.flex1,styles.center]}>
	      				<Image style={[styles.little_icon_img]} source={{uri:Image_url}}/>
	      				<Text style={[styles.font_little]}>更多服务</Text>
	      			</View>
	      		</View>
	      	</View>
      	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	row:{
		flexDirection:'row',
	},

	flex1:{
		flex:1,
	},

	height90:{
		height:90,
		marginTop:10,
		marginLeft:5,
		marginRight:5,
		borderRadius:5,
		borderWidth:0.1,
		borderColor:'#00000000',
	},

	border_fff:{
		borderColor:'white',
	},

	font_normal:{
		fontSize:14,
		color:'white',
	},

	center:{
		alignItems:'center',
		justifyContent:'center',
	},

	sub_icon_img:{
		width:50,
		height:50,
		marginTop:5,
		resizeMode: Image.resizeMode.contain,
	},

	little_icon_img:{
		width:20,
		height:20,
	},

	font_little:{
		fontSize:10,
	},

	border_right:{
		borderColor:'#EFEFEF',
		borderRightWidth:0.5,
	},

	border_bottom:{
		borderColor:'#EFEFEF',
		borderBottomWidth:0.5,
	}
});