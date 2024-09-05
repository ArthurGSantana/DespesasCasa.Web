import { FormControl } from "@angular/forms";

export interface IAuth {
  token: string;
  user: any;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}