import { PartialType } from '@nestjs/mapped-types';
import { CreateKoncertDto } from './create-koncert.dto';
import { IsBoolean, IsDate,  IsNumber, IsString } from 'class-validator';

export class UpdateKoncertDto extends PartialType(CreateKoncertDto) {
    @IsString()
    fellepo: string
  
    @IsDate()
    kezdesiIdo: Date
  
    @IsNumber()
    idotartam: number

    @IsBoolean()
    elmaradE: boolean
}
