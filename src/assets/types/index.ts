
export interface Task{
  id: string;
  name: string;
  seqNumber: string;
  status: TaskStatus
}

export enum TaskStatus{
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

export enum TaskClickAction{
  DELETE = 'DELETE',
  EDIT = 'EDIT',
  COMPLETE = 'COMPLETE'
}