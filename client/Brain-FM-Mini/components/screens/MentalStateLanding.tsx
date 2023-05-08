import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../styles/Stylesheet';
import { Screens } from '../../data/constants';
import { MentalStateStackScreenProps } from '../../types/RootStackParamList';

const MentalStateLanding: React.FC<MentalStateStackScreenProps> = (props) => {
    const LandingStyles = StyleSheet.create({
        button: {
            alignItems: 'center',
            borderWidth: 2,
            backgroundColor: '#373E5B',
            borderRadius: 20,
            padding: 5,
            marginBottom: 20,
        },
        focusButton: {
            borderColor: '#B66A83',
        },
        relaxButton: {
            borderColor: '#62A6D9',
        },
        sleepButton: {
            borderColor: '#7243DD',
        },
        image: {
            width: 200,
            height: 200,
        },
    });

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={GlobalStyles.main}>
                <Image style={GlobalStyles.iconImage} source={require('../../assets/landing_icon.png')} resizeMode='contain' />
                <TouchableOpacity 
                    style={[LandingStyles.button, LandingStyles.focusButton]} 
                    onPress={() => props.navigation.navigate(Screens.AudioPlayer, { name: 'focus', bg: '#A25F7D' })}>
                    <Image style={LandingStyles.image} source={require('../../assets/focus.png')} resizeMode='contain' />
                    <Text style={GlobalStyles.text}>focus</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[LandingStyles.button, LandingStyles.relaxButton]} 
                    onPress={() => props.navigation.navigate(Screens.AudioPlayer, { name: 'relax', bg: '#435D8A' })}>
                    <Image style={LandingStyles.image} source={require('../../assets/relax.png')} resizeMode='contain' />
                    <Text style={GlobalStyles.text}>relax</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[LandingStyles.button, LandingStyles.sleepButton]} 
                    onPress={() => props.navigation.navigate(Screens.AudioPlayer, { name: 'sleep', bg: '#493284' })}>
                    <Image style={LandingStyles.image} source={require('../../assets/sleep.png')} resizeMode='contain' />
                    <Text style={GlobalStyles.text}>sleep</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MentalStateLanding;