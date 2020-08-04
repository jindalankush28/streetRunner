import React,{useContext} from 'react';
import {Text } from 'react-native';
import {Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {SafeAreaView} from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'
const AccountScreen = () => {
  const {state,signout}=useContext(AuthContext)
  return <SafeAreaView forceInset={{top:'always'}}>
  <Text style={{ fontSize: 48 }}>AccountScreen</Text>
  <Spacer>
  <Button title="Sign out" onPress={signout}/>
  </Spacer>
  </SafeAreaView>
};

AccountScreen.navigationOptions = {
  title:'Account',
  tabBarIcon:<FontAwesome name="gear" size={24}/>
}
export default AccountScreen;
