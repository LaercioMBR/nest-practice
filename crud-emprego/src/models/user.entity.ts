import { PrimaryGeneratedColumn , Column, UpdateDateColumn, CreateDateColumn, Entity } from "typeorm";

@Entity({name:'Users'})
export abstract class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar' , length:'50' , nullable:false })
    name: string;

    @Column({type:'varchar' , length:'50' , nullable:false })
    cpf: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;
}