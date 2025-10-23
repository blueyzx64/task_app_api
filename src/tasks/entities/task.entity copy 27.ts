import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_27")
export class TaskCopy27 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy27, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy27>;

	@OneToMany(() => TaskCopy27, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy27[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
