import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_10")
export class TaskCopy10 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy10, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy10;

	@OneToMany(() => TaskCopy10, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy10[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
