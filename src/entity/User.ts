import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm";
import { DB_SCHEMA } from "../config/app";

@Entity("User", { schema: DB_SCHEMA })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @Column("varchar", { length: 300, nullable: true })
  firstName: string;

  @Column("varchar", { length: 300, nullable: true })
  lastName: string;

  @Column("integer", { nullable: true })
  age: number;
}