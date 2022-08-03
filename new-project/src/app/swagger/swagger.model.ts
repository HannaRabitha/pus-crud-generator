// export class Swagger {
//   id!: number;
//   quote!: string;
// }

export class Swagger {
  id!: string;
  quote!: string;
  createdDate!: Date;
  author!: Author;
}

export class Author {
  id!: string;
  name!: string;
  email!: string;
}

export class RootObject {
  statusCode!: number;
  message!: string;
  isError!: boolean;
  data!: Swagger; //name of class component 
}
