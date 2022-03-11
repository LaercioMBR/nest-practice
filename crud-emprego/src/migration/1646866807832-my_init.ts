import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1646866807832 implements MigrationInterface {
    name = 'myInit1646866807832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "dateOfBirth"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD "dateOfBirth" date NOT NULL`);
    }

}
