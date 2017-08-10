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
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

export default class Meituan extends Component{
  render(){
    return(
      <View>
        <View style={styles.part_1_container}>
          <View style={[styles.part_1_left,{padding:5}]}>
            <Text style={[styles.font14,styles.green,{marginTop:10}]}>我们约吧</Text>
            <Text style={[styles.font12,{marginTop:10}]}>恋爱家人好朋友</Text>
            <Image style={{height:80,marginTop:8,resizeMode:Image.resizeMode.contain}} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}/>
          </View>

          <View style={styles.part_1_right}>
            <View style={[styles.part_1_second,styles.row]}>
              <View style={[styles.flex1,{alignItems:'center',justifyContent:'center'}]}>
                <Text style={[styles.font14,styles.red]}>低价超值</Text>
                <Text style={[styles.font12,{marginTop:8}]}>十元惠生活</Text>
              </View>
              <View style={[styles.flex1,{alignItems:'center',justifyContent:'center'}]}>
                <Image style={{width:50,height:50}} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}/>
              </View>
            </View>
            <View style={[styles.flex1,styles.row]}>
              <View style={[styles.part_1_third,{padding:5}]}>
                <Text style={[styles.font14,{color:'#F742AB'}]}>聚餐宴请</Text>
                <Text style={[styles.font12,{marginTop:3}]}>朋友家人常聚聚</Text>
                <View style={{alignItems:'center'}}>
                  <Image style={{height:30,width:30}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}/>
                </View>
              </View>
              <View style={[styles.flex1,{padding:5}]}>
                <Text style={[styles.font14,styles.green]}>名店抢购</Text>
                <Text style={[styles.font12,{marginTop:3}]}>距离结束</Text>
                <Text style={{marginTop:3,fontWeight:'bold'}}>01:37:36</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.part_2_container}>
          <View style={[styles.flex1,styles.row]}>
            <View style={[styles.flex1,{justifyContent:'center',paddingLeft:10}]}>
              <Text style={[styles.font16,styles.red]}>1元吃大餐</Text>
              <Text style={styles.font12}>新用户专享</Text>
            </View>
            <View style={[styles.flex1,{justifyContent:'center'}]}>
              <Image style={{height:60, width:150}} source={{uri:'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}/>
            </View>
          </View>
          <View style={[styles.flex1,styles.row]}>
            <View style={[styles.row,styles.part_2_second,{alignItems:'center'}]}>
              <View style={{marginLeft:10}}>
                <Text style={[styles.font14,styles.green]}>撸串节狂欢</Text>
                <Text style={styles.font12}>烧烤6.6元起</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png'}}/>
              </View>
            </View>
            <View style={[styles.row,styles.part_2_third,{alignItems:'center'}]}>
              <View style={{marginLeft:10}}>
                <Text style={[styles.font14,styles.green]}>毕业旅行</Text>
                <Text style={styles.font12}>选好酒店才安心</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'}}/>
              </View>
            </View>
          </View>
          <View style={[styles.flex1,styles.row]}>
            <View style={[styles.row,styles.part_2_forth,{alignItems:'center'}]}>
              <View style={{marginLeft:10}}>
                <Text style={[styles.font14,styles.green]}>0元餐来袭</Text>
                <Text style={styles.font12}>免费吃喝玩乐</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png'}}/>
              </View>
            </View>
            <View style={[styles.row,styles.part_2_fifth,{alignItems:'center'}]}>
              <View style={{marginLeft:10}}>
                <Text style={[styles.font14,styles.green]}>热门团购</Text>
                <Text style={styles.font12}>大家都在买什么</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'}}/>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.part_3_container}>
          <View style={styles.part_3_left}>
            <View style={{alignItems:'center',paddingTop:15}}>
              <Text style={[styles.font16,{fontWeight:'bold'}]}>红火来袭</Text>
              <Text style={styles.font12}>优雅吃小龙虾</Text>
            </View>
            <View style={{marginTop:10,alignItems:'center'}}>
              <Image style={{height:80,width:80}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}/>
            </View>
          </View>
          <View style={styles.part_3_right}>
            <View style={[styles.row,styles.part_3_second,{alignItems:'center'}]}>
              <View style={{marginLeft:10,justifyContent:'center'}}>
                <Text style={[styles.font16]}>男女搭配</Text>
                <Text style={styles.font12}>齐心对抗地震</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}/>
              </View>
            </View>
            <View style={[styles.row,styles.part_3_third,{alignItems:'center'}]}>
              <View style={{marginLeft:10}}>
                <Text style={[styles.font16]}>六月玩海</Text>
                <Text style={styles.font12}>端午出行攻略</Text>
              </View>
              <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                <Image style={{width:60,height:55}} source={{uri: 'http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png'}}/>
              </View>
            </View>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    borderColor:'#DCD7CD',
  },

  part_3_left:{
    flex:1,
    borderColor:'white',
    borderRightWidth:0.5,
    backgroundColor:'#F3F3F3',
  },

  part_3_right:{
    flex:1,
    borderColor:'white',
    borderRightWidth:0.5
  },

  part_3_second:{
    flex:1,
    borderColor:'white',
    borderBottomWidth:0.5,
    backgroundColor:'#F3F3F3',
  },

  part_3_third:{
    flex:1,
    borderColor:'white',
    borderTopWidth:0.5,
    backgroundColor:'#F3F3F3',
  },
});