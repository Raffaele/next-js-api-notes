type CreationUser = {
  fName: string;
  lName: string;
};

export type User = CreationUser & {
  id: number;
};

export const users: User[] = [
  {
    "id": 1,
    "fName": "John",
    "lName": "Doe"
  },
  {
    "id": 2,
    "fName": "Anakin",
    "lName": "Skywalker"
  },
  {
    "id": 3,
    "fName": "Foo",
    "lName": "Bar"
  },
  {
    "id": 4,
    "fName": "Julius",
    "lName": "Cesar"
  }
];


