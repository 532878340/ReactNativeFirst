/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

export default class ReactNativeFirst extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

class Bananas extends Component{
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <Image source={pic} style={{width:193,height:110}} />
    );
  }
}

class Greeting extends Component{
  render(){
    return (
      <Text>hello {this.props.a}!</Text>
    );
  }
}

class LotsofGreetings extends Component{
  render(){
    return(
      <View style={{alignItems:'center'}}>
        <Greeting name='Rexxar' a='1231'/>
        <Greeting name='Jaina'/>
        <Greeting name='Valeera'/>
      </View>
    );
  }
}

class Blink extends Component{
  constructor(props) {
    super(props);
  
    this.state = {showText:true};

    setInterval(() => {
      this.setState(previousState => {
        return {showText : !previousState.showText};
      })
    },1000);
  }

  render(){
    let display = this.state.showText ? this.props.text : '';
    return(
      <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component{
  render(){
    return (
      <View style={{alignItems:'center'}}>
        <Blink text='i love to blink'/>
        <Blink text='yes blinking is so great'/>
        <Blink text='why did they ever take this out of html'/>
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

class FixedDimensionsBasics extends Component{
  render(){
    return (
      <View>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
        <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}

class FlexDimensionBasics extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'powderblue'}}/>
        <View style={{flex:2,backgroundColor:'skyblue'}}/>
        <View style={{flex:3,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}

class FlexDirectionBasics extends Component{
  render(){
    return(
      <View style={{flexDirection:'row'}}>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
        <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}

class JustifyContentBasics extends Component{
  render(){
    return(
      <View style={{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between'
      }}>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
        <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}

class AlignItemBasics extends Component{
  render(){
    return(
      <View style={{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'stretch',
      }}>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
        <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}

class PizzaTranslator extends Component{
  constructor(props){
    super(props);
    this.state = {text:''};
  }

  render(){
    return(
      <View style={{padding:10}}>
        <TextInput 
          style={{height:40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />

        <Text style={{fontSize:42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

class ScrollViewBasic extends Component{
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }

    return(
      <ScrollView>
        <Text style={{fontSize:30}}>Scroll me plz</Text>
        <Image source={pic} style={{height:100,flex:1}}/>
        <Image source={pic} style={{width:180,height:100}}/>
        <Image source={pic} style={{width:180,height:100}}/>
        <Image source={pic} style={{width:180,height:100}}/>
        <Text style={{fontSize:30}}>If you like</Text>
        <Image source={pic} style={{width:180,height:100}}/>
        <Image source={pic} style={{width:180,height:100}}/>
        <Image source={pic} style={{width:180,height:100}}/>
        <Image source={pic} style={{width:180,height:100}}/>
        <Text style={{fontSize:30}}>Scrolling down</Text>
        <Image source={pic} style={{width:180,height:100}}/>
        <Image source={pic} style={{width:180,height:100}}/>
        <Image source={pic} style={{width:180,height:100}}/>
        <Image source={pic} style={{width:180,height:100}}/>
        <Text style={{fontSize:30}}>Framework around?</Text>
        <Image source={pic} style={{width:180,height:100}}/>
      </ScrollView>
    );
  }
}

class FlatListBasic extends Component{
  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: 'Devin1'},
            {key: 'Jackson1'},
            {key: 'James1'},
            {key: 'Joel1'},
            {key: 'John1'},
            {key: 'Jillian1'},
            {key: 'Jimmy1'},
            {key: 'Julie1'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

class SectionListBasic extends Component{
  render(){
    return(
      <View style={styles.container}>
        <SectionList
          sections={[
            {title:'D',data:['Devin']},
            {title:'F',data:['FJackson', 'FJames', 'FJillian', 'FJimmy', 'FJoel', 'FJohn', 'FJulie']},
            {title:'J',data:['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}

          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}

//美团页面

class Meituan extends Component{
  render(){
    return(
      <View>
        <View style={styles.part_1_container}>
          <View style={[styles.part_1_left,{padding:5}]}>
            <Text style={[styles.font14,styles.green,{marginTop:10}]}>我们约吧</Text>
            <Text style={[styles.font12,{marginTop:10}]}>恋爱家人好朋友</Text>
            <Image style={{height:80,marginTop:8}} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}/>
          </View>

          <View style={styles.part_1_right}>
            <View style={[styles.part_1_second]}>
              <Text style={[styles.font14,styles.red]}>低价超值</Text>
              <Text style={styles.font12}>十元惠生活</Text>
            </View>
            <View style={[styles.flex1,styles.row]}>
              <View style={styles.part_1_third}>
                <Text style={[styles.font14,{color:'#F742AB'}]}>聚餐宴请</Text>
                <Text style={styles.font12}>朋友家人常聚聚</Text>
                <Image style={{height:25,width:25}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}/>
              </View>
              <View style={[styles.flex1,{paddingLeft:5}]}>
                <Text style={[styles.font14,styles.green]}>名店抢购</Text>
                <Text style={styles.font12}>距离结束</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.part_2_container}>
          <View style={[styles.flex1,styles.row,{paddingLeft:10,alignItems:'center'}]}>
            <View>
              <Text style={[styles.font14,styles.green]}>1元吃大餐</Text>
              <Text style={styles.font12}>新用户专享</Text>
            </View>
            <View style={[styles.flex1,{alignItems:'flex-end',marginRight:30}]}>
              <Image style={{height:50, width:120}} source={{uri:'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}/>
            </View>

          </View>
          <View style={[styles.flex1,styles.row]}>
            <View style={styles.part_2_second}>
              <Text style={[styles.font14,styles.green]}>撸串节狂欢</Text>
              <Text style={styles.font12}>烧烤6.6元起</Text>
            </View>
            <View style={styles.part_2_third}>
              <Text style={[styles.font14,styles.green]}>毕业旅行</Text>
              <Text style={styles.font12}>选好酒店才安心</Text>
            </View>
          </View>
          <View style={[styles.flex1,styles.row]}>
            <View style={styles.part_2_forth}>
              <Text style={[styles.font14,styles.green]}>0元餐来袭</Text>
              <Text style={styles.font12}>免费吃喝玩乐购</Text>
            </View>
            <View style={styles.part_2_fifth}>
              <Text style={[styles.font14,styles.green]}>热门团购</Text>
              <Text style={styles.font12}>大家都在买什么</Text>
            </View>
          </View>
        </View>

        <View style={styles.part_3_container}>
          <View style={styles.part_3_left}>
            <Text style={[styles.font14,styles.green]}>红火来袭</Text>
            <Text style={styles.font12}>优雅吃小龙虾</Text>
          </View>
          <View style={styles.part_3_right}>
            <View  style={styles.part_3_second}>
              <Text style={[styles.font14,styles.green]}>男女搭配</Text>
              <Text style={styles.font12}>齐心对抗地震</Text>
            </View>
            <View  style={styles.part_3_third}>
              <Text style={[styles.font14,styles.green]}>六月玩海</Text>
              <Text style={styles.font12}>端午出行攻略</Text>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:22,
  },
  item:{
    padding:10,
    fontSize:18,
    height:44,
  },
  sectionHeader:{
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'grey',
  },

  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },

  //美团页面样式
  row:{
    flexDirection:'row',
  },

  font16:{
    fontSize:16,
  },

  font14:{
    fontSize:14,
  },

  font12:{
    fontSize:12,
  },

  green:{
    color:'#55A44B',
    fontWeight: '900'
  },

  red:{
      color: '#FF3F0D',
      fontWeight: '900'
  },

  part_1_container:{
    flexDirection:'row',
    height:160,
    backgroundColor:'white',
  },

  height160:{
    height:160,
  },

  part_1_left:{
    flex:1,
    borderRightWidth:0.5,
    borderBottomWidth:1,
    borderColor:'#DCD7CD',
  },

  part_1_right:{
    flex:2,
    borderLeftWidth:0.5,
    borderBottomWidth:1,
    borderColor:'#DCD7CD'
  },

  part_1_second:{
    flex:1,
    borderBottomWidth:1,
    borderColor:'#DCD7CD',
  },

  flex1:{
    flex:1,
  },

  part_1_third:{
    flex:1,
    borderRightWidth:1,
    paddingLeft:5,
    borderColor:'#DCD7CD',
  },

  part_2_container:{
    flexDirection:'column',
    height:200,
    borderBottomWidth:1,
    borderTopWidth:1,
    borderColor:'#DCD7CD',
    marginTop:15,
    marginBottom:15,
    backgroundColor:'white',
  },

  part_2_second:{
    flex:1,
    borderTopWidth:1,
    borderRightWidth:0.5,
    borderBottomWidth:1,
    borderColor:'#DCD7CD',
  },

  part_2_third:{
    flex:1,
    borderTopWidth:1,
    borderLeftWidth:0.5,
    borderBottomWidth:1,
    borderColor:'#DCD7CD',
  },

  part_2_forth:{
    flex:1,
    borderRightWidth:0.5,
    borderColor:'#DCD7CD',
  },
  part_2_fifth:{
    flex:1,
    borderLeftWidth:0.5,
    borderColor:'#DCD7CD',
  },

  part_3_container:{
    height:180,
    flexDirection:'row',
  },

  part_3_left:{
    flex:1,
    marginRight:0.5,
    backgroundColor:'#DCD7CD',
  },

  part_3_right:{
    flex:1,
    marginLeft:0.5,
  },

  part_3_second:{
    flex:1,
    marginBottom:0.5,
    backgroundColor:'#DCD7CD',
  },

  part_3_third:{
    flex:1,
    marginTop:0.5,
    backgroundColor:'#DCD7CD',
  },
});

AppRegistry.registerComponent('ReactNativeFirst', () => Meituan);