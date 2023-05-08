import React, { useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from '../../data/constants';
import MentalStateLanding from '../screens/MentalStateLanding';

const Stack  = createStackNavigator();

export default function RootNavigator() {
    const navigationRef = useRef(undefined);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Screens.Landing} component={MentalStateLanding} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}