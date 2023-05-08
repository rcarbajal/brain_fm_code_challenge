import { Controller, Get } from '@nestjs/common';
import { Track } from 'src/models/Track';
import { TracksService } from 'src/services/tracks/tracks.service';

@Controller('tracks')
export class TracksController {
    constructor(private service: TracksService) {}

    @Get('focus')
    public getFocusTracklist(): Track[] {
        return this.service.getFocusTracks();
    }

    @Get('relax')
    public getRelaxTracklist(): Track[] {
        return this.service.getRelaxTracks();
    }

    @Get('sleep')
    public getSleepTracklist(): Track[] {
        return this.service.getSleepTracks();
    }
}
