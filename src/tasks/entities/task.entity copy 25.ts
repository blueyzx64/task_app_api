import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_25")
export class TaskCopy25 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy25, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy25>;

	@OneToMany(() => TaskCopy25, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy25[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
