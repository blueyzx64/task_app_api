import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_4")
export class TaskCopy4 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy4, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy4;

	@OneToMany(() => TaskCopy4, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy4[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
