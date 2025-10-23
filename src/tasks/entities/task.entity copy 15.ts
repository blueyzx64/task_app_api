import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_15")
export class TaskCopy15 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy15, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy15>;

	@OneToMany(() => TaskCopy15, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy15[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
