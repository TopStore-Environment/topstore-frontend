import { httpClient } from "../httpClient";

type SalesStatisticsResponse = {
  orders: number;
  billing: number;
  best_selling_models: Array<string>;
  best_selling_colors: Array<string>;
};

export type SalesStatisticsFilters = {
  month: number;
  year: number;
};

export async function getSalesStatistics(filters: SalesStatisticsFilters) {
  const { data } = await httpClient.get<SalesStatisticsResponse>(
    "/products/sales_statistics",
    {
      params: filters,
    }
  );

  return data;
}
