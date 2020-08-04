import { useState, useEffect,useContext } from 'react';
import {Context as TrackContext} from '../context/TrackContext'
import {Context as LocationContext } from '../context/LocationContext'
import {navigate} from '../navigationRef'
export default ()=>{
    const {createTracks} =useContext(TrackContext)
    const {state:{name,locations},reset} = useContext(LocationContext)

    const saveTracks = async()=>{
       await createTracks(name,locations)
       reset()
       navigate('TrackList')
    };
    return [saveTracks]
}

