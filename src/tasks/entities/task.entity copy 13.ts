import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_13")
export class TaskCopy13 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy13, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy13>;

	@OneToMany(() => TaskCopy13, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy13[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
