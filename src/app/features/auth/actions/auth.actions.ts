'use server';

import {LoginData} from "@app/auth/schemas/login.schema";

export const loginAction = async (credentials: LoginData) => {
  console.log(credentials);
  // TODO: use login post method
};

