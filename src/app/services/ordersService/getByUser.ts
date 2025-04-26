import { httpClient } from "../httpClient";

interface GetByUserParams {
  userId: string;
}

type GetByUserResponse = Array<{
  id: string;
  created_at: string;
  product: {
    model_name: string;
    value: number;
    product_model: {
      image_name: string;
    };
  };
}>;

export async function GetByUser({ userId }: GetByUserParams) {
  const { data } = await httpClient.get<GetByUserResponse>("orders", {
    params: { userId },
  });

  return data;
}
