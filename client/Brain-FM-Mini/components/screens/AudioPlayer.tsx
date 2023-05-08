import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../styles/Stylesheet';
import { AudioPlayerStackScreenProps } from '../../models/RootStackParamList';

const AudioPlayer: React.FC<AudioPlayerStackScreenProps> = (props) => {
    const isPlaying: boolean = false;

    const PlayerStyles = StyleSheet.create({
        infoContainer: {
            backgroundColor: props.route?.params?.bg,
            borderColor: props.route?.params?.bg,
            borderWidth: 2,
            borderRadius: 10,
            padding: 15,
            alignItems: 'center',
        },
        controlsContainer: {
            marginTop: 50,
            backgroundColor: props.route?.params?.bg,
            borderColor: props.route?.params?.bg,
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

export default AudioPlayer;