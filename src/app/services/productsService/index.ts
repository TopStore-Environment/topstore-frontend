import { create } from "./create";
import { getAll } from "./getAll";
import { getById } from "./getById";
import { getSalesStatistics } from "./getSalesStatistics";
import { remove } from "./remove";
import { update } from "./update";

export const productsService = {
  getAll,
  getById,
  getSalesStatistics,
  create,
  update,
  remove,
};
