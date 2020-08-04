import React, { useState} from 'react';
import { View, StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';


const AuthForms=({errorMessage,headerText,onSubmit,submitButtonText})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ?
                <Text
                    style={{ fontSize: 16, color: 'red', marginTop: 15, marginBottom: 15 }}>
                    {errorMessage}
                </Text> : null}
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({email,password})} />
            </Spacer>
        </>
    )
}





export default AuthForms;