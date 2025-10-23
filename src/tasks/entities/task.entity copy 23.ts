import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_23")
export class TaskCopy23 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy23, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy23;

	@OneToMany(() => TaskCopy23, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy23[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
