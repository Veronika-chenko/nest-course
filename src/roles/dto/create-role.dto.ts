import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateRoleDto {
    @ApiProperty({example: 'user@gmail.com', description: 'User email'})
    readonly value: string;
    @ApiProperty({example: '123123', description: 'User password'})
    readonly description: string;
}