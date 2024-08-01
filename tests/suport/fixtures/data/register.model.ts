export type Register = {
  first_name: string;
  last_name: string;
  address: string;
  email: string;
  phone: string;
  gender: "FeMale" | "Male";
  hobbies: "Cricket" | "Movies" | "Hockey";
  languages: string[];
  skills: string;
  country: string;
  birth: string;
  password: string;
  confirm_password: string;
};
