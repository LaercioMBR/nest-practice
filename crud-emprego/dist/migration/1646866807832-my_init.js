"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myInit1646866807832 = void 0;
class myInit1646866807832 {
    constructor() {
        this.name = 'myInit1646866807832';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "dateOfBirth"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Users" ADD "dateOfBirth" date NOT NULL`);
    }
}
exports.myInit1646866807832 = myInit1646866807832;
//# sourceMappingURL=1646866807832-my_init.js.map