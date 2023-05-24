import { MigrationInterface, QueryRunner } from 'typeorm';

export class Z1684957003394 implements MigrationInterface {
  name = 'Z1684957003394';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "companies" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fantasy_name" character varying(255) NOT NULL, "social_name" character varying(255) NOT NULL, "document" character varying(90) NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "users" ADD "id_companie" integer`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_00ea7a8887b207a2b141b42647d" FOREIGN KEY ("id_companie") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_00ea7a8887b207a2b141b42647d"`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "id_companie"`);
    await queryRunner.query(`DROP TABLE "companies"`);
  }
}
