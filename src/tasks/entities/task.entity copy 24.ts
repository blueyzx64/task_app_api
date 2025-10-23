import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_24")
export class TaskCopy24 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy24, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy24>;

	@OneToMany(() => TaskCopy24, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy24[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
