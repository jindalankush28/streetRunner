import React, { useState,useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext'
import useSaveTracks from '../hooks/useSaveTracks'
const TrackForm= () => {
    const {state:{name,recording,locations},startRecording,stopRecording,changeName}=useContext(LocationContext);
    const [saveTracks]=useSaveTracks()
    return (
        <>
        <Spacer>
            <Input value={name} placeholder="Enter Name" onChangeText={changeName}/>
        </Spacer>
        <Spacer>
        {recording? <Button title="stop recording" onPress={stopRecording}/>:
        <Button title="start recording" onPress={startRecording}/>}
            </Spacer>
        <Spacer>
            {(!recording && locations.length) ? <Button onPress={saveTracks} title="save recording"/>:null}
        </Spacer>
        </>
    )
};
const styles = StyleSheet.create({

})
export default TrackForm;