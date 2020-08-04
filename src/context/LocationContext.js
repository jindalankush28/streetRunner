import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef'
const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_location':
            return {...state,
                currentLocation:action.payload}
        case 'start_recording':
            return {...state,recording:true}
        case 'stop_recording':
            return {...state,recording:false}
        case 'add_cords':
            return {...state,locations:[...state.locations,action.payload]}
        case 'change_name':
            return {...state,name:action.payload}
        case 'reset':
            return {...state,name:'',locations:[]}
        default:
            return state;
    }
}
const changeName =dispatch=>(name)=>{
    dispatch({type:'change_name',payload:name})
}
const startRecording = dispatch =>()=>{
    dispatch({type:'start_recording'})
}
const stopRecording =dispatch=>()=>{
    dispatch({type:'stop_recording'})
}
const addLocation=dispatch=>(location,recording)=>{
    dispatch({type:'add_location',payload:location})
    if (recording){
        dispatch({type:'add_cords',payload:location})
    }

}
const reset=dispatch=>()=>{
    dispatch({type:'reset'})
}
export const { Provider, Context } = createDataContext(
    locationReducer,
    { stopRecording,startRecording,addLocation,changeName ,reset},
    { name:'',recording: false ,locations:[],currentLocation:null}
);