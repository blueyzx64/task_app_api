import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_25")
export class TaskCopy25 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy25, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy25;

	@OneToMany(() => TaskCopy25, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy25[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
