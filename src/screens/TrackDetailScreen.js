import React,{useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Context as TrackContext} from '../context/TrackContext'
import MapView,{Polyline} from 'react-native-maps';
const TrackDetailScreen = ({ navigation}) => {
  const {state}=useContext(TrackContext)
  const _id = navigation.getParams('_id')
  const track = state.find(t=>t.id === _id)
  const initialCoords = track.locations[0].coords
  return (
  <>
  <Text style={{ fontSize: 48 }}>{track.name}</Text>;
  <MapView
    style={styles.Map}
    initialRegion={{
      ...initialCoords,
      longitudeDelta:0.01,
      latitudeDelta:0.01
    }

    }>
    <Polyline coordinates={track.locations.map(loc =>loc.coords)}/>
  </MapView>
  </>
  )
};

const styles = StyleSheet.create({
  Map: {
    height: 300
  }
})

export default TrackDetailScreen;
