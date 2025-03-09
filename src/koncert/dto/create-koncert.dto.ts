import { Type } from "class-transformer";
import {  IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateKoncertDto {
  @IsString()
  @IsNotEmpty()
  fellepo: string

  @Type(() => Date)
  @IsNotEmpty()
  kezdesiIdo: Date

  @IsNumber()
  @IsNotEmpty()
  idotartam: number



}
