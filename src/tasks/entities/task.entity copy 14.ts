import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_14")
export class TaskCopy14 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy14, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy14>;

	@OneToMany(() => TaskCopy14, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy14[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
