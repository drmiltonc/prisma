import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { User } from "../entities/dato.entity";

export class CreateUserDto extends User {
    @IsNotEmpty()
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsString()
    public firstName: string;

    @IsNotEmpty()
    @IsString()
    public lastName: string;
}
