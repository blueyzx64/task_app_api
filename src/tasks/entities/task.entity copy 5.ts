import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks_copy_5")
export class TaskCopy5 {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => TaskCopy5, (task) => task.tasks, { nullable: true })
	parentId: TaskCopy5;

	@OneToMany(() => TaskCopy5, (task) => task.parentId, { nullable: true })
	tasks: TaskCopy5[];

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
