import { Type } from "class-transformer";
import { IsOptional, IsNumber, Min, IsPositive } from "class-validator";

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @IsPositive()
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @IsPositive()
  @Type(() => Number)
  limit?: number= 10;
}