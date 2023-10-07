export type Task = {
  completed: boolean | null;
  createdAt: Date;
  id: string;
  text: string;
  tmp: string | null;
  uid: string | null;
  updatedAt: Date;
};
