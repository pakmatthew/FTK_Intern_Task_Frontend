export interface Task {
  id: string;
  name: string;
  seqNumber: string;
  status: TaskStatus;
}

export enum TaskStatus{
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETE = 'COMPLETE'
}

export enum TaskClickAction {
  DELETE = "DELETE",
  EDIT = "EDIT",
  COMPLETE = "COMPLETE",
}
