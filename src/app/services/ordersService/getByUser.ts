import { httpClient } from "../httpClient";

interface GetByUserParams {
  user_id: string;
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

export async function GetByUser(user_id: GetByUserParams) {
  const data = await httpClient.get<GetByUserResponse>("orders", {
    params: user_id,
  });

  return data;
}
