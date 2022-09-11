// import React, { Component } from 'react';

import React, { useEffect, useState } from 'react';
import { ActivityIndicator,FlatList, Image, ScrollView, Text, View } from "react-native";
export default class Component extends React.Component {
    
    constructor(props){
        super(props)
     this.state={
        isloading:false,
        isChange:false,
        dataMovie:[]
     }   
    }
    componentDidMount = async () => {
        await this._getMovies();
      };

  render() {
    const { itemData } = this.props.route.params;
    return (
        <View style={{flex:1, backgroundColor: '#0e1d3a',}}>
            <ScrollView >
            <View style={{justifyContent: 'center', alignItems: 'center',marginTop:20}}>
            <Image source={{uri : itemData.Poster}} style={{height:400, width:260,borderRadius: 4,}} resizeMode="cover"/>
            </View>
            <View style={{margin:30,}}>
                <Text style={{color: 'white',fontWeight:'bold',fontSize:28}}>{itemData.Title}</Text>
                <Text style={{color: 'grey',fontSize:12}}>{itemData.Year} - US</Text>
                <Text style={{color: 'grey',fontSize:12}}>{itemData.Runtime}</Text>
            </View>
            </ScrollView>
      
    </View>
    );
  }
}
