import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { Column, DataType, Model, Table, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Role definition'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Administrator', description: 'Role description'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;
    //  c какой сущностью связываем и через какую таблицу это делаем
    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}