import { MigrationInterface, QueryRunner } from 'typeorm';

export class Z1685565957635 implements MigrationInterface {
  name = 'Z1685565957635';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "order_products" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "discount" numeric(2,2) NOT NULL, "id_product" integer NOT NULL, "product" character varying(255) NOT NULL, "id_order" integer NOT NULL, CONSTRAINT "PK_3e59f094c2dc3310d585216a813" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order_services" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "price" numeric(10,2) NOT NULL, "discount" numeric(2,2), "service_name" character varying(255) NOT NULL, "id_service" integer NOT NULL, "id_order" integer NOT NULL, CONSTRAINT "PK_74f048f792fe40516ac248ce060" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "orders" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "total_value" numeric(10,2) NOT NULL, "description" text NOT NULL, "id_client" integer NOT NULL, "discount" numeric(2,2), "status" character varying(70) NOT NULL, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ADD "person_type" character varying(2) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ADD "is_supplier" boolean NOT NULL DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" DROP CONSTRAINT "FK_3bb463aae726eaef36ebe0ed7bb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "id_company" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_products" ADD CONSTRAINT "FK_2f75509f269a8a3cecd337437d6" FOREIGN KEY ("id_order") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_services" ADD CONSTRAINT "FK_b97f044378e14235767aa0713ef" FOREIGN KEY ("id_order") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_6b672b0c04de2874809bdc7f211" FOREIGN KEY ("id_client") REFERENCES "people"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ADD CONSTRAINT "FK_3bb463aae726eaef36ebe0ed7bb" FOREIGN KEY ("id_company") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "people" DROP CONSTRAINT "FK_3bb463aae726eaef36ebe0ed7bb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_6b672b0c04de2874809bdc7f211"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_services" DROP CONSTRAINT "FK_b97f044378e14235767aa0713ef"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_products" DROP CONSTRAINT "FK_2f75509f269a8a3cecd337437d6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ALTER COLUMN "id_company" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "people" ADD CONSTRAINT "FK_3bb463aae726eaef36ebe0ed7bb" FOREIGN KEY ("id_company") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(`ALTER TABLE "people" DROP COLUMN "is_supplier"`);
    await queryRunner.query(`ALTER TABLE "people" DROP COLUMN "person_type"`);
    await queryRunner.query(`DROP TABLE "orders"`);
    await queryRunner.query(`DROP TABLE "order_services"`);
    await queryRunner.query(`DROP TABLE "order_products"`);
  }
}
