import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../styles/Stylesheet';
import { AudioPlayerStackScreenProps } from '../../types/RootStackParamList';
import ApiService from '../../services/ApiService';
import { Track } from '../../models/Track';
import { ApiResponse } from '../../types/APITypes';

const AudioPlayer: React.FC<AudioPlayerStackScreenProps> = (props) => {
    const [tracks, setTracks] = useState<Track[]>([]);
    const [title, setTitle] = useState('');
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

    useEffect(() => {
        (async () => {
            try {
                const apiService = new ApiService();
                let response: ApiResponse<Track[]> | null = null;
                switch(props.route.params.name) {
                    case 'focus':
                        response = await apiService.getFocusTracks();
                        break;
                    case 'relax':
                        response = await apiService.getRelaxTracks();
                        break;
                    case 'sleep':
                        response = await apiService.getSleepTracks();
                        break;
                }

                if (response && response.data && response.data.length > 0) {
                    setTracks(response.data);
                    setTitle(response.data[0].title);
                }
            }
            catch(err: any) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <View style={{height: '100%', backgroundColor: '#1B1738'}}>
            <ScrollView contentContainerStyle={[GlobalStyles.main, { flex: 1, flexDirection: 'column', justifyContent: 'center'}]}>
                <Image style={GlobalStyles.iconImage} source={require('../../assets/landing_icon.png')} resizeMode='contain' />
                <View style={PlayerStyles.infoContainer}>
                    <Text style={GlobalStyles.text}>{title}</Text>
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