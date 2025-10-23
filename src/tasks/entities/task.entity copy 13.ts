import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_13")
export class TaskCopy13 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy13, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy13;

	@OneToMany(() => TaskCopy13, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy13[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
