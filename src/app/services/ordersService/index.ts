import { create } from "./create";
import { getAll } from "./getAll";
import { getByUser } from "./getByUser";
import { remove } from "./remove";

export const ordersService = {
  create,
  remove,
  getByUser,
  getAll,
};
