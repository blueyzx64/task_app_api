import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_2")
export class TaskCopy2 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy2, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy2>;

	@OneToMany(() => TaskCopy2, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy2[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
