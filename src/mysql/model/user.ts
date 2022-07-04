import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id:number;
    @ApiProperty()
    @Column()
    firstName:string;
    @ApiProperty()
    @Column()
    lastName:string;
    @ApiProperty()
    @Column()
    birthDate:Date;
    @ApiProperty()
    @Column({default:true})
    isActive:boolean;
}