import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'User email'})
    @IsString({message: 'Should be a string'})
    @IsEmail({}, {message: 'Wrong email'})
    readonly email: string;

    @ApiProperty({example: '123123', description: 'User password'})
    @IsString({message: 'Should be a string'})
    @Length(4, 16, {message: 'min 4, max 16'})
    readonly password: string;
}