import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from '../../styles/Stylesheet';
import { AudioPlayerStackScreenProps } from '../../types/RootStackParamList';
import ApiService from '../../services/ApiService';
import { Track } from '../../models/Track';
import { ApiResponse } from '../../types/APITypes';
import useAudioPlayback from '../../utils/useAudioPlayback';

const AudioPlayer: React.FC<AudioPlayerStackScreenProps> = (props) => {
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

    const [tracks, setTracks] = useState<Track[]>([]);
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('00:00');
    const trackIndexRef = useRef(0);

    const next = async () => {
        if (playback) {
            trackIndexRef.current = trackIndexRef.current === tracks.length - 1 ? 0 : trackIndexRef.current + 1;
            await playback.unload();
            await playback.load(tracks[trackIndexRef.current].url, async () => await playback.play());
            setTitle(tracks[trackIndexRef.current].title);
        }
    };

    const playback = useAudioPlayback(async () => await next());
    const isLoading = tracks[trackIndexRef.current] !== null && !playback?.isLoaded;

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
                    setTitle(response.data[trackIndexRef.current].title);
                }
            }
            catch(err: any) {
                console.log(err);
            }
        })();
    }, []);

    useEffect(() => {
        if (tracks && tracks.length > 0) {
            (async () => {
                await playback?.load(tracks[trackIndexRef.current].url, async () => await playback?.play());
            })();
        }
    }, [tracks]);

    useEffect(() => {
        if (playback) {
            let positionSeconds = Math.round(playback.position / 1000);
            let minutes = Math.floor(positionSeconds / 60).toString().padStart(2, '0');
            let seconds = (positionSeconds % 60).toString().padStart(2, '0');
            setTime(`${minutes}:${seconds}`);
        }
    }, [playback?.position]);

    return (
        <View style={{height: '100%', backgroundColor: '#1B1738'}}>
            <ScrollView contentContainerStyle={[GlobalStyles.main, { flex: 1, flexDirection: 'column', justifyContent: 'center'}]}>
                <Image style={GlobalStyles.iconImage} source={require('../../assets/landing_icon.png')} resizeMode='contain' />
                <View style={PlayerStyles.infoContainer}>
                    <Text style={GlobalStyles.text}>{title}</Text>
                    <Text style={[GlobalStyles.text, { fontSize: 90, fontWeight: 'bold' }]}>{time}</Text>
                </View>
                <View style={PlayerStyles.controlsContainer}>
                    {!playback?.isPlaying && (
                        <TouchableOpacity onPress={async () => await playback?.play()} disabled={isLoading}>
                            <Image style={[PlayerStyles.playerIcon, { marginRight: 30 }]} source={require('../../assets/player/play.png')} resizeMode='contain' />
                        </TouchableOpacity>
                    )}

                    {playback?.isPlaying && (
                        <TouchableOpacity onPress={async () => await playback?.pause()} disabled={isLoading}>
                            <Image style={[PlayerStyles.playerIcon, { marginRight: 30 }]} source={require('../../assets/player/pause.png')} resizeMode='contain' />
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity onPress={async () => await next()} disabled={isLoading}>
                        <Image style={PlayerStyles.playerIcon} source={require('../../assets/player/next.png')} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default AudioPlayer;