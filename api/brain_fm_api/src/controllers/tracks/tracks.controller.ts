import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from 'src/models/ApiResponse';
import { Track } from 'src/models/Track';
import { TracksService } from 'src/services/tracks/tracks.service';

@Controller('tracks')
export class TracksController {
    constructor(private service: TracksService) {}

    @Get('focus')
    public getFocusTracklist(): ApiResponse<Track[]> {
        return {
            data: this.service.getFocusTracks(),
        };
    }

    @Get('relax')
    public getRelaxTracklist(): ApiResponse<Track[]> {
        return {
            data: this.service.getRelaxTracks(),
        };
    }

    @Get('sleep')
    public getSleepTracklist(): ApiResponse<Track[]> {
        return {
            data: this.service.getSleepTracks(),
        };
    }
}
