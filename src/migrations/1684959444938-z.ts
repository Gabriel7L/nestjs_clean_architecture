import { MigrationInterface, QueryRunner } from 'typeorm';

export class Z1684959444938 implements MigrationInterface {
  name = 'Z1684959444938';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_00ea7a8887b207a2b141b42647d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_5cf8f4228202b67c88152ee7492"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id_companie" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id_person" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_5cf8f4228202b67c88152ee7492" FOREIGN KEY ("id_person") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
      `ALTER TABLE "users" DROP CONSTRAINT "FK_5cf8f4228202b67c88152ee7492"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id_person" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "id_companie" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_5cf8f4228202b67c88152ee7492" FOREIGN KEY ("id_person") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_00ea7a8887b207a2b141b42647d" FOREIGN KEY ("id_companie") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
