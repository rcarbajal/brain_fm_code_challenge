import { useCallback, useRef, useState } from 'react';
import { Audio, AVPlaybackStatus, AVPlaybackStatusSuccess, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import { useFocusEffect } from '@react-navigation/native';

export default function useAudioPlayback(onComplete: VoidFunction = () => {}) {
    const sound = useRef<Audio.Sound | undefined>();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState<number>(0);
    const [position, setPosition] = useState(0);
    const [url, setUrl] = useState('');

    const stop = useCallback(async () => {
        if (isPlaying) {
            try {
                await sound.current?.stopAsync();
            }
            catch(err: any) {
                console.log(err);
            }
        }
    }, []);

    const stopAndUnload = useCallback(async () => {
        await stop();

        try {
            await sound.current?.unloadAsync();
            setIsPlaying(false);
            setIsLoaded(false);
        }
        catch(err: any) {
            console.log(err);
        }
    }, [stop]);

    const updatePlaybackStatus = useCallback(async (playbackStatus: AVPlaybackStatus) => {
        const { isPlaying: isPlayingUpdated, positionMillis, durationMillis, didJustFinish } = playbackStatus as AVPlaybackStatusSuccess;

        setIsPlaying(isPlayingUpdated);

        if (durationMillis !== undefined)
            setDuration(durationMillis);

        if (isPlayingUpdated)
            setPosition(positionMillis);

        if (didJustFinish) {
            if (durationMillis !== undefined)
                setPosition(durationMillis);

            await stopAndUnload();
            onComplete();
        }
    }, [stopAndUnload, onComplete]);

    const load = useCallback(async (audioUrl: string, onLoadComplete: VoidFunction = () => {}) => {
        if (isLoaded) {
            await stopAndUnload();
        }

        setUrl(audioUrl);
        setIsLoaded(false);

        const loadedSound = await (async () => {
            try {
                if (!audioUrl || audioUrl === '')
                    return null;

                const result = await Audio.Sound.createAsync({ uri: audioUrl }, { positionMillis: 0 }, updatePlaybackStatus);
                return result.sound;
            }
            catch(err: any) {
                console.log(err);
                return null;
            }
        })();

        if (!loadedSound) return;
        
        try {
            await Audio.setAudioModeAsync({
                playsInSilentModeIOS: true,
                allowsRecordingIOS: false,
                staysActiveInBackground: true,
                interruptionModeIOS: InterruptionModeIOS.DoNotMix,
                shouldDuckAndroid: true,
                interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
                playThroughEarpieceAndroid: false,
            });

            sound.current = loadedSound;

            const playbackStatus = await sound.current?.getStatusAsync();

            if (playbackStatus.isLoaded && playbackStatus.durationMillis !== undefined)
                setDuration(playbackStatus.durationMillis);

            setIsLoaded(true);
            onLoadComplete();
        } 
        catch (err: any) {
            console.log(err);
        }
    }, [updatePlaybackStatus, isLoaded, url]);

    const play = useCallback(async () => {
        try {
            await sound.current?.playAsync();
        }
        catch(err: any) {
            console.log(err);
        }
    }, []);

    const pause = useCallback(async () => {
        try {
            await sound.current?.pauseAsync();
        } 
        catch(err: any) {
            console.log(err);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            return async () => {
                await stopAndUnload();
            };
        }, [])
    );

    return { 
        load, 
        unload: stopAndUnload,
        isLoaded,
        play, 
        isPlaying,
        pause, 
        stop, 
        duration, 
        position 
    };
}