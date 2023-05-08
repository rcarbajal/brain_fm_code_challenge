import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TracksController } from './controllers/tracks/tracks.controller';
import { TracksService } from './services/tracks/tracks.service';

@Module({
  imports: [],
  controllers: [AppController, TracksController],
  providers: [AppService, TracksService],
})
export class AppModule {}
