import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state,action) =>{
    switch(action.type){
        case 'fetch':
            return action.payload
        default:
            return state;
    }
}

const fetchTracks=dispatch=>async()=>{
    const response = await AsyncStorage.get('/tracks')
    dispatch({type:'fetch',payload:response.data})
}
const createTracks =dispatch=>async(name,locations)=>{
    await trackerApi.post('/tracks',{name,locations})
}

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks,createTracks},
    []
);