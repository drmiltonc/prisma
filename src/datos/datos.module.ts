import { Module } from '@nestjs/common';
import { UserService } from './datos.service';
import { UserController } from './datos.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class DatosModule {}
