import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    mental_state_landing: undefined;
    audio_player: { 
        name?: 'focus' | 'relax' | 'sleep',
        bg?: string,
    };
};

export type MentalStateStackScreenProps = NativeStackScreenProps<RootStackParamList, 'mental_state_landing'>;
export type AudioPlayerStackScreenProps = NativeStackScreenProps<RootStackParamList, 'audio_player'>;