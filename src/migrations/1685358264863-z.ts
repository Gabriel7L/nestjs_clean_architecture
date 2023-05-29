import { MigrationInterface, QueryRunner } from 'typeorm';

export class Z1685358264863 implements MigrationInterface {
  name = 'Z1685358264863';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "id_company" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_00ea7a8887b207a2b141b42647d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id_companie" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_00ea7a8887b207a2b141b42647d" FOREIGN KEY ("id_companie") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_00ea7a8887b207a2b141b42647d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id_companie" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_00ea7a8887b207a2b141b42647d" FOREIGN KEY ("id_companie") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id_company"`);
  }
}
