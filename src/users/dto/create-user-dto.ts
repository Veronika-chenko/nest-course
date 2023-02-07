import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateUserDto {
    @ApiProperty({example: 'user@gmail.com', description: 'User email'})
    readonly email: string;
    @ApiProperty({example: '123123', description: 'User password'})
    readonly password: string;
}