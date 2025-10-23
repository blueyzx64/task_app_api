import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_18")
export class TaskCopy18 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy18, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy18>;

	@OneToMany(() => TaskCopy18, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy18[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
