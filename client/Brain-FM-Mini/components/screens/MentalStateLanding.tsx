import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../styles/Stylesheet';

export default function MentalStateLanding() {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={GlobalStyles.main}>
                <TouchableOpacity style={[LandingStyles.button, LandingStyles.focusButton]}>
                    <Image style={LandingStyles.image} source={require('../../assets/focus.png')} resizeMode='contain' />
                    <Text style={GlobalStyles.text}>focus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[LandingStyles.button, LandingStyles.relaxButton]}>
                    <Image style={LandingStyles.image} source={require('../../assets/relax.png')} resizeMode='contain' />
                    <Text style={GlobalStyles.text}>relax</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[LandingStyles.button, LandingStyles.sleepButton]}>
                    <Image style={LandingStyles.image} source={require('../../assets/sleep.png')} resizeMode='contain' />
                    <Text style={GlobalStyles.text}>sleep</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

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
    }
});