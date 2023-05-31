import { MigrationInterface, QueryRunner } from 'typeorm';

export class Z1685542873190 implements MigrationInterface {
  name = 'Z1685542873190';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "people" ADD "id_company" integer`);
    await queryRunner.query(
      `ALTER TABLE "people" ADD CONSTRAINT "FK_3bb463aae726eaef36ebe0ed7bb" FOREIGN KEY ("id_company") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "people" DROP CONSTRAINT "FK_3bb463aae726eaef36ebe0ed7bb"`,
    );
    await queryRunner.query(`ALTER TABLE "people" DROP COLUMN "id_company"`);
  }
}
