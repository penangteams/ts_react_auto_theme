/** @format */

export interface CardProps {
  title: string;
  img: any;
  description: string;
  cta: string;
}

export interface LFormValue {
  username: string;
  password: string;
}

export interface SFormValue {
  username: string;
  password: string;
  email: string;
  re_password: string;
  first_name: string;
  last_name: string;
}

export interface IUser {
  username: string;
}
