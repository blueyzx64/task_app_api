import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_8")
export class TaskCopy8 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy8, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy8>;

	@OneToMany(() => TaskCopy8, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy8[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
