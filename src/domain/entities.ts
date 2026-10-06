export type TaskStatus='todo'|'in_progress'|'done'|'cancelled';
export type SessionOutcome='done'|'continue'|'blocked'|'cancelled';
export type Project={id:string;name:string;description:string|null;createdAt:string;updatedAt:string;archivedAt:string|null};
export type Task={id:string;projectId:string|null;parentTaskId:string|null;title:string;notes:string|null;status:TaskStatus;estimatedPomodoros:number|null;sortOrder:number;createdAt:string;updatedAt:string;completedAt:string|null};
export type FocusSession={id:string;taskId:string|null;plannedDurationSeconds:number;actualDurationSeconds:number|null;goal:string|null;startedAt:string;endedAt:string|null;outcome:SessionOutcome|null;outcomeNote:string|null;createdAt:string};
