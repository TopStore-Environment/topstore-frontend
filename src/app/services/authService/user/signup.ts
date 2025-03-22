import { httpClient } from "../../httpClient";

export interface SignupUserParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  access_token: string;
}

export async function signup(params: SignupUserParams) {
  const { data } = await httpClient.post<SignupResponse>("/{}", params);

  return data;
}
