export type Task = {
  completed: boolean | null;
  createdAt: Date;
  id: string;
  text: string;
  uid: string | null;
  updatedAt: Date;
};
