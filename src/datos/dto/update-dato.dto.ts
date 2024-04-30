import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-dato.dto';
import { IsNumber, IsPositive, Max, Min } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
   /*  @IsNumber()
    @IsPositive()
    id: number; */
}
