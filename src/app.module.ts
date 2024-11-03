import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ComputadorasModule } from './computadoras/computadoras.module';

@Module({
  imports: [ConfigModule.forRoot(), ComputadorasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
