import { MigrationInterface, QueryRunner } from 'typeorm';

export class Z1685358451165 implements MigrationInterface {
  name = 'Z1685358451165';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_00ea7a8887b207a2b141b42647d"`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id_companie"`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_b9e12c28cda5eb73ffbab4a663a" FOREIGN KEY ("id_company") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_b9e12c28cda5eb73ffbab4a663a"`,
    );
    await queryRunner.query(`ALTER TABLE "users" ADD "id_companie" integer`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_00ea7a8887b207a2b141b42647d" FOREIGN KEY ("id_companie") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
