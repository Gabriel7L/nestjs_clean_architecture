import { MigrationInterface, QueryRunner } from 'typeorm';

export class Z1683631657536 implements MigrationInterface {
  name = 'Z1683631657536';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "addresses" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "city" character varying(150) NOT NULL, "district" character varying(150) NOT NULL, "id_person" uuid NOT NULL, "complement" text, "state" character varying(15) NOT NULL, "street" character varying(250) NOT NULL, "zip_code" character varying(40) NOT NULL, "number" character varying(50) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "budget" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "description" text NOT NULL, "id_client" uuid NOT NULL, "value" numeric(10,2) NOT NULL, CONSTRAINT "PK_9af87bcfd2de21bd9630dddaa0e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "people" ("id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "document" character varying(50) NOT NULL, "dt_birth" TIMESTAMP NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD CONSTRAINT "FK_e1a42c9500409105c6469588d88" FOREIGN KEY ("id_person") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "budget" ADD CONSTRAINT "FK_4808fb4ded4e1752406f0ecddbf" FOREIGN KEY ("id_client") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "budget" DROP CONSTRAINT "FK_4808fb4ded4e1752406f0ecddbf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" DROP CONSTRAINT "FK_e1a42c9500409105c6469588d88"`,
    );
    await queryRunner.query(`DROP TABLE "people"`);
    await queryRunner.query(`DROP TABLE "budget"`);
    await queryRunner.query(`DROP TABLE "addresses"`);
  }
}
