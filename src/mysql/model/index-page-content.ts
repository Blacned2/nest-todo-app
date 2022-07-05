import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IndexPageContent {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
    @ApiProperty()
    @Column()
    header1: string;
    @ApiProperty()
    @Column()
    mainPhotoUrl: string;
    @ApiProperty()
    @Column()
    mainPhotoDesc:string;
    @ApiProperty()
    @Column()
    innerContentDesc:string;
    @ApiProperty()
    @Column()
    secondPhotoUrl: string;
    @ApiProperty()
    @Column()
    secondPhotoDesc: string;
    @ApiProperty()
    @Column()
    authorPhotoUrl: string;
    @ApiProperty()
    @Column()
    authorName: string;
    @ApiProperty()
    @Column()
    authorDesc: string;
    @ApiProperty()
    @Column()
    authorFacebookAddress: string;
    @ApiProperty()
    @Column()
    authorTwitterAddress: string;
    @ApiProperty()
    @Column()
    authorInstagramAddress: string;
}