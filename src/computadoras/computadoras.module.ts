import { Module } from '@nestjs/common';
import { ComputadorasService } from './computadoras.service';
import { ComputadorasController } from './computadoras.controller';

@Module({
  providers: [ComputadorasService],
  controllers: [ComputadorasController]
})
export class ComputadorasModule {}
