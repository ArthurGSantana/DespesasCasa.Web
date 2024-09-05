import { JwtPayload } from "jwt-decode";

export interface IToken extends JwtPayload {
  Permission: string[];
}