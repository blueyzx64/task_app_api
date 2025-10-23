import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_21")
export class TaskCopy21 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy21, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy21;

	@OneToMany(() => TaskCopy21, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy21[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
