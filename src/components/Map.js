import React, { useState,useContext } from 'react';
import { View, StyleSheet,ActivityIndicator } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import MapView,{Polyline,Circle} from 'react-native-maps';
import {requestPermissionsAsync} from 'expo-location';
import {Context as LocationContext} from '../context/LocationContext'

const Map=()=>{ 
    const {state:{currentLocation,locations}}=useContext(LocationContext);
    if (!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop:200}} />   
    }
    return <MapView 
    style={styles.Map}
    initialRegion={{ 
        ...currentLocation.coords,
        latitudeDelta:0.01,
        longitudeDelta:0.01
    }}
    region={{ 
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}>
        <Circle
        center={currentLocation.coords}
        radius={150}
        strokeColor="rgba(250,15,20,1)"
        fillColor="rgba(158,158,255,0.3)"/>
        <Polyline coordinates={locations.map(loc=>loc.coords)} style="black"
            closed={true}/>
        </MapView>

};
const styles = StyleSheet.create({
    Map:{
        height: 300
    }
})
export default Map;