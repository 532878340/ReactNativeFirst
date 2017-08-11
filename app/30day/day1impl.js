'use strict';

import React,{ Component } from 'react';
import{
	View,
	Text,
	StyleSheet,
	Button,
	TouchableHighlight,
	ListView,
}from 'react-native';

class IntervalFace extends Component{
	static propTypes = {
	  sectionTime: React.PropTypes.string.isRequired,
	  totalTime: React.PropTypes.string.isRequired,
	}

	render(){
		return(
			<View style={[styles.face_container,styles.center]}>
				<View style={{alignItems:'flex-end'}}>
					<Text style={styles.little_time}>{this.props.sectionTime}</Text>
					<Text style={styles.big_time}>{this.props.totalTime}</Text>
				</View>
			</View>
		);
	}
}

class IntervalControl extends Component{
	static propTypes = {
	  addRecord: React.PropTypes.func.isRequired,
	  clearRecord: React.PropTypes.func.isRequired,
	  startInterval: React.PropTypes.func.isRequired,
	  stopInterval: React.PropTypes.func.isRequired,
	}

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	leftTxt:"记次",
	  	rightTxt:"启动",
	  	isRun:false,
	  	startBtnColor:"#60B644",
	  	underlayColor:"#fff",
	  };
	}

	leftClick(){
		if(this.state.isRun){
			this.props.addRecord();
		}else{
			this.props.clearRecord();
			this.setState({
				leftTxt:"记次",
			});
		}
	}

	rightClick(){
		if(this.state.isRun){
			this.props.stopInterval();
			this.setState({
				leftTxt:"复位",
				rightTxt:"启动",
				isRun:false,
				startBtnColor:'#60B644',
				underlayColor:"#fff",
			});
		}else{
			this.props.startInterval();
			this.setState({
				leftTxt:"记次",
				rightTxt:"停止",
				isRun:true,
				startBtnColor:'#ff0044',
				underlayColor:"#eee",
			});
		}
	}

	render(){
		return(
			<View style={[styles.control_container]}>
				<View style={[styles.flex1,styles.center]}>
					<TouchableHighlight 
						style={[styles.button,styles.center]} 
						underlayColor={this.state.underlayColor} 
						onPress={() => this.leftClick()}>
							<Text>{this.state.leftTxt}</Text>
					</TouchableHighlight>
				</View>
				<View style={[styles.flex1,styles.center]}>
					<TouchableHighlight 
						style={[styles.button,styles.center]} 
						underlayColor="#eee" 
						onPress={() => this.rightClick()}>
							<Text style={{color:this.state.startBtnColor}}>{this.state.rightTxt}</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

class RecordComponent extends Component{
	static propTypes = {
	  records: React.PropTypes.array.isRequired,
	}

	_renderRow(rowData){
		return(
			<View style={{height:40,flexDirection:'row'}}>
				<View style={[styles.flex1,styles.center]}>
					<Text>{rowData.title}</Text>
				</View>
				<View style={[styles.flex1,styles.center]}>
					<Text>{rowData.time}</Text>
				</View>
			</View>
		);
	}

	render(){
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    	theDataSource = ds.cloneWithRows(this.props.records);

		return (
			<ListView
				dataSource={theDataSource}
				renderRow={(rowData) => this._renderRow(rowData)}
				showVerticalScrollIndicator={false}
			    enableEmptySections={true}
				/>
		);
	};
}

export default class Interval extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	totalTime: '00:00.00',
	  	sectionTime: '00:00.00',
	  	stopInterval: false,
	  	isReset: false,
	  	initialTime: 0,
	  	accumulateTime: 0,
	  	recordTime: 0,
	  	initialTime: 0,
	  	currentTime: 0,
	  	recordCounter: 0,
	  	records:[],
	  };
	}

	_startInterval(){
		if(this.state.isReset){
			this.setState({
				accumulateTime: 0,
				isReset: false,
				stopInterval: false,
				initialTime: (new Date()).getTime(),
			});
		}else{
			this.setState({
				stopInterval: false,
				initialTime: (new Date()).getTime(),
			});
		}
		

		let currentTime,minute,second,micro,countingTime,seccountingTime,milMinute,milSecond,milMicro;

		let interval = setInterval(
			() => {
				this.setState({
					currentTime: (new Date()).getTime(),
				});
				
				countingTime = this.state.currentTime - this.state.initialTime + this.state.accumulateTime;
				minute = Math.floor(countingTime / (60 * 1000));
          		second = Math.floor((countingTime - 60000 * minute) / 1000);
          		micro = Math.floor(countingTime % 1000 / 10);

          		seccountingTime = countingTime - this.state.recordTime;
          		milMinute = Math.floor(seccountingTime / (60 * 1000));
          		milSecond = Math.floor((seccountingTime - 60000 * minute) / 1000);
          		milMicro = Math.floor(seccountingTime % 1000 / 10);

          		this.setState({
          			totalTime: (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second) + "." + (micro < 10 ? "0" + micro : micro),
          			sectionTime: (milMinute < 10 ? "0" + milMinute : milMinute) + ":" + (milSecond < 10 ? "0" + milSecond : milSecond) + "." + (milMicro < 10 ? "0" + milMicro : milMicro),
          		});

          		if(this.state.stopInterval){
          			this.setState({
          				accumulateTime: countingTime,
          			});
          			clearInterval(interval);
          		}
			}
		,10);
	}

	_stopInterval(){
		this.setState({
			stopInterval: true,
		});
	}

	_addRecord(){
		let {recordCounter, records} = this.state;
	    recordCounter ++;
	    records.unshift({title:"计次" + recordCounter,time:this.state.sectionTime});
	    this.setState({
	      recordTime: this.state.accumulateTime + this.state.currentTime - this.state.initialTime,
	      recordCounter: recordCounter,
	      records: records,
	    })
	}

	_clearRecord(){
		this.setState({
			totalTime: '00:00.00',
		  	sectionTime: '00:00.00',
		  	stopInterval: false,
		  	isReset: false,
		  	initialTime: 0,
		  	accumulateTime: 0,
		  	recordTime: 0,
		  	initialTime: 0,
		  	currentTime: 0,
		  	recordCounter: 0,
		  	records:[],
		});
	}

	componentDidMount(){
	}

	componentWillUnmount(){
		this._stopInterval();
		this._clearRecord();
	}

	render(){
		return(
			<View>
				<IntervalFace 
					totalTime={this.state.totalTime} 
					sectionTime={this.state.sectionTime}
					/>
				<IntervalControl 
					addRecord={() => this._addRecord()}
					clearRecord={() => this._clearRecord()}
					startInterval={() => this._startInterval()}
					stopInterval={() => this._stopInterval()}
					/>

				<RecordComponent 
					records={this.state.records}/>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	face_container:{
		backgroundColor:'white',
		height:150,
		marginTop:50,
	},

	center:{
		alignItems:'center',
		justifyContent:'center',
	},

	little_time:{
		fontSize: 22,
	},

	big_time:{
		fontSize: 50,
		fontWeight:'bold',
	},

	control_container:{
		height:100,
		flexDirection:'row',
		marginTop:50,
	},

	flex1:{
		flex:1,
	},

	button:{
		width:70,
		height:70,
		backgroundColor:'white',
		borderRadius:35,
	},
});