import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks")
export class Task {

	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@ManyToOne(() => Task, (task) => task.tasks, { nullable: true, lazy: true })
	parentId: Promise<Task>;

	@OneToMany(() => Task, (task) => task.parentId, { nullable: true, lazy: true })
	tasks: Promise<Task[]>;

	@Column()
	userId: number;

	// @UpdateDateColumn()

}
