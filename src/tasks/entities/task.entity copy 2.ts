import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_2")
export class TaskCopy2 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy2, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy2;

	@OneToMany(() => TaskCopy2, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy2[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
