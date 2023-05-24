import { MigrationInterface, QueryRunner } from 'typeorm';

export class Z1684946696619 implements MigrationInterface {
  name = 'Z1684946696619';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "emails" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying(200) NOT NULL, "id_person" integer, CONSTRAINT "PK_a54dcebef8d05dca7e839749571" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "emails" ADD CONSTRAINT "FK_e06042ed2bb48d667c8d7f67a82" FOREIGN KEY ("id_person") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "emails" DROP CONSTRAINT "FK_e06042ed2bb48d667c8d7f67a82"`,
    );
    await queryRunner.query(`DROP TABLE "emails"`);
  }
}
