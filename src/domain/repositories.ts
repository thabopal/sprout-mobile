import type { FocusSession,Project,Task } from './entities';
export interface ProjectRepository{listActive():Promise<Project[]>}
export interface TaskRepository{findById(id:string):Promise<Task|null>;listActive():Promise<Task[]>;complete(id:string):Promise<void>}
export interface FocusSessionRepository{findActive():Promise<FocusSession|null>}
