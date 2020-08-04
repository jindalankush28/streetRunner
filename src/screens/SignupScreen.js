import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';

import { NavigationEvents } from 'react-navigation'
import {Context as AuthContext} from '../context/AuthContext';
import AuthForms from '../components/AuthForms'
import NavLink from '../components/NavLink'

const SignupScreen = () => {
  const {state,signup,clearError}=useContext(AuthContext)
  

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearError} />
      <AuthForms 
      errorMessage={state.errorMessage}
      headerText='Sign up' 
      onSubmit={signup} 
      submitButtonText='Sign up'/>
      <NavLink link='Signin' linkText='already have an account' />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

export default SignupScreen;
