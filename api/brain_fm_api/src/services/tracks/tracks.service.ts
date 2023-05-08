import { Injectable } from '@nestjs/common';
import { TrackListing } from 'src/data/tracks';
import { Track } from 'src/models/Track';

@Injectable()
export class TracksService {
    public getFocusTracks(): Track[] {
        return TrackListing['focus'];
    }

    public getRelaxTracks(): Track[] {
        return TrackListing['relax'];
    }

    public getSleepTracks(): Track[] {
        return TrackListing['sleep'];
    }
}
