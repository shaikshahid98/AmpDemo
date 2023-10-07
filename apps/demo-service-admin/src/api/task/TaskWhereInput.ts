import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaskWhereInput = {
  completed?: BooleanNullableFilter;
  id?: StringFilter;
  text?: StringFilter;
  tmp?: StringNullableFilter;
  uid?: StringNullableFilter;
};
