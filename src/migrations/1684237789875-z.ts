import { MigrationInterface, QueryRunner } from 'typeorm';

export class Z1684237789875 implements MigrationInterface {
  name = 'Z1684237789875';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "addresses" DROP CONSTRAINT "FK_e1a42c9500409105c6469588d88"`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" DROP CONSTRAINT "PK_745d8f43d3af10ab8247465e450"`,
    );
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "addresses" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "id_person"`);
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD "id_person" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "budget" DROP CONSTRAINT "FK_4808fb4ded4e1752406f0ecddbf"`,
    );
    await queryRunner.query(
      `ALTER TABLE "budget" DROP CONSTRAINT "PK_9af87bcfd2de21bd9630dddaa0e"`,
    );
    await queryRunner.query(`ALTER TABLE "budget" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "budget" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "budget" ADD CONSTRAINT "PK_9af87bcfd2de21bd9630dddaa0e" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "budget" DROP COLUMN "id_client"`);
    await queryRunner.query(
      `ALTER TABLE "budget" ADD "id_client" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" DROP CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b"`,
    );
    await queryRunner.query(`ALTER TABLE "people" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "people" ADD "id" SERIAL NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "people" ADD CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b" PRIMARY KEY ("id")`,
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
    await queryRunner.query(
      `ALTER TABLE "people" DROP CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b"`,
    );
    await queryRunner.query(`ALTER TABLE "people" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "people" ADD "id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "people" ADD CONSTRAINT "PK_aa866e71353ee94c6cc51059c5b" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "budget" DROP COLUMN "id_client"`);
    await queryRunner.query(
      `ALTER TABLE "budget" ADD "id_client" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "budget" DROP CONSTRAINT "PK_9af87bcfd2de21bd9630dddaa0e"`,
    );
    await queryRunner.query(`ALTER TABLE "budget" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "budget" ADD "id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "budget" ADD CONSTRAINT "PK_9af87bcfd2de21bd9630dddaa0e" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "budget" ADD CONSTRAINT "FK_4808fb4ded4e1752406f0ecddbf" FOREIGN KEY ("id_client") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "id_person"`);
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD "id_person" uuid NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" DROP CONSTRAINT "PK_745d8f43d3af10ab8247465e450"`,
    );
    await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "addresses" ADD "id" uuid NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "addresses" ADD CONSTRAINT "FK_e1a42c9500409105c6469588d88" FOREIGN KEY ("id_person") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
