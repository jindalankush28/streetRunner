import React,{useState,useEffect,useContext,useCallback} from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView ,withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import '../_mockLocation';
import {Context as LocationContext} from '../context/LocationContext'
import TrackForm from '../components/TrackForm';
import useLocation from '../hooks/useLocation';
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = ({isFocused}) => {
  const {addLocation,state:{recording,locations}}=useContext(LocationContext)
  const callback = useCallback((location)=>{addLocation(location,recording)},[recording])
  const [err]=useLocation(isFocused||recording,callback)
  console.log(locations.length)
  
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err? <Text>error</Text>: null}
      <TrackForm/>
    </SafeAreaView>
  );
};
TrackCreateScreen.navigationOptions={
  title:'Add track',
  tabBarIcon: <FontAwesome name="plus" size={24}/>
}
const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);