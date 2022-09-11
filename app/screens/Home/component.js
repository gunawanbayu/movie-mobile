// import React, { Component } from 'react';

import React, { useEffect, useState } from 'react';
import { ActivityIndicator,FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
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
    _getMovies = async () => {
        try {
         const response = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
         const json = await response.json();
         this.setState({dataMovie:json});
       } catch (error) {
         console.error(error);
       } finally {
        this.setState({isloading:true,dataMovie});
       }
     }
    _listTranding=()=>{
        const {  dataMovie} = this.state;
        return(
            <View>
                <Text style={{color: 'white',fontWeight:'bold',fontSize:20}}>Top Tranding</Text>
                <FlatList
                data={dataMovie}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail',{itemData:item})} style={{margin: 12}}>
                        <Image source={{uri : item.Poster}}
                        style={{height:200, width:140,borderRadius: 4,}} resizeMode="cover"/>
                        <View style={{width:120,marginTop:12}}>
                            <Text style={{color: 'white',fontWeight:'bold',fontSize:12}}>{item.Title}</Text>
                            <Text style={{color: 'grey',fontSize:12}}>{item.Year} - US</Text>
                            <Text style={{color: 'grey',fontSize:12}}>{item.Runtime}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                />
            </View>
        );
    }
    _listMovie=() => {
        const {  dataMovie} = this.state;
        return(
        <FlatList
            data={dataMovie}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Detail',{itemData:item})} style={{margin: 12,flexDirection: 'row',}}>
                    <Image source={{uri : item.Poster}}
                    style={{height:120, width:80,borderRadius: 4,}} resizeMode="cover"/>
                    <View style={{width:200,marginLeft:22}}>
                        <Text style={{color: 'white',fontWeight:'bold',fontSize:20}}>{item.Title}</Text>
                        <Text style={{color: 'grey',fontSize:12}}>{item.Year} - US</Text>
                        <Text style={{color: 'grey',fontSize:12}}>{item.Runtime}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
            );
    }
  render() {
    const { isloading} = this.state;
    return (
        <View style={{flex:1, backgroundColor: '#0e1d3a',padding:20}}>
            <ScrollView >
                    {isloading ? <ActivityIndicator/> : (
                        this._listTranding()
                    )}
                    <View style={{borderWidth:0.4,borderColor:'grey',margin:20}} />
                    {this._listMovie()}
            </ScrollView>
      
    </View>
    );
  }
}
