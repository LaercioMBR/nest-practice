"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myInit1646850613486 = void 0;
class myInit1646850613486 {
    constructor() {
        this.name = 'myInit1646850613486';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "cpf" character varying(50) NOT NULL, "dateOfBirth" date NOT NULL, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "Users"`);
    }
}
exports.myInit1646850613486 = myInit1646850613486;
//# sourceMappingURL=1646850613486-my_init.js.map