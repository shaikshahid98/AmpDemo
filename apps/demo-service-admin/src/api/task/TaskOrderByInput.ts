import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  tmp?: SortOrder;
  uid?: SortOrder;
  updatedAt?: SortOrder;
};
