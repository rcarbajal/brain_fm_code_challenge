import React, { useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from '../../data/constants';
import MentalStateLanding from '../screens/MentalStateLanding';
import AudioPlayer from '../screens/AudioPlayer';
import { RootStackParamList } from '../../types/RootStackParamList';

const Stack  = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
    const navigationRef = useRef<any>(undefined);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator 
                initialRouteName={Screens.Landing}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Screens.Landing} component={MentalStateLanding} />
                <Stack.Screen 
                    name={Screens.AudioPlayer} 
                    component={AudioPlayer}
                    options={({ route }) => (
                        {
                            headerStyle: { backgroundColor: route?.params?.bg },
                            headerTintColor: '#fff',
                            title: route?.params?.name,
                            headerShown: true,
                        }
                    )} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}