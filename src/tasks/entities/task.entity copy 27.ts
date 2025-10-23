import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_27")
export class TaskCopy27 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy27, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy27;

	@OneToMany(() => TaskCopy27, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy27[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
