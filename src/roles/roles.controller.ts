import { Controller } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@ApiTags('Ruthorization')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @Get('/:value ')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }

}
