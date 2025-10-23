import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_19")
export class TaskCopy19 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy19, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<TaskCopy19>;

	@OneToMany(() => TaskCopy19, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<TaskCopy19[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
