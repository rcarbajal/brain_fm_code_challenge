import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { TracksController } from './controllers/tracks/tracks.controller';
import { TracksService } from './services/tracks/tracks.service';

@Module({
  imports: [],
  controllers: [TracksController],
  providers: [AppService, TracksService],
})
export class AppModule {}
