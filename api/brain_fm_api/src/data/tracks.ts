import { Track } from "src/models/Track";

export const TrackListing: Record<'focus' | 'relax' | 'sleep', Track[]> = {
    'focus': [
        {
            title: 'Aspen Migration',
            length: 60,
            url: '/audio/focus/aspen_migration.mp3',
        },
        {
            title: 'Cyan',
            length: 60,
            url: '/audio/focus/cyan.mp3',
        },
        {
            title: 'Treasure Map',
            length: 60,
            url: '/audio/focus/treasure_map.mp3',
        },
    ],
    'relax': [
        {
            title: 'Bathed in Neon',
            length: 60,
            url: '/audio/relax/bathed_in_neon.mp3',
        },
        {
            title: 'Low Tide',
            length: 60,
            url: '/audio/relax/low_tide.mp3',
        },
        {
            title: 'Vapor',
            length: 60,
            url: '/audio/relax/vapor.mp3',
        },
    ],
    'sleep': [
        {
            title: 'Dark Moon',
            length: 60,
            url: '/audio/sleep/dark_moon.mp3',
        },
        {
            title: 'Lunaris',
            length: 60,
            url: '/audio/sleep/lunaris.mp3',
        },
        {
            title: 'Moonflower',
            length: 60,
            url: '/audio/sleep/moonflower.mp3',
        },
    ],
};