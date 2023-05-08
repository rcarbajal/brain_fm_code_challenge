import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../styles/Stylesheet';
import { RouteProp, useRoute } from '@react-navigation/native';

export default function AudioPlayer() {
    const isPlaying: boolean = false;
    const route = useRoute<RouteProp<{ params?: { bg?: string }}>>();

    const PlayerStyles = StyleSheet.create({
        infoContainer: {
            backgroundColor: route?.params?.bg,
            borderColor: route?.params?.bg,
            borderWidth: 2,
            borderRadius: 10,
            padding: 15,
            alignItems: 'center',
        },
        controlsContainer: {
            marginTop: 50,
            backgroundColor: route?.params?.bg,
            borderColor: route?.params?.bg,
            borderWidth: 2,
            borderRadius: 10,
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'center',
        },
        playerIcon: {
            width: 50,
            height: 50,
        }
    });

    return (
        <View style={{height: '100%', backgroundColor: '#1B1738'}}>
            <ScrollView contentContainerStyle={[GlobalStyles.main, { flex: 1, flexDirection: 'column', justifyContent: 'center'}]}>
                <Image style={GlobalStyles.iconImage} source={require('../../assets/landing_icon.png')} resizeMode='contain' />
                <View style={PlayerStyles.infoContainer}>
                    <Text style={GlobalStyles.text}>
                        Treasure Cruise 
                    </Text>
                    <Text style={[GlobalStyles.text, { fontSize: 90, fontWeight: 'bold' }]}>
                        01:00 
                    </Text>
                </View>
                <View style={PlayerStyles.controlsContainer}>
                    {!isPlaying && <Image style={[PlayerStyles.playerIcon, { marginRight: 30 }]} source={require('../../assets/player/play.png')} resizeMode='contain' />}
                    {isPlaying && <Image style={[PlayerStyles.playerIcon, { marginRight: 30 }]} source={require('../../assets/player/pause.png')} resizeMode='contain' />}
                    <Image style={PlayerStyles.playerIcon} source={require('../../assets/player/next.png')} resizeMode='contain' />
                </View>
            </ScrollView>
        </View>
    );
}