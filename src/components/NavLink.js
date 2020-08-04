import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {withNavigation} from 'react-navigation'

const NavLink = ({ navigation,link,linkText }) => {
    return (<TouchableOpacity

        onPress={() => { navigation.navigate(link) }}>
            <Spacer>
        <Text style={{ fontSize: 20, color: 'blue', marginLeft: 10 }}>{linkText}</Text>
        </Spacer>
    </TouchableOpacity>)
};

export default withNavigation(NavLink);