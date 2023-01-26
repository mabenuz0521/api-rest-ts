import { Auth } from "./auth.interface";

export interface User extends Auth {
  id?: string;
  name: string;
  description: string;
}

export type TokenData = {
  id?: string;
  name?: string;
  email?: string;
}
